# Art Lab Studio site: handoff

**Repo:** `yitzhach/ART-LAB`, branch `main`. The old `yitzhach/ARTLAB` repo was deleted.
**Hosting:** a Cloudflare Worker named `artlab-syllabus` (`wrangler.jsonc`) serves the static files at the repo root. It's connected to GitHub, so a push to `main` should deploy. If it doesn't, check which repo is linked under Workers → `artlab-syllabus` → Settings → Build.
**Workflow:** the site is designed in a separate design tool, exported as a zip, and uploaded to GitHub through the web.

## Pages (keep clean URLs in links)
| Page | File | URL |
|---|---|---|
| Home (hero, gallery, contact form) | `index.html` | `/` |
| Course & Syllabus (units 1–5 with photos) | `course-and-syllabus.html` | `/course-and-syllabus` |
| Full Syllabus (PDF download) | `syllabus.html` | `/syllabus` |
| Weekly Assignments (class recaps, handouts, photos, materials) | `assignments.html` | `/assignments` |
| Enroll & Pay (the payment fields are a placeholder) | `enroll-and-pay.html` | `/enroll-and-pay` |
| Materials & Supplies | `materials-and-supplies.html` | `/materials-and-supplies` |

- The unit photos come from `images/unit-1…5.webp`. Each unit's photo is set in the `image:` field of its entry in the `units` array near the bottom of `course-and-syllabus.html`.
- The Weekly Assignments page is plain HTML (not from the design tool). Its content is all in `assignment-files/weeks.js`: set `currentWeek`, and per week add `date`, `recap` paragraphs, `files` (PDFs in `assignment-files/pdfs/`) and `photos` (images in `assignment-files/photos/`). Materials are pre-filled from the syllabus. It's linked from the home menu, the home Syllabus cards, and the menus on the other pages; re-add those links if a design-tool upload overwrites them.
- The home gallery uses `images/gallery-101…106.png`.
- `support.js` and `image-slot.js` are rendering scripts from the design tool. Don't edit them.
- `src/worker.js` handles `POST /api/contact`. It emails form submissions through Resend to isaac@isaacandersonart.com and needs the `RESEND_API_KEY` secret. The From address is still `onboarding@resend.dev`; switch it once the domain is verified.
- `.assetsignore` keeps `*.zip`, `src/` and the config files from being served.

## After each design-tool upload
1. Delete any uploaded `.zip` from the repo.
2. Change the internal links from `./page.html` back to clean URLs: `./index.html` becomes `/`, and `./syllabus.html` becomes `/syllabus`.
3. Delete any unused images.

## Open items
- `syllabus.html` has no unit photos; only `course-and-syllabus.html` does.
- Switch the Resend From address once the domain is verified.
