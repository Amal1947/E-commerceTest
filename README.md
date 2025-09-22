# InterToons Shop

A modern and interactive e-commerce web application built with **Vite**, **React**, **Framer Motion**, and **Tailwind CSS**.  
This project showcases a premium product catalog with search, category filtering, and a shopping cart feature.

---

## Demo

 live demo link here:  ""


 ## Features

- Browse and search products with a responsive and dynamic grid.
- Filter products by category.
- Add products to a shopping cart.
- Animated hero section and floating elements using **Framer Motion**.
- Fully responsive layout for desktop, tablet, and mobile.
- No products state handling with a friendly "No products found" message.

## Technologies

- [React 18](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – lightning-fast development environment
- [Framer Motion](https://www.framer.com/motion/) – animations
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [SWR](https://swr.vercel.app/) – data fetching
- [Recoil](https://recoiljs.org/) – state management (used for cart)


1. Clone the repository:

```bash
git clone https://github.com/Amal1947/E-commerceTest.git


=>Install dependencies:
npm install
# or
yarn
# or
pnpm install

=>Start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
```
Project tree

Intertoons E commerce
├─ bun.lockb
├─ components.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ placeholder.svg
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ api
│  │  └─ products.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ atoms
│  │  └─ cartAtoms.js
│  ├─ components
│  │  ├─ Cart.jsx
│  │  ├─ Header.jsx
│  │  ├─ ProductCard.jsx
│  │  ├─ ProductFilter.jsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.jsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.jsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.jsx
│  │     ├─ toaster.jsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     ├─ tooltip.tsx
│  │     └─ use-toast.js
│  ├─ config
│  │  └─ baseUrl.js
│  ├─ data
│  │  └─ products.js
│  ├─ hooks
│  │  ├─ use-mobile.jsx
│  │  └─ use-toast.js
│  ├─ index.css
│  ├─ lib
│  │  ├─ fetcher.js
│  │  └─ utils.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ Index.jsx
│  │  └─ NotFound.jsx
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```