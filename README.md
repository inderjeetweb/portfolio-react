# Inderjeet Das — Portfolio

Personal portfolio for [inderjeet-profile.web.app](https://inderjeet-profile.web.app/).

Built with React (Create React App), Tailwind CSS 3, Framer Motion and react-icons. Hosted on Firebase Hosting.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm test           # smoke tests
npm run build      # production build in /build
```

> **Page looks unstyled in dev?** CRA only enables Tailwind if `tailwind.config.js` exists when `npm start` launches. A dev server started before Tailwind was added serves raw `@tailwind` directives. Stop it and run `npm start` again.

## Editing content

All copy lives in [`src/data/content.js`](src/data/content.js): profile, hero roles, about text and stats, skills, experience, projects, education, languages and contact labels. Edit that file. You don't need to touch the components.

- **Photo:** `public/images/profile-480.jpg`, `profile-720.jpg`, `profile-960.jpg` (4:5 crops of `inderjeet.jpg`).
- **Resume button:** set `profile.resumeUrl`. To self-host, put a PDF at `public/resume.pdf` and use `'/resume.pdf'`.
- **Colours:** the whole palette (midnight navy with sky blue) is a set of tokens at the top of [`src/index.css`](src/index.css), in light and dark variants. Change the values there. Keep text pairs at 4.5:1 contrast or higher.
- **Icons:** skills and projects look up icons by name in [`src/lib/icons.js`](src/lib/icons.js). New entries without a match get a neutral fallback icon.
- **SEO and social previews:** these are static tags in [`public/index.html`](public/index.html) (title, description, Open Graph, Twitter and JSON-LD), because link-preview scrapers don't run JavaScript. Update them if your title changes. The preview image is `public/og-image.jpg` (1200×630).

## Contact form (EmailJS, optional)

With no configuration, **Send message** opens the visitor's email app with the message pre-filled (mailto). To send straight from the page:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. **Email Services → Add New Service** (e.g. Gmail), and connect `inderjeetweb@gmail.com`. Note the **Service ID**.
3. **Email Templates → Create New Template.** Use these variables:
   - Subject: `{{title}} — {{name}}`
   - Body: `{{message}}` plus `From: {{name}} <{{email}}>`
   - **Reply To:** `{{email}}`

   Note the **Template ID**.
4. **Account → General:** copy your **Public Key**.
5. Copy `.env.example` to `.env.local`, fill in the three values, then rebuild (`npm run build`). CRA embeds env vars at build time.
6. Optional: in EmailJS **Account → Security**, restrict requests to your domain.

## Deploy (Firebase Hosting)

```bash
npm install -g firebase-tools   # once
firebase login                  # once
npm run build
firebase deploy --only hosting
```

`firebase.json` serves `/build` and rewrites every path to `index.html` (unknown paths show the 404 view). It also caches the content-hashed `/static` assets for a year.

## Structure

```
src/
  App.js                 app shell: motion config, skip link, sections
  data/content.js        all site text
  components/            Navbar, Hero, About, Skills, Experience, Projects,
                         Education, Contact, Footer, NotFound
  components/ui/         Button, Container, Section, Reveal (scroll animations),
                         SocialLinks, ThemeToggle, Typewriter
  hooks/                 useTheme, useScroll (scrolled state + scroll-spy), useTypewriter
  lib/                   icons.js (icon lookup), motion.js (shared animation variants)
```

## Accessibility and motion

- Animations run once, last 0.3–0.6 s, and ease out. They are disabled when the OS "reduce motion" setting is on.
- The theme defaults to dark. The visitor's choice is saved in `localStorage` and applied before first paint.
- The site uses semantic landmarks and a skip link. The mobile menu works from the keyboard (Escape closes it), and focus states are visible.
