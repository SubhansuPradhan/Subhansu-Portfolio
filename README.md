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

Push this folder to a GitHub repo and import it on vercel.com — zero config needed,
it's a stock Next.js app.

## Editing content

Everything text-based (name, bio, experience, projects, stack, links) lives in
`lib/data.ts`. You don't need to touch component code to update copy, add a
project, or change a link.

## Notes

- Your profile photo is loaded from the postimg.cc URL you gave me
  (`lib/data.ts` → `profile.photo`). If that link ever expires, drop a real
  file into `/public` and point `profile.photo` at `/your-file.jpg` instead —
  more reliable than an external host for something this important.
- The resume button links straight to your Google Drive share URL. Drive's
  "view" link works for people to open and download, but if you want a
  one-click direct download, export the CV as a PDF from Drive, drop it in
  `/public`, and point `profile.resumeUrl` at `/resume.pdf`.
- The "3D background" is a lightweight CSS-perspective particle field that
  reacts to mouse movement, not a real three.js scene. That was a deliberate
  call: an actual WebGL scene would add real weight to a page whose job is to
  get read in the first 20 seconds, for very little payoff on a text-heavy
  portfolio. If you want true 3D later, three.js with react-three-fiber is
  the standard route.
