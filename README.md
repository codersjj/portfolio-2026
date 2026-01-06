# Shane | Frontend & Fullstack Developer Portfolio

Welcome to the repository for my personal portfolio website. This project showcases my work, skills, and engineering thoughts, built with modern web technologies focusing on performance, accessibility, and design.

## 🚀 Tech Stack

- **Framework:** [Astro 5](https://astro.build/) - For its island architecture and static site generation performance.
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - For rapid, utility-first styling.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience.
- **Animations:** 
  - [Motion](https://motion.dev/) (formerly Framer Motion) for complex interactions.
  - [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) for scroll-triggered animations.
- **Physics:** [Matter.js](https://brm.io/matter-js/) - For interactive physical simulations.
- **Icons:** [Lucide](https://lucide.dev/) - For clean, consistent SVG icons.
- **Package Manager:** [Bun](https://bun.sh/) - For fast dependency installation and script execution.

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Dark Mode:** Built-in dark mode support (system preference & manual toggle).
- **SEO Optimized:** Meta tags, Open Graph support, and sitemap generation.
- **Blog System:** Engineering log for sharing technical insights, built with Astro Content Collections.
- **Portfolio Showcase:** Dedicated sections for selected projects and detailed case studies.
- **RSS Feed:** Automatic RSS feed generation for blog posts.
- **Interactive Elements:** Smooth transitions, text animations, and physics-based interactions.

## 📂 Project Structure

```text
/
├── public/          # Static assets (fonts, images, icons)
├── src/
│   ├── assets/      # Processed assets
│   ├── collections/ # Content collection definitions
│   ├── components/  # Reusable UI components
│   ├── config/      # Site and theme configuration
│   ├── content/     # MDX content for blog posts
│   ├── layouts/     # Page layouts (Base, Page, etc.)
│   ├── pages/       # Astro file-based routing
│   ├── plugins/     # Custom plugins
│   └── styles/      # Global styles and CSS
├── astro.config.mjs # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json     # Project dependencies
```

## 🧞 Getting Started

All commands are run from the root of the project using **Bun**.

### Prerequisites

- [Bun](https://bun.sh/) installed on your machine.

### Installation

```sh
bun install
```

### Development

Start the local development server at `http://localhost:4321`:

```sh
bun dev
```

### Build

Build the production site to the `./dist/` directory:

```sh
bun build
```

### Preview

Preview your build locally before deploying:

```sh
bun preview
```

## � License

&copy; 2026 Shane. All rights reserved.
