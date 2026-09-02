# Vastu Vihar Marketing Training Presentation Website

An interactive keynote-grade training presentation website designed for **Vastu Vihar** marketing officers and new inductees.

---

## 🚀 Cloudflare Pages Deployment Guide

### Option 1: Direct Git Integration (Recommended)
1. Go to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select repository: **`kumaranujranchi/traning-marketing`**.
3. Configure the Build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version environment variable**: `NODE_VERSION` = `18` or `20`
4. Click **Save and Deploy**. Cloudflare Pages will automatically deploy your site with a free `*.pages.dev` domain and custom domain support.

---

### Option 2: CLI Deployment (via Wrangler)
```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name=vastu-vihar-marketing-training
```

---

## 🛠️ Tech Stack
- **Framework**: React 18, Vite, TypeScript
- **Styling**: Tailwind CSS, Vanilla CSS 3D Glassmorphism & Neon Glows
- **Icons**: Lucide React
- **Animations**: CSS Keyframe Directional 3D Transforms, Progressive Step Build-in
- **Effects**: Canvas Confetti

---

## ⌨️ Presentation Keyboard Shortcuts
- `→` / `↓` / `Space` / `PageDown`: Reveal Next Card / Advance Slide
- `←` / `↑` / `PageUp`: Hide Last Card / Previous Slide
- `A`: Toggle **Step-by-Step Build Mode** vs **Reveal All**
- `F`: Toggle Fullscreen Keynote Presentation
- `O` / `Tab`: Open 34-Slide Visual Overview Drawer with Live Search
- `N`: Open Speaker Notes & Presentation Timer
- `?`: Open Controls Help Cheat-Sheet
- `Esc`: Close any open modal / Exit Fullscreen
