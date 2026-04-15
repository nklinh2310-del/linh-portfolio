# Linh Kristine Nguyen Consulting Minisite

CodeSandbox-ready React + Tailwind portfolio site for consulting recruiting.

## CodeSandbox

1. Upload or import this folder/zip into CodeSandbox.
2. CodeSandbox should install dependencies automatically.
3. Run the `start` script if the preview does not launch automatically.

The app is built with Vite, so the primary source files are:

- `src/main.jsx`
- `src/styles.css`
- `src/data/profile.js`
- `public/documents/*`
- `public/images/headshot.jpg`

## Update Personal Details

Edit `src/data/profile.js` to change:

- email address
- headline and positioning statement
- featured project names and summaries
- experience bullets
- skills
- resume availability

## Replace Assets

All files served by the site are in `public/`.

| Asset | Current path |
| --- | --- |
| Headshot | `public/images/headshot.jpg` |
| KPMG recommendation | `public/documents/kpmg-recommendation.pdf` |
| BCG pitch deck | `public/documents/bcg-pitch-deck.pdf` |
| Bain hypothetical | `public/documents/bain-hypothetical.pdf` |
| Workplan | `public/documents/hypothetical-workplan.pdf` |
| Financial ratios | `public/documents/financial-ratios.pdf` |
| Resume | `public/documents/resume.pdf` |

To enable the resume preview, add `public/documents/resume.pdf`, then set `resume.available` to `true` in `src/data/profile.js`.

## Scripts

```bash
npm install
npm run start
npm run build
```
