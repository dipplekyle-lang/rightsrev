# Rev Rights

A React + TypeScript + TanStack Router website with two pages:

- **`/`** — Coming Soon page
- **`/contact`** — Contact page (cloned from ShortsRev contact, rebranded as RevRights)

## Tech Stack

- **React 18** — UI library
- **TypeScript** — type safety throughout
- **TanStack Router v1** — file-based routing
- **Tailwind CSS v3** — utility-first styling
- **Vite 5** — build tool & dev server

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/
│   └── logo.ts                  # Rev Rights logo (embedded base64)
├── components/
│   ├── Header.tsx               # Sticky nav header with Contact button
│   ├── ComingSoonPage.tsx       # Coming soon main content
│   ├── ContactPage.tsx          # Full contact form + info cards
│   ├── Footer.tsx               # Footer with social links
│   └── Icons.tsx                # All SVG icons as React components
├── routes/
│   ├── __root.tsx               # TanStack Router root layout
│   ├── index.tsx                # Home / coming soon page (/)
│   └── contact.tsx              # Contact page (/contact)
├── routeTree.gen.ts             # TanStack Router route tree
├── main.tsx                     # React entry point
└── index.css                    # Tailwind + CSS variables
```
