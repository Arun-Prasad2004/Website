# Aruna Electricals & Electronics: local website

Static, mobile-first site for a local appliance repair shop in Thiruparankundram, Madurai.
React + Vite + TypeScript + Tailwind CSS 4 + Lucide icons. Every page is prerendered to plain HTML at build time
(good for Google), then React takes over in the browser. No backend, no database, no tracking scripts, no recurring cost.

## Run it

```bash
npm install
npm run dev        # live editing at http://localhost:5173
npm run build      # production build into dist/ (also writes sitemap.xml, robots.txt, 404.html)
```

To test the built site, serve `dist/` with any static server (for example `python -m http.server 4180` inside `dist`).

## Project layout

```
src/config/business.ts   phone, address, hours, links, site URL  <- edit this most
src/config/services.ts   the list of services and their wording  <- edit this second
src/config/seo.ts        page titles, descriptions, structured data
src/pages/               Home, Services, About, Contact, NotFound
src/components/          Layout (header, footer, mobile bar), JobTag, Art (appliance drawings)
scripts/prerender.mjs    makes the static HTML, sitemap and robots.txt
public/photos/           appliance photos (replace with your own phone photos anytime, same file names)
src/config/credits.ts    photo credits required by the licences
```

## Update contact details
Open `src/config/business.ts`, change the value, then rebuild and redeploy.
- Leave `phoneE164` or `email` as `''` to hide that line/button everywhere (including the mobile bottom bar). WhatsApp uses the same number (`whatsappE164`); set it to `''` to hide every WhatsApp button.
- `hours`: set to e.g. `'Mo-Su 08:30-21:00'` once confirmed. Until then the site says "Call to check the shop timings before you visit."
- `siteUrl`: set to your real address (needed for canonical URLs, the sitemap and structured data).

## Update services
Open `src/config/services.ts`. Add, edit or delete an entry; cards, the Services page and the repair-tag picker update on their own.
Only add a `promise` (e.g. "Service within 2 hours") when it is always true.

## Placeholders the owner must fill in or confirm
| Item | Where | Status |
|---|---|---|
| Phone number | `business.ts` | Taken from the Google listing (98421 78629). Confirm |
| Address | `business.ts` | Taken from the Google listing. Confirm |
| Opening hours | `business.ts` | Not set. Google and Justdial disagree |
| Email | `business.ts` | Not set (hidden) |
| Google review link | `business.ts` `reviewUrl` | Not set; the button opens the Maps listing meanwhile |
| Website address | `business.ts` `siteUrl` | Placeholder `arunaelectricals.pages.dev` |
| Tamil wording | hero line + service names | Please have a Tamil speaker proofread |
| "Service within 2 hours", "Fast service" | `services.ts` | Wording from the owner's brief. Confirm it is always true |
| Spare parts | not mentioned | Add a line only if the owner confirms |

## Deploy free (recommended: Cloudflare Pages)
1. Push this folder to a GitHub repository.
2. Cloudflare dashboard, Workers & Pages, Create, Pages, Connect to Git, choose the repo.
3. Build command `npm run build`, output directory `dist`. Deploy.
4. Update `siteUrl` in `business.ts` to the address Cloudflare gives you (or your own domain), rebuild.

Netlify and Vercel work the same way (build `npm run build`, publish `dist`). GitHub Pages also works; use the 404.html it serves for unknown paths.

## Connect Google Search Console
1. Go to search.google.com/search-console, Add property, URL prefix, enter the live site address.
2. Verify with the HTML tag method (paste the tag into `index.html` inside `<head>`), rebuild, deploy, click Verify. A DNS record also works if you own the domain.
3. Sitemaps, submit `sitemap.xml`.
4. URL Inspection, paste the home page address, Request indexing. Repeat for Services, About and Contact.
5. After a few days check Performance for the searches that bring people.

## Google Business Profile checklist (the biggest lever)
- Claim the listing ("Own this business?") and verify it.
- Add the website address, correct hours, services and real phone photos.
- Ask each happy customer for a Google review and reply to every review.
- Keep name, address and phone identical on Justdial, Facebook, magicpin and IndiaMART.

## Photos
The appliance pictures are openly licensed stock photos from Wikimedia Commons (credits are listed on the Services page). They show example appliances, not the shop. To use your own, save a 4:3 JPG over the matching file in `public/photos/` (mixer, jar, grinder, iron, induction, lpg, cooker, heater) and delete its entry in `src/config/credits.ts`.

## What is deliberately not here
No online shop, prices, cart, booking system, login, admin area, fake reviews or fake shop photos. Photos show example appliances only, never the shop.
