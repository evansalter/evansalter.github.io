// Renders each route of the built SPA to static HTML (for SEO and link previews)
// and writes a sitemap. Run after `vite build`.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { postObject } from '../src/components/blog/posts/posts.js'

const SITE_URL = 'https://www.evansalter.com'
const DIST = path.resolve(import.meta.dirname, '../dist')

const routes = ['/', '/projects', '/blog', ...Object.keys(postObject).map(slug => `/blog/${slug}`)]

const server = await preview({ preview: { port: 4173, strictPort: false }, logLevel: 'warn' })
const origin = server.resolvedUrls.local[0].replace(/\/$/, '')
const browser = await puppeteer.launch()

try {
  for (const route of routes) {
    const page = await browser.newPage()
    await page.setRequestInterception(true)
    // Skip analytics, Disqus, Twitter, etc. so they don't end up baked into the HTML
    page.on('request', req => (req.url().startsWith(origin) ? req.continue() : req.abort()))
    await page.goto(origin + route, { waitUntil: 'networkidle0' })
    await page.waitForSelector('.main-container')
    await page.evaluate(() => {
      // Drop third-party scripts injected at runtime; the app re-adds them when it boots
      document.querySelectorAll('script[src^="http"]:not(#dsq-count-scr)').forEach(s => s.remove())
    })
    const html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML)
    const outDir = path.join(DIST, route)
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    await page.close()
    console.log(`prerendered ${route}`)
  }
} finally {
  await browser.close()
  await new Promise(resolve => server.httpServer.close(resolve))
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url><loc>${SITE_URL}${r === '/' ? '' : r}</loc></url>`).join('\n')}
</urlset>
`
await writeFile(path.join(DIST, 'sitemap.xml'), sitemap)
console.log('wrote sitemap.xml')
