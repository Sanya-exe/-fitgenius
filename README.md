# FitGenius - AI-Powered Fitness Landing Page

A stunning, modern landing page for an AI fitness application built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4. Features smooth animations, glass morphism effects, and a fully responsive design.


## Features

- **Modern Design System**: Dark gradient theme with purple/pink accents
- **Glass Morphism UI**: Frosted glass effects with backdrop blur
- **Smooth Animations**: Custom keyframe animations with staggered delays
- **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- **Component-Based Architecture**: Modular, reusable React components
- **Type-Safe**: Built with TypeScript for better code quality
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance Optimized**: Next.js 16 with Turbopack for fast builds

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fitgenius-landing.git
cd fitgenius-landing
```

2. Install dependencies:
```bash
npm install
or
yarn install
or
pnpm install
```

3. Run the development server:
```bash
npm run dev
or
yarn dev
or
pnpm dev
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
fitgenius-landing/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage component
│   └── globals.css         # Global styles and design tokens

├── components/
│   ├── navbar.tsx          # Navigation bar with logo
│   ├── hero-section.tsx    # Hero section with CTA buttons
│   ├── features-section.tsx # Product features showcase
│   ├── testimonials-section.tsx # Customer reviews
│   ├── pricing-section.tsx # Pricing tiers
│   └── footer.tsx          # Footer with links

├── public/                 # Static assets

├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```
