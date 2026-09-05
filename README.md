# Subhansu Pradhan — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Hosted on Vercel, connected to this GitHub repo — every push to `main` auto-deploys, no manual step required.

## Editing content

Everything text-based (name, bio, experience, projects, stack, certifications, education, links) lives in
`lib/data.ts`. You don't need to touch component code to update copy, add a
project, or change a link.

## Structure

- `app/page.tsx` — assembles all sections in order
- `components/` — one file per section (Hero, Experience, Projects, Stack, More, Contact, Nav, SceneBackground)
- `lib/data.ts` — all content
- `public/icons/` — tech stack logos used in the Stack section and the animated background columns

## Notes

- **Profile photo** is a local file at `public/icons/Profile.jpeg`, referenced in `lib/data.ts` → `profile.photo`. Replace that file directly to change the photo — no code change needed.
- **Resume button** links to a Google Drive share URL (`lib/data.ts` → `profile.resumeUrl`). Works for viewing/downloading as-is. For a one-click direct download instead, export the CV as a PDF, drop it in `/public`, and point `resumeUrl` at `/resume.pdf`.
- **Background animation**: two vertical columns of tech icons (from `public/icons/`) auto-scroll in opposite directions via pure CSS `@keyframes` — no JS animation loop, so it can't interfere with clicks or navigation elsewhere on the page. Hidden below the `xl` breakpoint on smaller screens, with icon size and spacing scaling down at each breakpoint (`sm`/`md`/`lg`/`xl`) rather than disappearing entirely on tablet/mobile.
- **Project cards** flip on hover/tap to reveal the metric and tags, with a "View details" button that opens a full modal. The Projects section shows 4 projects by default with a "Show all" / "Show less" toggle.
- **Certifications** use the same show-more/show-less pattern, displayed 2 per row.
- **Mobile nav**: a hamburger menu below the `md` breakpoint, using manual scroll (`window.scrollTo` with a computed offset) rather than native anchor jumps, so it works reliably across devices.
- Six of the eleven projects (Melbourne Data Quality Analysis, HR Attrition Analysis, ICU Early Warning System, DataLystAI, Attendance via Face Recognition, Movie Recommendation System) have summaries written from their actual repo READMEs — verify any you haven't reviewed yourself before an interview, since a couple of those source READMEs had documentation gaps worth knowing your own answer to.