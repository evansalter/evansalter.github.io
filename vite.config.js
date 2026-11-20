import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

const md = new MarkdownIt({
  html: true,
  highlight (str, lang) {
    const code = lang && hljs.getLanguage(lang)
      ? hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
      : md.utils.escapeHtml(str)
    return `<pre class="hljs"><div class="code">${code}</div></pre>`
  }
})

// Turns `*.md` files into modules that export rendered HTML. Relative image
// paths are rewritten into asset imports so Vite bundles them.
function markdown () {
  return {
    name: 'markdown',
    transform (src, id) {
      if (!id.endsWith('.md')) return
      const html = md.render(src)
      const imports = []
      const parts = []
      let last = 0
      for (const m of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) {
        const url = m[1]
        if (/^(https?:|data:|\/)/.test(url) || !/\.(png|jpe?g|gif|svg|webp)$/i.test(url)) continue
        const start = m.index + m[0].length - url.length - 1
        const name = `__img${imports.length}`
        imports.push(`import ${name} from ${JSON.stringify(url.startsWith('.') ? url : './' + url)}`)
        parts.push(JSON.stringify(html.slice(last, start)), name)
        last = start + url.length
      }
      parts.push(JSON.stringify(html.slice(last)))
      return { code: `${imports.join('\n')}\nexport default ${parts.join(' + ')}`, map: null }
    }
  }
}

export default defineConfig({
  plugins: [vue(), markdown()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Full build (with template compiler) is needed for `template:` and inline-template usage
      vue: 'vue/dist/vue.esm.js'
    },
    extensions: ['.mjs', '.js', '.json', '.vue']
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'global-builtin']
      }
    }
  },
  build: {
    sourcemap: true
  }
})
