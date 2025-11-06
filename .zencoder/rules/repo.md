---
description: Repository Information Overview  
alwaysApply: true
---

# Portfolio Website - Laith Alskaf

## Summary
A modern, responsive portfolio website showcasing professional projects and skills built with React 18.2.0, deployed on Vercel with animations and responsive design.

## Repository Structure
- **src/components**: React components (Portfolio, ProjectsShowcase, ProjectCard, UI components)
- **src/data**: Modular data structure (personal info, skills, education, projects, etc.)
- **src/hooks**: Custom React hooks (use-toast)
- **src/lib**: Utility functions
- **public**: Static assets and HTML entry point
- **build**: Production compiled output

## Language & Runtime
**Language**: JavaScript (ES6+)  
**Runtime**: Node.js  
**Framework**: React 18.2.0  
**Build System**: Create React App (react-scripts)  
**Package Manager**: npm

## Dependencies
**Main**: React Router DOM 6.22.3, Framer Motion 12.23.5, Shadcn/UI, TailwindCSS, Radix UI, Lucide React, React Hook Form, Zod, Next Themes, Sonner, Embla Carousel  
**Dev**: ESLint 8.57.0, TailwindCSS 3.4.17, PostCSS 8.4.49, Autoprefixer 10.4.20, gh-pages 6.3.0

## Build & Installation
\\\ash
npm install
npm start
npm run build
npm test
npm run deploy
\\\

## Main Files
**Entry Points**: public/index.html, src/index.js, src/App.js  
**Configuration**: package.json, jsconfig.json, tailwind.config.js, vercel.json, components.json  
**Data**: src/data/projects/projectsData.js (9 projects), src/data/common/personal.js

## Projects (Total: 9)
1. Purchase Management System (Enterprise) ⭐
2. E-Commerce Backend API (Backend) ⭐
3. Team Management Desktop & Mobile App (Mobile) ⭐
4. iDBOOK Mobile Application (Mobile)
5. iDBOOK Agent Mobile Application (Mobile)
6. Car Service App (Mobile)
7. Food Ordering App (Mobile)
8. Darrebni National Platform (Web) ⭐
9. BetterMe - Health Application (Mobile)

## Deployment
**Platform**: Vercel  
**Alternative**: GitHub Pages (gh-pages configured)  
**Configuration**: vercel.json for client-side routing

## Recent Fixes
✅ Fixed Featured Projects duplication issue - ProjectsShowcase now displays once with 2-column grid layout
✅ Improved project display with better spacing (gap-8/gap-10) and larger cards (h-96)
✅ Enhanced hover effects and visual feedback for project cards
