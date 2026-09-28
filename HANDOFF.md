# Art Lab Studio website: handoff

**Repo:** `yitzhach/ARTLAB`, branch `main` (latest commit `8b78898`, "Add files via upload", 2026-09-28)
**Hosting:** a Cloudflare Worker named `artlab-syllabus` (`wrangler.jsonc`) serves the static files at the repo root.
**Deploying:** run `npx wrangler deploy` from the repo root. It's unconfirmed whether a push to `main` redeploys the site automatically; the most recent update went live only after a manual deploy.

## Site structure
| Page | File | Clean URL |
|---|---|---|
| Home (hero, 6-image portfolio gallery, contact form) | `index.html` | `/` |
| Course & Syllabus (5 units with photos, "16 live sessions") | `course-and-syllabus.html` | `/course-and-syllabus` |
| Full Syllabus (5 phases, about 32 weeks listed, PDF download) | `syllabus.html` | `/syllabus` |
| Enroll & Pay (form; the payment fields are a placeholder) | `enroll-and-pay.html` | `/enroll-and-pay` |
| Materials & Supplies | `materials-and-supplies.html` | `/materials-and-supplies` |

- `support.js` and `image-slot.js` are page-rendering scripts from the design tool; they fill in `<sc-for>` loops and `<image-slot>` photo boxes.
- `src/worker.js` handles `POST /api/contact`: it sends form submissions by email through Resend to isaac@isaacandersonart.com. It needs the `RESEND_API_KEY` Worker secret. The From address is still `onboarding@resend.dev`; switch it once the domain is verified in Resend.
- `downloads/`: `syllabus.pdf` (current), `materials-list.pdf` (linked from the Materials page), `unit-1-assignment.pdf` (no longer linked).
- **Images in use:** `images/unit-1…4.webp` (course units) and `images/gallery-101…106.png` (home gallery).
- `github.md` is the design tool's sync note (a list of the screens and which files they are).

## Workflow
The site is designed in a separate design tool and exported as a zip. The zip is uploaded to GitHub through the web ("Add files via upload"), then deployed manually.

## Open cleanup items from the last upload
1. **`Art Lab website updates.zip` (16MB) is committed at the repo root, and `.assetsignore` doesn't exclude it.** That makes it publicly downloadable from the site. Delete it from the repo, or add it to `.assetsignore`.
2. **Unused files came back with the upload:**
   - `images/egg_tempera_studio.webp`, `gallery-102-blend.png`, `gallery-102-paint-study.png` and `.webp`, `gallery-102-warm-earthy.webp`, `gallery-103-geopolymer-bowl.jpeg`, `gallery-104-plaster-door.webp`, `gallery-104-raking-light.jpg`, `works-source.png`
   - `downloads/unit-1-assignment.pdf`
3. **Internal links changed from clean URLs to `.html` links** (`/syllabus` became `./syllabus.html`, and so on). Both forms work; decide which to keep. The design tool exports `.html` links, so each new upload will change them back.
4. **No unit photos on `syllabus.html`.** `github.md` says they were added there, but the page doesn't show any; only `course-and-syllabus.html` does.
5. **Deploys:** consider connecting the Worker to GitHub in Cloudflare (Workers → `artlab-syllabus` → Settings → Build) so pushes to `main` deploy automatically.
