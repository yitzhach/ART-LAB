# Isaac Anderson Art Lab

A website for Art Lab classes — promoting classes for students and teachers, with a downloadable
syllabus and materials list, a gallery of student/class work, and payment links (Venmo, Zelle,
PayPal). Built with React, TypeScript, Vite, and Tailwind CSS.

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build` (outputs to `dist/`)

## Customizing the content

Most of the site's content lives in [`constants.ts`](./constants.ts):

- `SITE` — site name, tagline, contact email, Instagram link.
- `NAV_LINKS` — the nav bar / footer links (anchors to sections on the page).
- `HERO_IMAGES` — homepage slideshow images.
- `CLASSES` — the class cards shown in the "Classes" section.
- `GALLERY_IMAGES` — student/class work shown in the gallery lightbox.
- `DOWNLOADS` — paths to the syllabus and materials list PDFs.
- `PAYMENT_METHODS` — Venmo/Zelle/PayPal handles shown in the "Payment" section.

### Replacing images

Hero and gallery images currently use placeholder photos from picsum.photos. Put your own images
in `public/images/` and update the `src` fields in `constants.ts` to point to them
(e.g. `/images/hero-1.jpg`).

### Replacing the syllabus & materials list

Two placeholder PDFs live in `public/downloads/`:

- `syllabus.pdf`
- `materials-list.pdf`

Replace these files with the real documents — the download links on the site point to these paths
and don't need any code changes.

### Student pages

The "Student Pages" section is currently a placeholder for a future feature: individual pages
where enrolled students can showcase their own work. When you're ready to build it out, that's a
good place to introduce client-side routing (e.g. `react-router-dom`) with one route per student.

## Deployment

Pushing to `main` triggers [`.github/workflows/static.yml`](./.github/workflows/static.yml), which
installs dependencies, runs `npm run build`, and deploys the `dist/` output to GitHub Pages.

In your repository settings, under **Settings → Pages**, set the source to **GitHub Actions**.

The Vite `base` path in [`vite.config.ts`](./vite.config.ts) is set to `/newTEST/` to match this
repository's name — update it if you rename the repo or use a custom domain.
