# Cherry's Medical Knowledge

A React + TypeScript front-end for searching a medical document repository (locum guide), organized by sickness type/category. Fully static — deploy to GitHub Pages with client-side fuzzy search powered by Fuse.js.

## 📁 Project Structure

```
medical-knowledge-search/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── CategoryFilter.tsx  # Sidebar category navigation
│   │   ├── SearchBar.tsx       # Search input with icon
│   │   ├── SearchResults.tsx   # Result list with highlighting
│   │   └── ResultDetail.tsx    # Detailed entry view
│   ├── data/
│   │   └── medicalData.ts      # Document content as structured JSON
│   ├── types.ts                # TypeScript type definitions
│   ├── App.tsx                 # Main app component + search logic
│   ├── App.css                 # Component styles
│   └── index.css               # Global styles + CSS reset
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD for Pages
├── package.json
├── tsconfig.json
├── vite.config.ts
└── LOCUM_GUIDE.docx            # Source document
```

## ✨ Features

- **15 sickness categories** from the locum guide:
  1. Cardiovascular System
  2. Respiratory System
  3. Gastro-intestinal system
  4. Central Nervous System
  5. Genito-urinary System
  6. Hormones
  7. Antibiotics
  8. Anti-viral/Anti-fungal/Others
  9. Endocrine
  10. Eye & ENT preparations
  11. Dermatologicals
  12. Anti-obesity
  13. Paediatric Drugs
  14. Vaccinations
  15. Acne Treatment

- **Client-side fuzzy search** (Fuse.js) — no backend required
- **Category filtering** — narrow results by sickness type
- **Search term highlighting** — matched text is highlighted in results
- **Relevance scoring** — results ranked by match quality

## 🚀 Quick Start

### Prerequisites
- Node.js v20+ (see `.nvmrc`)

### Development
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`

### Build
```bash
npm run build
```
Outputs to `dist/`

## 🚀 Deployment to GitHub Pages

### Option 1: Automated (using the setup script)
```bash
# Edit setup-github.sh to set your GitHub username
chmod +x setup-github.sh
./setup-github.sh
```

### Option 2: Manual setup
1. **Update `package.json`** — set `homepage` to your GitHub Pages URL:
   ```json
   "homepage": "https://<your-username>.github.io/medical-knowledge-search"
   ```

2. **Update `vite.config.ts`** — set the base path:
   ```ts
   base: '/medical-knowledge-search/' // replace with your repo name
   ```

3. **Create a GitHub repository** named `medical-knowledge-search`

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

5. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"
   - The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

6. **Your site will be live** at `https://<your-username>.github.io/medical-knowledge-search/`

## 📊 Data Population

The search data is in `src/data/medicalData.ts`. It contains the structured representation of `LOCUM_GUIDE.docx`.

To extract full table content from the source `.docx`:
1. Use `office_read` tool to read each table (`/body/tbl[1]`, `/body/tbl[2]`, etc.)
2. Update the entries in `medicalData.ts` to match

Each medication entry has:
- **Brand Name**: e.g., "Liziban"
- **Generic + Pregnancy Safety**: e.g., "Lisinopril (B)" — safety codes: A=Safe, B=No risk, C=Risk unproven, D=Evidence of risk, X=Contraindicated
- **Dosage**: e.g., "10-40mg daily"
- **Remarks**: Clinical notes, warnings, monitoring requirements

## 🔍 Search Usage

- Select a category from the sidebar to filter results
- Type in the search box to search across all medication fields
- Click any result to see the full detailed view
- Search uses fuzzy matching, so partial names work (e.g., "lisino" matches "Lisinopril")
