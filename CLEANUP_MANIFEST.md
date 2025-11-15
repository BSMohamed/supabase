# Supabase UI Cleanup Manifest

## Goal
Clean the Supabase repo to keep only the basic app UI structure that can be opened in a Next.js project.

## UI Components to Keep
- Primary sidebar (left-most) – for top-level sections
- Secondary sidebar (contextual navigation) – appears when clicking on primary sidebar items
- Top header bar – for environment switching, user menu, search, feedback, etc.
- Content panel – main content area

## Pages to KEEP

### Root Level Pages (Authentication & Core)
- `pages/_app.tsx` ✓
- `pages/_document.tsx` ✓
- `pages/404.tsx` ✓
- `pages/500.tsx` ✓
- `pages/sign-in.tsx` ✓ (main login)
- `pages/sign-up.tsx` ✓ (registration)
- `pages/sign-in-sso.tsx` ✓ (enterprise SSO)
- `pages/sign-in-mfa.tsx` ✓ (two-factor auth)
- `pages/forgot-password.tsx` ✓
- `pages/reset-password.tsx` ✓
- `pages/organizations.tsx` ✓ (main landing page)
- `pages/join.tsx` ✓ (organization invites)
- `pages/authorize.tsx` ✓ (OAuth flow)
- `pages/logout.tsx` ✓

### New Organization/Project Flow
- `pages/new/index.tsx` ✓ (create organization)
- `pages/new/[slug].tsx` ✓ (create project wizard)

### Organization Pages
- `pages/org/index.tsx` ✓
- `pages/org/[slug]/index.tsx` ✓ (org home with project list)
- `pages/org/[slug]/general.tsx` ✓ (basic settings example)

### Account Pages
- `pages/account/me.tsx` ✓ (profile settings)

### Project Pages (Minimal for UI Demo)
- `pages/project/[ref]/index.tsx` ✓ (project dashboard)
- `pages/project/[ref]/building.tsx` ✓ (building state)
- `pages/project/[ref]/database/index.tsx` ✓ (example: shows secondary sidebar)
- `pages/project/[ref]/database/tables/index.tsx` ✓ (example: sub-navigation)

## Layout Components to KEEP (All Essential for UI)
- `components/layouts/DefaultLayout.tsx` ✓
- `components/layouts/ProjectLayout/` (all files) ✓
- `components/layouts/AppLayout/` (all files) ✓
- `components/layouts/DatabaseLayout/` ✓ (example product layout)
- `components/layouts/WizardLayout.tsx` ✓
- `components/layouts/SignInLayout/` (all files) ✓
- `components/layouts/APIAuthorizationLayout.tsx` ✓
- `components/layouts/Scaffold.tsx` ✓

## Core UI Components to KEEP
- `components/interfaces/Sidebar.tsx` ✓ (primary sidebar)
- `components/interfaces/UserDropdown.tsx` ✓
- `components/ui/ProductMenu/` ✓ (secondary sidebar)
- `components/ui/` (most shared UI components) ✓
- `components/layouts/ProjectLayout/LayoutHeader/` ✓ (header bar)
- `components/layouts/ProjectLayout/NavigationBar/` ✓

## Components for Keep Pages
- `components/interfaces/Organization/` ✓
- `components/interfaces/ProjectCreation/` ✓
- `components/interfaces/Home/` ✓
- `components/interfaces/Auth/` (sign-in/up components) ✓
- `components/interfaces/Settings/General/` ✓
- `components/interfaces/TableGridEditor/` ✓ (for database example)

## Pages/Features to REMOVE

### Remove ALL Auth Product Pages
- `pages/project/[ref]/auth/**` ❌

### Remove ALL Storage Pages
- `pages/project/[ref]/storage/**` ❌

### Remove ALL Functions Pages
- `pages/project/[ref]/functions/**` ❌

### Remove ALL Realtime Pages
- `pages/project/[ref]/realtime/**` ❌

### Remove ALL Logs Pages
- `pages/project/[ref]/logs/**` ❌

### Remove ALL Reports Pages
- `pages/project/[ref]/reports/**` ❌

### Remove ALL Advisors Pages
- `pages/project/[ref]/advisors/**` ❌

### Remove Most Database Sub-Pages (Keep only index and tables)
- `pages/project/[ref]/database/backups/**` ❌
- `pages/project/[ref]/database/etl/**` ❌
- `pages/project/[ref]/database/publications/**` ❌
- `pages/project/[ref]/database/extensions.tsx` ❌
- `pages/project/[ref]/database/functions.tsx` ❌
- `pages/project/[ref]/database/indexes.tsx` ❌
- `pages/project/[ref]/database/migrations.tsx` ❌
- `pages/project/[ref]/database/roles.tsx` ❌
- `pages/project/[ref]/database/schemas.tsx` ❌
- `pages/project/[ref]/database/settings.tsx` ❌
- `pages/project/[ref]/database/triggers.tsx` ❌
- `pages/project/[ref]/database/types.tsx` ❌
- `pages/project/[ref]/database/column-privileges.tsx` ❌
- `pages/project/[ref]/database/tables/[id].tsx` ❌

### Remove SQL Editor Pages
- `pages/project/[ref]/editor/**` ❌
- `pages/project/[ref]/sql/**` ❌

### Remove Settings Pages (Keep basic structure in layout only)
- `pages/project/[ref]/settings/**` ❌

### Remove Integration Pages
- `pages/project/[ref]/integrations/**` ❌
- `pages/integrations/**` ❌

### Remove Branches/Merge Pages
- `pages/project/[ref]/branches/**` ❌
- `pages/project/[ref]/merge.tsx` ❌

### Remove API/Support Pages
- `pages/project/[ref]/api/**` ❌
- `pages/support/**` ❌

### Remove CLI Pages
- `pages/cli/**` ❌

### Remove Extra Auth Pages
- `pages/sign-in-partner.tsx` ❌
- `pages/sign-in-fly-tos.tsx` ❌
- `pages/forgot-password-mfa.tsx` ❌
- `pages/aws-marketplace-onboarding.tsx` ❌
- `pages/claim-project.tsx` ❌

### Remove Extra Org Pages
- `pages/org/[slug]/team.tsx` ❌
- `pages/org/[slug]/billing.tsx` ❌
- `pages/org/[slug]/audit.tsx` ❌
- `pages/org/[slug]/security.tsx` ❌
- `pages/org/[slug]/sso.tsx` ❌
- `pages/org/[slug]/apps.tsx` ❌
- `pages/org/[slug]/documents.tsx` ❌
- `pages/org/[slug]/integrations.tsx` ❌
- `pages/org/[slug]/usage.tsx` ❌

### Remove Extra Account Pages
- `pages/account/audit.tsx` ❌
- `pages/account/security.tsx` ❌
- `pages/account/tokens.tsx` ❌

## Component Interfaces to REMOVE
- `components/interfaces/Auth/` (product pages, not sign-in) ❌
- `components/interfaces/Storage/` ❌
- `components/interfaces/Functions/` ❌
- `components/interfaces/Realtime/` ❌
- `components/interfaces/Logs/` ❌
- `components/interfaces/Reports/` ❌
- `components/interfaces/Advisors/` ❌
- `components/interfaces/SQLEditor/` ❌
- `components/interfaces/Integrations/` ❌
- Most of `components/interfaces/Settings/` (keep General only) ❌

## Next Steps
1. Remove all pages marked with ❌
2. Remove corresponding component interfaces
3. Clean up package.json dependencies
4. Update any routing/navigation that references removed pages
5. Test that the app runs
