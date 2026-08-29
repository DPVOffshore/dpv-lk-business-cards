# DPV Offshore Sri Lanka — Digital Business Cards

A small Next.js site that gives each person in the Colombo office a
mobile-friendly digital business card at its own URL (e.g. `/aruna`).
Every row is tappable — call, WhatsApp, email, website, address — plus a
**Save Contact** button that drops the person straight into the visitor's
phone contacts.

Styled to match the existing DPV Offshore cards.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 for the directory, or go straight to
http://localhost:3000/aruna

## Edit the details

Two files, and nothing else:

| What                                              | File                    |
| ------------------------------------------------- | ----------------------- |
| A person's name, title, phone numbers, email      | `src/data/employees.js` |
| Company name, address, websites, services, logo   | `src/data/company.js`   |

### Adding someone new

1. Open `src/data/employees.js` and copy the commented `{ ... }` block.
2. Change the details. `slug` becomes the URL, so slug `nimal` → `/nimal`.
3. Save their photo as `public/employees/<slug>.jpg` — square, around
   512×512 looks best.
4. Save. Their card is live.

### Phone numbers

Each person has a `phones` list, and every entry becomes its own tappable
row in the order you write them:

```js
phones: [
  { label: "Mobile (Office)",   number: "+94 77 166 0436", type: "cell" },
  { label: "Mobile (Personal)", number: "+94 77 774 3023", type: "cell" },
  { label: "Office",            number: "+94 11 268 2692", type: "work" },
],
```

`label` is what the row says, so you can call them anything you like.
`type` only affects the saved contact: `"cell"` saves as a mobile number,
`"work"` as a work number. The first mobile is marked as the preferred
one, so phones offer it first.

`whatsapp` is separate and picks which number the WhatsApp button opens —
digits only, no plus, no spaces.

### Websites

`company.js` holds a `websites` list, shown in order:

```js
websites: [
  { label: "Website",       url: "https://www.dpvoffshore.lk" },
  { label: "Group website", url: "https://www.dpvoffshore.com" },
],
```

All of them are saved into the contact. A person can override the list
with their own `websites` if they ever need to.

### Things that only appear when filled in

`email`, `credentials`, and `countries` in `company.js` (which adds a
"Where we operate" row) all stay hidden while empty, so the card never
shows a blank field.

## The links

- **Phone rows** → `tel:` opens the dialer.
- **WhatsApp** → opens WhatsApp with a pre-filled greeting.
- **Email** → opens the mail app. Set `emailMode` in `company.js`:
  - `"mailto"` (default) → the visitor's default mail app.
  - `"outlook"` → always opens Outlook-on-the-web compose.
- **Website / Address** → open the site / Google Maps.
- **Save Contact** → downloads a `.vcf` the phone offers to add to contacts,
  carrying the name, title, company, all three numbers, both websites, the
  address, and a note with his qualifications and the company's services.

## Logo files

All generated from the DPV logo in `public/`:

| File                               | Used for                                |
| ---------------------------------- | --------------------------------------- |
| `logo-lockup-white.png`            | The navy card header (white knockout)   |
| `logo-lockup.png`                  | The directory page (full colour)        |
| `logo-full.png`                    | Stacked logo, full colour — spare       |
| `logo-white.png`                   | Stacked logo, white knockout — spare    |
| `icon.png`, `apple-touch-icon.png` | Browser tab + phone home screen         |

## QR codes

Point each QR at the card URL, e.g. `https://cards.dpvoffshore.lk/aruna`.
Generate the images from any QR generator once the site is deployed.

## Deploy

### Vercel (simplest, custom domain)

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. Next.js is detected
   automatically. Deploy.
3. Add the custom domain in Project → Settings → Domains.

> This is a commercial site, so use a Vercel **Pro** plan — the free Hobby
> plan is for non-commercial use only.

### GitHub Pages (free)

The workflow in `.github/workflows/nextjs.yml` builds and publishes on
every push to `main`. Two things to check:

1. In `next.config.mjs`, `repoName` must match the repository name
   exactly — it becomes the URL prefix.
2. In the repo: **Settings → Pages → Source → GitHub Actions**.
