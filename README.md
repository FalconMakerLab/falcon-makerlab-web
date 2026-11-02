# Falcon MakerLab

**Code • Make • Grow**

Official Falcon MakerLab website — software, electronics, 3D printing and gardening projects.

Angular standalone · Polish / English · Static site generation (SSG) · No backend

## Development

Requires Node.js and npm. Verified with **Node.js 22.23.4**.

```sh
npm ci
npm start
```

Preview: [Polish](http://localhost:4200/pl) · [English](http://localhost:4200/en).

## Build and verify

```sh
npm run build
npm run verify
```

Static output: `dist/falcon-makerlab-web/browser`. Deploy only this directory; Node.js is needed for building, not hosting.

Both language variants and project pages are prerendered at build time. `/` redirects to `/pl`; language selection is explicit and does not depend on browser preferences or local storage.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/app/page.*` | Responsive layouts and home, project list, project, about and contact templates |
| `src/app/content.ts` | PL/EN interface copy, site URL and GitHub link |
| `content/projects/<slug>/project.json` | Project metadata and localized titles and descriptions |
| `content/projects/<slug>/pl.md`, `en.md` | Project content in both languages |
| `content/projects/<slug>/assets/` | Project images |
| `scripts/content.mjs` | Content validation, TypeScript data and sitemap generation; runs before start/build |
| `src/app/generated/` | Generated content; do not edit manually |
| `public/brand/` | Brand assets and favicon |
| `deploy/nginx.conf` | Static hosting configuration with HTTP 404 responses |

## Adding a project

Copy an existing folder under `content/projects/`. Use a unique slug matching the folder name, categories from `code`, `make`, `grow`, a local image such as `/projects/<slug>/hero.svg`, and titles, descriptions and Markdown content in both languages. Exactly one project must have `featured: true`.

`npm run build` generates project listings, both localized project pages and the sitemap. When editing content while the development server is running, run `npm run content` to regenerate the data.

Supported Markdown: headings, paragraphs, bullet lists and code blocks. HTML is escaped.

## Deployment

Build and serve with Docker and Nginx:

```sh
docker build -t falcon-makerlab-web .
docker run --rm -p 8080:80 falcon-makerlab-web
```

Alternatively, serve the static output with Nginx using `deploy/nginx.conf`. Point Cloudflare Tunnel to the Nginx service. Keep tunnel credentials, environment secrets and private infrastructure configuration outside this public repository.

The site has no backend. A Spring Boot service can be added later under `/api` without changing the content model or replacing the frontend.

## SEO

Pages include localized titles and descriptions, document language, canonical URLs, `hreflang` alternates and Open Graph metadata. The production URL is `https://falcon-codes.pl`. If it changes, update `src/app/content.ts`, `scripts/content.mjs` and `public/robots.txt`.

## Links

- [Website](https://falcon-codes.pl)
- [YouTube · @falconmakerlab](https://youtube.com/@falconmakerlab)
- [Instagram · @falconmakerlab](https://instagram.com/falconmakerlab)
- [GitHub · FalconMakerLab](https://github.com/FalconMakerLab)
- [Source · falcon-makerlab-web](https://github.com/FalconMakerLab/falcon-makerlab-web)
