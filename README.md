# Welcome

The code for my personal website lives here.

The site is live at https://www.evansalter.com

I built this with:

- Vue.js 2 + Vuetify
- Vite
- Hosted on GitHub Pages

## Development

Requires Node 24 (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build + prerendered pages into dist/
npm run preview  # serve the built site
npm run lint
```

Pushing to `sources` builds the site and deploys `dist/` to the `master` branch.
