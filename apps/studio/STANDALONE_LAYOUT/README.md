# 🎨 Standalone Dashboard Layout Component

A beautiful, responsive dashboard layout extracted from Supabase Studio. Features primary sidebar, secondary (contextual) sidebar, top header bar, and blank content area.

## ✨ Features

- ✅ **Primary Sidebar** - Icon-based navigation on the left
- ✅ **Secondary Sidebar** - Contextual menu that appears based on primary selection
- ✅ **Top Header Bar** - Organization/project dropdowns, search, notifications, user menu
- ✅ **Responsive** - Mobile-friendly with hamburger menu
- ✅ **Customizable** - Pass your own menu items and callbacks
- ✅ **Zero Dependencies** - Only requires `lucide-react` for icons
- ✅ **TypeScript** - Full type safety

## 📦 Installation

### 1. Install Dependencies

```bash
npm install lucide-react
# or
pnpm add lucide-react
# or
yarn add lucide-react
```

### 2. Setup Tailwind CSS

Make sure your `tailwind.config.js` includes:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Copy the Component

Copy `DashboardLayout.tsx` to your project:

```
your-project/
├── components/
│   └── DashboardLayout.tsx  ← Copy here
```

### 4. Import CSS (if needed)

In your `app/globals.css` or `pages/_app.tsx`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🚀 Quick Start

### Basic Usage

```tsx
// app/page.tsx or pages/index.tsx
import DashboardLayout from '@/components/DashboardLayout'

export default function Page() {
  return (
    <DashboardLayout
      projectName="My Project"
      organizationName="My Company"
      userName="John Doe"
    >
      <div className="p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Your content goes here...</p>
      </div>
    </DashboardLayout>
  )
}
```

### Advanced Usage with Custom Menu

```tsx
import DashboardLayout from '@/components/DashboardLayout'
import { Database, Users, BarChart, Settings } from 'lucide-react'

export default function Page() {
  const customMenuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <BarChart className="w-5 h-5" />,
      link: '/dashboard',
    },
    {
      key: 'database',
      label: 'Database',
      icon: <Database className="w-5 h-5" />,
      link: '/database',
      items: [
        { name: 'Tables', key: 'tables', url: '/database/tables' },
        { name: 'Queries', key: 'queries', url: '/database/queries' },
      ],
    },
    {
      key: 'users',
      label: 'Users',
      icon: <Users className="w-5 h-5" />,
      link: '/users',
      items: [
        { name: 'All Users', key: 'all', url: '/users/all' },
        { name: 'Admins', key: 'admins', url: '/users/admins' },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      link: '/settings',
    },
  ]

  return (
    <DashboardLayout
      primaryMenuItems={customMenuItems}
      projectName="My App"
      organizationName="ACME Corp"
      userName="Jane Smith"
      onPrimaryMenuClick={(key) => {
        console.log('Navigating to:', key)
        // Add your routing logic here
      }}
      onSecondaryMenuClick={(key) => {
        console.log('Secondary menu clicked:', key)
        // Handle secondary navigation
      }}
      onSearch={() => {
        console.log('Open search modal')
        // Implement search functionality
      }}
    >
      {/* Your page content */}
      <YourPageContent />
    </DashboardLayout>
  )
}
```

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Main content area |
| `primaryMenuItems` | `MenuItem[]` | Default menu | Array of primary sidebar items |
| `secondaryMenuItems` | `SubMenuItem[]` | - | Override secondary menu items |
| `projectName` | `string` | "My Project" | Project name in header |
| `organizationName` | `string` | "My Organization" | Organization name in header |
| `userName` | `string` | "User" | User name for avatar |
| `onPrimaryMenuClick` | `(key: string) => void` | - | Callback when primary menu is clicked |
| `onSecondaryMenuClick` | `(key: string) => void` | - | Callback when secondary menu is clicked |
| `onSearch` | `() => void` | - | Callback when search is triggered |

### MenuItem Interface

```typescript
interface MenuItem {
  key: string
  label: string
  icon: React.ReactNode
  link: string
  items?: SubMenuItem[]  // Optional secondary menu
}

interface SubMenuItem {
  name: string
  key: string
  url: string
}
```

## 📱 Responsive Behavior

- **Desktop** (lg+): Full layout with both sidebars visible
- **Tablet/Mobile**: Hamburger menu, collapsible sidebars
- **Touch-friendly**: Larger tap targets on mobile

## 🎨 Customization

### Colors

The component uses Tailwind's default color palette. To customize:

```tsx
// Change primary color from green to blue
className="bg-blue-600"  // instead of bg-green-600
```

### Icons

Replace Lucide icons with any icon library:

```tsx
import { FaDatabase } from 'react-icons/fa'

const menuItems = [{
  icon: <FaDatabase className="w-5 h-5" />,
  // ...
}]
```

### Styling

Override classes by wrapping in a parent div:

```tsx
<div className="custom-dashboard">
  <DashboardLayout {...props} />
</div>
```

## 🔗 Integration with Next.js App Router

```tsx
// app/dashboard/layout.tsx
import DashboardLayout from '@/components/DashboardLayout'

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout
      projectName="My App"
      organizationName="My Company"
    >
      {children}
    </DashboardLayout>
  )
}
```

Then all pages under `/dashboard/*` will use this layout:

```tsx
// app/dashboard/page.tsx
export default function DashboardPage() {
  return <div>Dashboard content</div>
}

// app/dashboard/users/page.tsx
export default function UsersPage() {
  return <div>Users content</div>
}
```

## 🔗 Integration with Next.js Pages Router

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app'
import DashboardLayout from '@/components/DashboardLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // Use layout for all pages except auth pages
  const useLayout = !['/login', '/signup'].includes(pageProps.pathname)

  if (!useLayout) {
    return <Component {...pageProps} />
  }

  return (
    <DashboardLayout
      projectName="My App"
      organizationName="My Company"
    >
      <Component {...pageProps} />
    </DashboardLayout>
  )
}
```

## 💡 Tips

1. **State Management**: Use context or zustand for menu state across pages
2. **Routing**: Integrate with Next.js router for navigation
3. **Auth**: Hide/show menu items based on user permissions
4. **Theming**: Add dark mode support with Tailwind's dark: variant

## 📄 License

MIT - Free to use in your projects

## 🙏 Credits

Extracted and simplified from [Supabase Studio](https://github.com/supabase/supabase)
