# Snackybara FoodHub 🦫✨

A modern, production-quality website for **Snackybara FoodHub**, a food business in the Philippines.

Built with **Astro 7**, **Tailwind CSS 4**, and deployed on **Vercel**.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Playfair Display + Inter (Google Fonts)
- **Data Layer**: Astro Content Collections v2 (Glob loader)
- **Transitions**: Astro `ClientRouter` (View Transitions)
- **Deployment**: [Vercel](https://vercel.com/) with `@astrojs/vercel`

## 📂 Project Structure

```text
src/
├── assets/                  # Brand assets, food photography, store images
├── components/              # Navbar, Footer, WhatsAppButton
├── content/menuItems/       # Menu YAML data
├── content.config.ts        # Content schema definition
├── layouts/Layout.astro     # Global layout, SEO, View Transitions
├── pages/                   # Multi-page routing (Home, Menu, About, Gallery, Contact)
└── styles/global.css        # Global CSS & Tailwind theme
```

## 🧞 Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (`localhost:4321`) |
| `npm run build` | Build static production site to `.vercel/output/static` |
| `npm run preview` | Preview production build locally |
