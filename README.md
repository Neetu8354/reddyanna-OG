# Reddy Anna — Static UI Clone

A dependency-free, JavaScript-free static clone of the Reddy Anna landing page UI.

- `index.html` — the entire page markup
- `styles.css` — all styling, fully responsive (desktop, tablet, mobile)
- `assets/` — all images used by the page

## Design notes

- **No custom JavaScript.** All interactive UI (mobile nav, FAQ accordion, the
  "login required" modal) is implemented with pure CSS (`:checked` / `:target`
  tricks), so no click or interaction can throw a script error or crash the page.
- Buttons that would normally require a backend (Register/Login/play a game)
  either open a "Login Required" modal directing the user to WhatsApp, or link
  directly to WhatsApp (`https://wa.link/reddyanna_`).
- The one exception is the live cricket score box, which embeds the same
  public `cwidget.crictimes.org` iframe the original site uses. It's a
  sandboxed cross-origin iframe — if it fails to load it just shows blank
  inside its own frame and cannot affect the rest of the page.

## Deploying

This is a plain static site — deploy the whole folder (`index.html`,
`styles.css`, `assets/`) to any static host:

**Vercel**
```
npm i -g vercel
vercel --prod
```
(Vercel auto-detects a static project; no build step needed.)

**Netlify**
Drag-and-drop the folder onto https://app.netlify.com/drop, or:
```
npm i -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**
Push this repo, then enable Pages in the repo settings (Settings → Pages →
deploy from the `main` branch, root folder).

**Any static file server / Nginx container**
Copy the three items into the web root — no server-side runtime required.
