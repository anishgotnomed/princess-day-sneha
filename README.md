# Happy Princess Day — Sneha

A pink & purple, fully animated multi-page website made for **Sneha**'s Princess Day.
Built to be deployed free on **GitHub Pages**.

## Pages
- `index.html` — Home: bobbing crown, hero photo, floating hearts & sparkles
- `gallery.html` — "Royal Gallery" grid of photos (pics 2–8)
- `story.html` — "Our Story" timeline
- `wishes.html` — Flip cards, one hidden wish each
- `surprise.html` — Click **"Crown Her!"** for a crown + confetti finale

## Add your photos
Drop these files into the `images/` folder (any of `.jpg`, `.png`, `.jpeg`, `.webp`):

| File | Where it shows |
|------|----------------|
| `pic1.jpg` | Big round hero photo on the Home page |
| `pic2.jpg` … `pic7.jpg` | The Gallery grid |

Until a file exists, its slot shows a labelled placeholder — the layout still looks fine.

## Make it yours
- **Gallery captions** — edit the `CAPTIONS` object near the top of the `<script>` in `gallery.html`
- **Wishes** — edit the `WISHES` array in `wishes.html` (emoji + message per card)
- **Story** — replace the placeholder text in the timeline blocks in `story.html`
- **Surprise / Home copy** — plain text in `surprise.html` and `index.html`

## Deploy on GitHub Pages (the easy way)
1. Make a **public** GitHub repo (e.g. `princess-day-sneha`).
2. Upload all the files here **plus** the `images/` folder.
3. Repo **Settings → Pages** → "Build and deployment" →
   **Source: Deploy from a branch** → branch `main`, folder `/ (root)` → **Save**.
4. In ~1 minute it's live at:

## Deploy with git (if you already have a repo)
```bash
git init
git add .
git commit -m "Princess Day for Sneha"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/princess-day-sneha.git
git push -u origin main
```
Then enable Pages as above.

## Notes
- Fonts load from **Google Fonts**, so the site looks its best with an internet connection.
- No build step — it's plain HTML/CSS/JS, so it runs as-is on GitHub Pages.
