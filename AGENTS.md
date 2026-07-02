## Learned User Preferences

- Prefer Vercel project name `luisdepombo` over `personal-website` (matches live URL and @luisdepombo brand).
- For Vercel or Cursor dashboard ops, use gstack browser and auth rather than asking for manual steps.
- Document deploy/integration troubleshooting in README when fixing infra issues to prevent recurrence.
- Execute ops tasks autonomously when possible without requiring user assistance.

## Learned Workspace Facts

- React + Vite portfolio lives in the `website/` subdirectory.
- GitHub repo is `ledp1/personal-website`; old name `ledp1/luis-eduardo-de-pombo-puerta` no longer exists.
- Live site: https://luisdepombo.vercel.app; Vercel project is `luisdepombo` with root directory `website`.
- Vercel auto-deploys from `main`; GitHub Pages deploys to `gh-pages` on push to `main`.
- If Vercel stops auto-deploying, disconnect and reconnect Git to `ledp1/personal-website` (settings: vercel.com/ledp1/luisdepombo/settings/git).
- Profile data is sourced from @luisdepombo; `website/vercel.json` keeps a 308 redirect from the old `luis-eduardo-de-pombo-puerta.vercel.app` alias.
