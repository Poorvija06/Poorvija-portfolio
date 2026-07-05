# Poorvija Dhanu Sri D — Portfolio

A premium, fully responsive personal portfolio built with **React**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons** — featuring glassmorphism, a signature animated "circuit line" scroll indicator, dark/light mode, and a real gallery of certificates and live projects.

**Live design direction:** charcoal/obsidian background, emerald + gold accents, `Bricolage Grotesque` display type paired with `Inter` body text and `JetBrains Mono` for labels — evoking a developer-console aesthetic without leaning on generic gradient-blob templates.

---

## Features

- Cinematic **loading animation** on first visit
- Signature **circuit-line** scroll progress indicator (a glowing trace that runs the length of the page, like a PCB signal path)
- Asymmetric **hero section** with a typewriter role rotator and a tilting glass profile card
- **Scroll-reveal** animations throughout, powered by `IntersectionObserver`
- Interactive, tilt-on-hover **project cards** linking to real deployed projects
- **Animated skill bars** grouped by category, with floating icon micro-interactions
- Unified **Journey timeline** merging education and internship experience
- **Certificates gallery** with a lightbox modal showing your actual certificate images
- **Contact section** with a working mail-client handoff form (no backend required)
- **Dark/light theme toggle**, persisted in localStorage
- Fully responsive: mobile, tablet, and desktop breakpoints
- **SEO-ready**: meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- Respects `prefers-reduced-motion`
- Visible keyboard focus states throughout

---

## Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Hero profile photo
│   │   └── favicon.svg
│   └── certificates/            # All 7 real certificate images
│       ├── ip-utsav.jpg
│       ├── nptel-cloud-computing.jpg
│       ├── mongodb-basics.jpg
│       ├── novitech-fullstack.jpg
│       ├── svasti-internship.jpg
│       ├── scripting-spider.jpg
│       └── thiagarajar-internship.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── CircuitLine.jsx  # Signature scroll-progress trace
│   │   ├── loader/
│   │   │   └── Loader.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Journey.jsx      # Education + Experience timeline
│   │   │   ├── Projects.jsx
│   │   │   ├── Certificates.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── GlassCard.jsx
│   │       ├── SectionHeading.jsx
│   │       └── CertificateModal.jsx
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark/light mode provider
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   └── useTilt.js
│   ├── data/
│   │   └── portfolioData.js     # All editable content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
├── package.json
└── README.md
```

---

## Editing Your Content

Every piece of text, link, and data point on the site lives in one file:

```
src/data/portfolioData.js
```

Update your bio, add a project, add a certificate, or change a skill percentage there — no need to touch any component. To add a new certificate image: drop the image into `public/certificates/` and add a matching entry to the `certificates` array in that data file.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 (Vite) | UI framework + build tooling |
| Tailwind CSS 3 | Utility-first styling & design tokens |
| Framer Motion | Animations & scroll interactions |
| Lucide React | Icon set |

---

## Getting Started Locally

Prerequisites: Node.js 18+ and npm installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (typically http://localhost:5173)
```

To create a production build:

```bash
npm run build     # outputs to /dist
npm run preview   # serve the production build locally to sanity-check it
```

---

## Deployment

### Option A — Vercel (recommended, zero-config)

1. Push this project to a GitHub repository.
2. Go to vercel.com -> New Project -> import your repo.
3. Vercel auto-detects Vite. Keep the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy. Your site goes live at `your-project.vercel.app`.
5. A `vercel.json` is already included so client-side routing/rewrites work correctly.

### Option B — Netlify

1. Push the project to GitHub.
2. Go to netlify.com -> Add new site -> Import an existing project.
3. Set:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy. Netlify will give you a live URL instantly.

### Option C — GitHub Pages

```bash
npm install -D gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then in `vite.config.js`, set `base: '/your-repo-name/'`, and run:
```bash
npm run deploy
```

### Custom Domain

Whichever host you choose, Vercel, Netlify, and GitHub Pages all support adding a custom domain for free from their dashboard once you own one.

---

## Notes Before You Publish

- **Resume:** `profile.resumeUrl` in `portfolioData.js` is currently a placeholder (`#`). Upload your resume PDF somewhere (e.g., the `public/` folder as `resume.pdf`) and update that URL.
- **Contact form:** The contact form currently opens the visitor's own email client pre-addressed to you (no backend, no data stored). If you'd like real form submissions collected server-side later, services like Formspree or EmailJS can be wired in with minimal changes to `Contact.jsx`.
- **Canonical URL:** `index.html` has a placeholder canonical URL (`https://poorvija.dev/`) — update it once you have a real domain.

---

## License

This project is free to use and modify for personal portfolio purposes.
