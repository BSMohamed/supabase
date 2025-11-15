# Supabase Studio UI - Cleaned Version

This is a cleaned-up version of the Supabase Studio dashboard that contains only the essential UI structure and components. The focus is on demonstrating the core application layout and navigation patterns.

## What's Included

This cleaned version preserves the complete UI structure of the Supabase dashboard:

### 🎨 Core UI Components

1. **Primary Sidebar (Left)** - Main navigation for top-level sections
2. **Secondary Sidebar (Contextual)** - Appears when clicking items in the primary sidebar (e.g., Database section)
3. **Top Header Bar** - Organization/project switching, user menu, search, etc.
4. **Content Panel** - Main content area with proper layout and spacing

### 📄 Pages Kept

#### Authentication & Onboarding
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/sign-in-sso` - SSO authentication
- `/sign-in-mfa` - Multi-factor authentication
- `/forgot-password` - Password reset
- `/reset-password` - Password change
- `/logout` - Sign out

#### Organization & Project Management
- `/organizations` - List all organizations (main landing page when logged in)
- `/org/[slug]` - Organization home (shows project list)
- `/org/[slug]/general` - Organization settings example
- `/new` - Create new organization wizard
- `/new/[slug]` - Create new project wizard (complete multi-step form)

#### Account
- `/account/me` - User profile settings

#### Project Pages (Example UI Structure)
- `/project/[ref]` - Project home/dashboard
- `/project/[ref]/building` - Building state page
- `/project/[ref]/database` - Database section (shows secondary sidebar)
- `/project/[ref]/database/tables` - Tables list (shows sub-navigation)

#### Other
- `/join` - Accept organization invitation
- `/authorize` - OAuth app authorization
- `/404` and `/500` - Error pages

### 🏗️ Layout Structure

The app uses a nested layout pattern:

```
_app.tsx (Global providers)
└── DefaultLayout (Header + Primary Sidebar)
    └── DatabaseLayout (Secondary Sidebar)
        └── Page Content
```

#### Key Layout Components Preserved
- `components/layouts/DefaultLayout.tsx` - Base layout with header and primary sidebar
- `components/layouts/ProjectLayout/` - Project-specific layout wrapper
- `components/layouts/DatabaseLayout/` - Example product layout with secondary sidebar
- `components/layouts/WizardLayout.tsx` - For multi-step forms (org/project creation)
- `components/layouts/SignInLayout/` - Authentication page layout
- `components/layouts/Scaffold.tsx` - Content panel scaffolding

#### Navigation Components
- `components/interfaces/Sidebar.tsx` - Primary sidebar (left-most)
- `components/ui/ProductMenu/` - Secondary sidebar component
- `components/layouts/ProjectLayout/LayoutHeader/` - Top header bar
- `components/layouts/ProjectLayout/NavigationBar/` - Navigation utilities

### 🔧 Core Components Kept

- **Organization Components** - Organization creation, settings, project list
- **Project Creation** - Complete project creation wizard with all steps
- **Sign In/Up** - Authentication forms and flows
- **Home/Dashboard** - Project home page components
- **Table Grid Editor** - For the database tables example
- **Settings/General** - Basic settings example
- **UI Components** - All shared UI components from `components/ui/`

## What Was Removed

To focus on UI structure, the following product-specific pages were removed:
- Auth product pages (user management, providers, etc.)
- Storage pages
- Edge Functions pages
- Realtime pages
- SQL Editor pages
- Logs/Reports pages
- Advisors pages
- Most Database sub-pages (kept only Tables as example)
- Most Settings pages
- Integrations pages
- Branches/Git pages
- API documentation pages

**Note:** All corresponding data hooks, components, and layouts for these removed features were also cleaned up.

## How to Use

This is a Next.js application using the Pages Router. To run it:

### Prerequisites
- Node.js 18+
- pnpm (required by the workspace)

### Installation

```bash
# From the root of the monorepo
pnpm install

# Navigate to studio app
cd apps/studio

# Run development server
pnpm dev
```

The app will be available at `http://localhost:8082`

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # TypeScript type checking
pnpm test         # Run tests
```

## Tech Stack

- **Framework:** Next.js 15 (Pages Router)
- **UI Library:** Custom components from `ui` workspace package
- **Styling:** Tailwind CSS
- **State Management:** Valtio
- **Data Fetching:** TanStack Query (React Query)
- **Forms:** React Hook Form + Yup validation
- **Icons:** Lucide React + custom icon package
- **Drag & Drop:** @dnd-kit
- **Animations:** Framer Motion

## UI Navigation Flow

### New User Journey
1. Visit `/sign-up` → Create account
2. Redirect to `/organizations` → Empty state
3. Click "New organization" → `/new` (wizard)
4. After org creation → `/new/{org-slug}` (project creation wizard)
5. After project creation → `/project/{ref}/building` (brief loading)
6. Redirect to `/project/{ref}` (project home)

### Existing User Journey
1. Visit `/sign-in` → Sign in
2. Redirect to `/organizations` → See all orgs
3. Click organization → `/org/{slug}` (project list)
4. Click project → `/project/{ref}` (project dashboard)
5. Click "Database" in sidebar → Secondary sidebar appears
6. Click "Tables" → `/project/{ref}/database/tables`

## Key Features Demonstrated

### ✅ Responsive Design
- Desktop: All sidebars visible, resizable panels
- Mobile: Collapsible navigation, sheet menus

### ✅ Sidebar States
- **Primary Sidebar:** Can be open, closed, or expandable (hover to expand)
- **Secondary Sidebar:** Appears contextually based on selected product
- **Resizable Panels:** Using ResizablePanel components

### ✅ Navigation Patterns
- Nested routing with layouts
- Breadcrumb navigation
- Context-aware menus
- Dynamic product menus

### ✅ Wizards & Forms
- Multi-step organization creation
- Complete project creation flow with:
  - Organization selector
  - Project name
  - Cloud provider selection
  - Compute size picker
  - Database password
  - Region selector
  - PostgreSQL version
  - Security options

## File Structure

```
apps/studio/
├── pages/                    # Next.js pages (routes)
│   ├── _app.tsx             # App wrapper with providers
│   ├── _document.tsx        # HTML document
│   ├── sign-in.tsx          # Auth pages
│   ├── sign-up.tsx
│   ├── organizations.tsx    # Landing page
│   ├── new/                 # Org/project creation
│   ├── org/[slug]/          # Org pages
│   ├── account/             # Account settings
│   └── project/[ref]/       # Project pages
│       ├── index.tsx        # Project home
│       └── database/        # Database section (example)
│           ├── index.tsx
│           └── tables/
│               └── index.tsx
├── components/
│   ├── interfaces/          # Feature-specific components
│   │   ├── Sidebar.tsx      # Primary sidebar
│   │   ├── UserDropdown.tsx
│   │   ├── Organization/
│   │   ├── ProjectCreation/
│   │   ├── Home/
│   │   ├── SignIn/
│   │   └── Database/
│   ├── layouts/             # Layout components
│   │   ├── DefaultLayout.tsx
│   │   ├── ProjectLayout/
│   │   ├── DatabaseLayout/
│   │   ├── WizardLayout.tsx
│   │   └── SignInLayout/
│   └── ui/                  # Shared UI components
│       └── ProductMenu/     # Secondary sidebar
├── data/                    # React Query hooks
├── lib/                     # Utilities
├── state/                   # Valtio state
└── package.json
```

## Environment Variables

Create a `.env.local` file (copy from `.env.example` if available) with necessary environment variables. The app may require:

- API endpoints
- Feature flags
- Third-party service keys (Stripe, Sentry, etc.)

Check `.env.example` or `lib/constants.ts` for required variables.

## Navigation Configuration

Navigation routes are defined in:
- `components/layouts/ProjectLayout/NavigationBar/NavigationBar.utils.tsx`
- `components/layouts/DatabaseLayout/DatabaseMenu.utils.tsx`

To add back removed features, restore the corresponding pages and uncomment routes in these files.

## Notes

- **Dependencies:** Most dependencies are kept to ensure UI components work properly. The build process will tree-shake unused code.
- **Mock Data:** You may need to set up mock data or backend connections for full functionality.
- **Authentication:** The auth flow requires Supabase Auth backend or you can mock it.
- **Feature Flags:** Some features are controlled by feature flags in the codebase.

## Extending This

To add back removed features:

1. Check `CLEANUP_MANIFEST.md` for what was removed
2. Restore the corresponding pages from git history
3. Restore related components from `components/interfaces/`
4. Restore data hooks from `data/`
5. Update navigation configuration files
6. Restore layout components if needed

## Support

For questions about the original Supabase Studio:
- GitHub: https://github.com/supabase/supabase
- Docs: https://supabase.com/docs
- Discord: https://discord.supabase.com

For questions about this cleanup:
- See `CLEANUP_MANIFEST.md` for detailed removal documentation
- Check git history to restore removed features

---

**Created:** November 2025
**Purpose:** UI structure demonstration and Next.js layout pattern reference
**Based on:** Supabase Studio (https://github.com/supabase/supabase)
