# TODO:
 - Add logging features
 - Add debugging features
 - 


Example File Structure
/src
├── /app                # Routing, layouts, and pages (App Router)
│   ├── (auth)          # Route groups (don't affect URL)
│   │   ├── login/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)     # Logical groupings for layouts
│   │   ├── _components/ # Private folder (ignored by router)
│   │   └── page.tsx
│   ├── api/            # API routes
│   ├── globals.css     # Global styles imported in root layout
│   └── layout.tsx      # Root layout
├── /components         # Shared, reusable UI components
│   ├── /ui             # Primitives (e.g., buttons from Shadcn UI)
│   └── /common         # Shared layouts (header, footer)
├── /hooks              # Global custom React hooks
├── /lib                # Shared utility functions and SDK clients
├── /services           # API fetching and business logic
├── /types              # Shared TypeScript definitions
/public                 # Static assets (images, fonts, etc.)
.env.local              # Local environment variables
next.config.js          # Next.js configuration


Example Layout Reference:

project/
├─ public/                 # static files served directly
│  ├─ images/
│  ├─ icons/
│  └─ fonts/
├─ src/
│  ├─ app/                 # app entry, routing, layouts, pages
│  │  ├─ layout/
│  │  ├─ routes/
│  │  └─ providers/
│  ├─ features/            # feature-based modules
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  ├─ pages/
│  │  │  ├─ hooks/
│  │  │  ├─ services/
│  │  │  ├─ utils/
│  │  │  └─ types.ts
│  │  ├─ blog/
│  │  └─ dashboard/
│  ├─ components/          # reusable global UI components
│  │  ├─ ui/
│  │  ├─ forms/
│  │  └─ layout/
│  ├─ services/            # shared API clients, external integrations
│  ├─ hooks/               # shared hooks
│  ├─ lib/                 # helpers, config wrappers, utilities
│  ├─ styles/              # global styles, tokens, themes
│  ├─ types/               # shared TypeScript types/interfaces
│  ├─ constants/           # app-wide constants
│  └─ utils/               # generic utility functions
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ docs/                   # architecture notes, conventions
├─ scripts/                # build, deploy, maintenance scripts
├─ .env
├─ .env.example
├─ package.json
└─ README.md

Helpful Notes & Commands:
 1) To clear your package manager cache and reinstall the dependencies.
    
        npm cache clean --force && npm install

2) Delete temporary build folders and dependencies.

    rm -rf .next node_modules

3) 
