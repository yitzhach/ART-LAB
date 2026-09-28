# Art Lab Studio site: handoff

_Last updated: 2026-09-28_

## Where things live
- **Repo:** https://github.com/yitzhach/ART-LAB, branch `main`. The old `yitzhach/ARTLAB` repo was deleted, so don't use it.
- **Live site:** https://artlab.isaacandersonart.com/
- **Hosting:** a Cloudflare Worker named `artlab-syllabus` (`wrangler.jsonc`) serves the static files at the repo root. It's connected to GitHub, so a push to `main` deploys. If a push doesn't show up on the live site, check which repo is linked under Workers → `artlab-syllabus` → Settings → Build. It should be `yitzhach/ART-LAB`.
- **Workflow:** the site is designed in a separate design tool, exported as a zip, and uploaded to GitHub through the web.

## Pages (keep clean URLs in links)
| Page | File | URL |
|---|---|---|
| Home (hero, gallery, contact form) | `index.html` | `/` |
| Course & Syllabus (units 1–5 with photos) | `course-and-syllabus.html` | `/course-and-syllabus` |
| Full Syllabus (PDF download) | `syllabus.html` | `/syllabus` |
| Enroll & Pay (the payment fields are a placeholder) | `enroll-and-pay.html` | `/enroll-and-pay` |
| Materials & Supplies | `materials-and-supplies.html` | `/materials-and-supplies` |

## Code notes
- The unit photos come from `images/unit-1…5.webp`. Each unit's photo is set in the `image:` field of its entry in the `units` array near the bottom of `course-and-syllabus.html`.
- The home gallery uses `images/gallery-101…106.png`.
- `support.js` and `image-slot.js` are rendering scripts from the design tool. Don't edit them.
- `src/worker.js` handles `POST /api/contact`. It emails form submissions through Resend to isaac@isaacandersonart.com and needs the `RESEND_API_KEY` secret on the Worker. The From address (`FROM_EMAIL`, line 7) is still `onboarding@resend.dev`.
- `.assetsignore` keeps `*.zip`, `src/` and the config files from being served.

## After each design-tool upload
1. Delete any uploaded `.zip` from the repo.
2. Change the internal links from `./page.html` back to clean URLs: `./index.html` becomes `/`, and `./syllabus.html` becomes `/syllabus`.
3. Delete any unused images.
4. Any code edits made in the repo but not in the design tool get overwritten, so redo them.

## Current state
The repo is clean: there are no zips, and all internal links use clean URLs.

## Open items (priority order)
1. **Payments:** the payment fields on Enroll & Pay are only a placeholder. The options are a Stripe Checkout / Payment Link or a Worker endpoint.
2. **Resend From address:** verify `isaacandersonart.com` in Resend, then set `FROM_EMAIL` to an address on that domain. Confirm `RESEND_API_KEY` is set.
3. **Syllabus photos:** `syllabus.html` has no unit photos; only `course-and-syllabus.html` does. Add them in the design tool too.
