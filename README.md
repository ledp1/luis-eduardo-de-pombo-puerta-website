# personal-website

Personal portfolio built with React + Vite, populated from [@luisdepombo](https://x.com/luisdepombo) profile data.

**Live:** [luisdepombo.vercel.app](https://luisdepombo.vercel.app)

## Development

```bash
cd website
npm install
npm run dev
```

## Build

```bash
cd website
npm run build
npm run preview
```

## Deploy

- **Vercel** — project `luisdepombo`; auto-deploys from `main` (root directory: `website`)
- **GitHub Pages** — workflow deploys to `gh-pages` branch on push to `main`

### If Vercel stops auto-deploying

GitHub redirects usually keep Vercel working after repo renames or transfers. If a push to `main` does not trigger a deploy:

1. [Vercel dashboard](https://vercel.com/ledp1/luisdepombo/settings/git) → project **luisdepombo** → **Settings** → **Git**
2. **Disconnect**, then reconnect to [`ledp1/personal-website`](https://github.com/ledp1/personal-website)
