# Project Structure

This document describes the folder and file structure of the ArtistsHub project.

## Root Directory

```
artist web/
├── src/                    # Source code
│   ├── context/           # React context providers
│   │   └── AuthContext.tsx
│   └── utils/             # Utility functions
│       └── api.ts         # API client functions
├── components/            # Reusable React components
│   ├── Carousel.tsx       # Image carousel component
│   └── Navbar.tsx         # Navigation bar component
├── pages/                 # Page components (routes)
│   ├── Home.tsx
│   ├── Artists.tsx
│   ├── ArtistDetail.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Signup.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   ├── FAQ.tsx
│   └── Testimonials.tsx
├── data/                  # Static data files
│   └── artists.ts         # Artist data
├── server/                # Backend server code
│   ├── config/           # Configuration files
│   │   └── database.js
│   ├── middleware/       # Express middleware
│   │   └── auth.js
│   ├── models/          # Database models
│   │   ├── Artist.js
│   │   ├── Contact.js
│   │   └── User.js
│   ├── routes/          # API routes
│   │   ├── artists.js
│   │   ├── auth.js
│   │   └── contact.js
│   ├── server.js        # Server entry point
│   └── package.json    # Server dependencies
├── logo/                # Logo and brand assets
│   └── logo.png
├── docs/                # Documentation
│   ├── DEPLOYMENT.md
│   ├── DEPLOY_QUICK.md
│   ├── GETTING_STARTED.md
│   ├── QUICK_START.md
│   ├── SETUP.md
│   ├── FIX_POWERSHELL.md
│   ├── EXPANSION.md
│   └── PROJECT_STRUCTURE.md (this file)
├── archive/             # Archived/old code (not used)
│   └── Main/           # Old implementation
├── App.tsx             # Main React app component
├── main.tsx            # React entry point
├── index.html          # HTML template
├── index.css          # Global styles
├── package.json        # Frontend dependencies
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── tsconfig.node.js    # TypeScript config for Node
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── netlify.toml        # Netlify deployment config
├── vercel.json         # Vercel deployment config
└── README.md           # Project readme
```

## Directory Descriptions

### `/src`
Contains the core source code organized by feature/type:
- **context/**: React Context providers for global state management
- **utils/**: Utility functions and helpers, including API client

### `/components`
Reusable React components that can be used across multiple pages:
- `Carousel.tsx`: Image carousel/slider component
- `Navbar.tsx`: Main navigation component

### `/pages`
Page-level components that represent different routes:
- Each file corresponds to a route in the application
- Components handle their own data fetching and state

### `/data`
Static data files (can be replaced with API calls):
- `artists.ts`: Artist information and gallery data

### `/server`
Backend Express.js server:
- **config/**: Database and other configuration
- **middleware/**: Express middleware (authentication, etc.)
- **models/**: Mongoose/MongoDB models
- **routes/**: API endpoint definitions
- `server.js`: Server entry point

### `/docs`
All project documentation:
- Deployment guides
- Setup instructions
- Quick start guides
- Project structure (this file)

### `/archive`
Old or unused code that has been archived:
- `Main/`: Previous implementation (kept for reference)

## File Naming Conventions

- **Components**: PascalCase (e.g., `Navbar.tsx`, `ArtistDetail.tsx`)
- **Utilities**: camelCase (e.g., `api.ts`, `AuthContext.tsx`)
- **Config files**: lowercase with extensions (e.g., `vite.config.ts`, `tailwind.config.js`)
- **Documentation**: UPPERCASE with underscores (e.g., `DEPLOYMENT.md`, `QUICK_START.md`)

## Important Files

### Entry Points
- `main.tsx`: React application entry point
- `index.html`: HTML template
- `server/server.js`: Backend server entry point

### Configuration
- `vite.config.ts`: Vite build tool configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Frontend dependencies and scripts
- `server/package.json`: Backend dependencies and scripts

### Deployment
- `vercel.json`: Vercel deployment configuration
- `netlify.toml`: Netlify deployment configuration

## Best Practices

1. **Components**: Keep components small and focused on a single responsibility
2. **Pages**: Each page should be self-contained with its own data fetching
3. **Utils**: Shared logic should go in `/src/utils`
4. **Types**: Consider adding a `/src/types` folder for TypeScript types
5. **Assets**: Static assets (images, fonts) should go in `/public` or `/assets`
6. **Documentation**: All docs go in `/docs` folder

## Future Improvements

- Add `/public` folder for static assets
- Add `/src/types` for TypeScript type definitions
- Add `/src/hooks` for custom React hooks
- Add `/tests` for test files
- Consider moving `/data` to API calls

