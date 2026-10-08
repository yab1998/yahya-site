# yahyaabdulbasser.me — v2 (Astro)

## Run it
    npm install
    npm run dev      # http://localhost:4321
    npm run build    # outputs dist/

## Edit content (the only files you normally touch)
- src/data/site.json      — pitch, bio, reach numbers, design grid, gallery, music, socials
- src/content/work/*.md   — one file per case study (fill in the [TODO]s)
- src/assets/             — images (auto-optimized to AVIF/WebP at build)
- public/audio/           — 45s preview MP3s
- public/resume.pdf       — swap in a new resume anytime

## Deploy (Netlify)
Connect the GitHub repo -> build command `npm run build`, publish directory `dist`.
Or drag the dist/ folder onto app.netlify.com/drop for a quick preview.
