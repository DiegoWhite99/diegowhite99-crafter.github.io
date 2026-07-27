# Diego Castelblanco — Portfolio

Personal portfolio of **Diego Castelblanco**, Systems Engineer specializing in
web development, automation, and applied AI/robotics (ROS 2, computer vision,
conversational AI). Built with React, TypeScript, Tailwind CSS and Vite.

🔗 **Live:** https://diegowhite99-crafter.github.io

## Features

- ⚡ Fast, single-page site powered by Vite
- 🌗 Light / dark theme
- 🌍 Bilingual content (English / Spanish)
- 📱 Responsive, mobile-first layout
- 🧩 Content-driven — all copy lives in one config file
- ✨ Subtle grid backdrop + motion, with `prefers-reduced-motion` support
- 📧 Working contact form via EmailJS
- 🚀 Auto-deployed to GitHub Pages via GitHub Actions

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Styling | Tailwind CSS, Radix UI (shadcn/ui) |
| Build | Vite |
| Icons | lucide-react |
| Data/Forms | TanStack Query, EmailJS |

## Getting Started

```bash
git clone https://github.com/DiegoWhite99/diegowhite99-crafter.github.io.git
cd diegowhite99-crafter.github.io
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:8080).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Editing Content

Almost everything on the site is driven by **`src/config/portfolio.ts`**, which
holds `en` and `es` versions of the personal info, about section, projects and
skills. Update that file to change what the site shows — no component edits
needed for normal content changes.

UI labels (buttons, nav, section titles) live in
`src/contexts/LanguageContext.tsx`.

### Contact form (EmailJS)

The contact form sends messages through [EmailJS](https://www.emailjs.com).
Configuration is read from environment variables (`VITE_` prefixed, so they are
embedded in the client bundle — EmailJS relies on domain restrictions, these are
not secret):

```bash
# .env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for the template. Messages default to the address configured
in `src/components/Contact.tsx`.

## Deployment

The site deploys automatically to **GitHub Pages** through the workflow in
`.github/workflows/`. Pushing to `main` builds the project and publishes `dist/`.

To build locally:

```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Section components (Hero, About, Projects, Skills, Contact…)
│   └── ui/            # shadcn/ui primitives
├── config/
│   └── portfolio.ts   # All site content (EN/ES)
├── contexts/          # Language & theme providers
├── hooks/             # Custom hooks
├── pages/             # Route pages
└── index.css          # Design tokens, grid backdrop & animations
```

## License

MIT — see [LICENSE](LICENSE).
