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
pnpm install
pnpm run dev       # http://localhost:4321
pnpm run build     # static output in dist/
pnpm run preview   # preview production build
```

## Deploy

Connected to Cloudflare Pages via GitHub. Pushes to `main` trigger automatic deploys.

**Build settings:**

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 20 |

## TODO

- Replace placeholder App Store IDs (`app-id=000000000`) with the real Pinmoji Apple Store ID once it is available.
- Replace `href="#"` App Store links with the real Pinmoji App Store URL once deployed.

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
