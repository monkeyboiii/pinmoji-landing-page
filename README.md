# Pinmoji Landing Page

Marketing site and legal pages for the Pinmoji iOS app.

## Stack

- **Framework:** [Astro](https://astro.build) (static)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, pricing, FAQ |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/support` | Support & contact |

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview production build
```

## Deploy

Connected to Cloudflare Pages via GitHub. Pushes to `main` trigger automatic deploys.

**Build settings:**

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 |

## Project Structure

```
src/
  components/   # Astro components (Header, Hero, Features, Pricing, FAQ, Footer)
  content/      # MDX content collections (privacy, terms)
  layouts/      # BaseLayout, LegalLayout
  pages/        # Route pages
  styles/       # Tailwind global styles
public/         # Static assets (app icon, robots.txt)
```
