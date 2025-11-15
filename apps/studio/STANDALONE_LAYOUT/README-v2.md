# 🎨 Supabase Dashboard Layout - V2 (Exact Match)

**100% Accurate Supabase Studio UI** - Extracted from the original codebase with exact colors, animations, and behavior.

## ✨ What's New in V2

- ✅ **Exact Supabase colors** - Uses actual color variables from Studio
- ✅ **Proper animations** - Framer Motion with exact timing (0.4s delay/duration)
- ✅ **Expandable sidebar** - Hover to expand behavior (default state)
- ✅ **Dark theme only** - Matches Supabase's dark UI
- ✅ **Smooth transitions** - All animations match the original
- ✅ **Correct spacing** - 3rem collapsed, 13rem expanded

## 📦 Installation

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react
```

### 2. Copy Files

Copy these 3 files to your project:

```
your-project/
├── components/
│   └── DashboardLayout-v2.tsx    ← Main component
└── styles/
    └── supabase-colors.css       ← Supabase color variables
```

### 3. Import CSS

In your root layout or `_app.tsx`:

```tsx
import './styles/supabase-colors.css'
```

**IMPORTANT:** Import `supabase-colors.css` AFTER Tailwind's base styles:

```css
/* globals.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import './supabase-colors.css'; /* Import here */
@import 'tailwindcss/utilities';
```

### 4. Tailwind Config

Make sure your `tailwind.config.js` includes the component path:

```js
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    // ... other paths
  ],
}
```

## 🚀 Usage

### Basic Example

```tsx
import DashboardLayout from '@/components/DashboardLayout-v2'

export default function Page() {
  return (
    <DashboardLayout
      projectName="My Project"
      organizationName="My Company"
      userName="John Doe"
    >
      <div className="p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-foreground-light">Your content here...</p>
      </div>
    </DashboardLayout>
  )
}
```

### With Custom Menu

```tsx
import DashboardLayout from '@/components/DashboardLayout-v2'
import { Database, Users, BarChart, Settings } from 'lucide-react'

const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <BarChart size={32} strokeWidth={1.5} />,
    link: '/dashboard',
  },
  {
    key: 'database',
    label: 'Database',
    icon: <Database size={32} strokeWidth={1.5} />,
    link: '/database',
    items: [
      { name: 'Tables', key: 'tables', url: '/database/tables' },
      { name: 'Views', key: 'views', url: '/database/views' },
    ],
  },
  {
    key: 'users',
    label: 'Users',
    icon: <Users size={32} strokeWidth={1.5} />,
    link: '/users',
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <Settings size={32} strokeWidth={1.5} />,
    link: '/settings',
  },
]

export default function App() {
  return (
    <DashboardLayout
      primaryMenuItems={menuItems}
      projectName="My App"
      organizationName="ACME Corp"
      onPrimaryMenuClick={(key) => console.log('Navigate to:', key)}
      onSecondaryMenuClick={(key) => console.log('Sub-menu:', key)}
      onSearch={() => console.log('Open search')}
    >
      <YourContent />
    </DashboardLayout>
  )
}
```

## 🎨 Supabase Colors Reference

Use these Tailwind classes for consistent styling:

### Backgrounds
- `bg-studio` - Main background (darkest)
- `bg-dash-sidebar` - Sidebar background
- `bg-surface-100` - Surface elements
- `bg-surface-200` - Elevated surfaces
- `bg-selection` - Selected state (green tint)
- `bg-brand` - Supabase green (#3ecf8e)

### Text
- `text-foreground` - Primary text (almost white)
- `text-foreground-light` - Secondary text
- `text-foreground-lighter` - Tertiary text
- `text-foreground-muted` - Muted text
- `text-brand` - Supabase green text

### Borders
- `border-default` - Default borders
- `border-strong` - Stronger borders
- `border-stronger` - Strongest borders

### Example
```tsx
<div className="bg-surface-100 border border-default rounded-lg p-4">
  <h2 className="text-foreground text-lg mb-2">Card Title</h2>
  <p className="text-foreground-light text-sm">Card description</p>
</div>
```

## ⚙️ Sidebar Behaviors

The sidebar has 3 behaviors (click the bottom icon to cycle):

1. **Expandable** (default) - Hover to expand, leave to collapse
2. **Open** - Always expanded
3. **Closed** - Always collapsed

## 🎛️ Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Main content area |
| `primaryMenuItems` | `MenuItem[]` | Primary sidebar items |
| `secondaryMenuItems` | `SubMenuItem[]` | Override secondary menu |
| `projectName` | `string` | Project name in header |
| `organizationName` | `string` | Organization name |
| `userName` | `string` | User name for avatar |
| `onPrimaryMenuClick` | `(key: string) => void` | Primary menu callback |
| `onSecondaryMenuClick` | `(key: string) => void` | Secondary menu callback |
| `onSearch` | `() => void` | Search callback |

### MenuItem Type
```typescript
interface MenuItem {
  key: string
  label: string
  icon: React.ReactNode  // Use lucide-react icons
  link: string
  items?: SubMenuItem[]  // Optional sub-menu
}

interface SubMenuItem {
  name: string
  key: string
  url: string
}
```

## 📱 Responsive Features

- Desktop (lg+): Full sidebar with expandable behavior
- Mobile/Tablet: Hamburger menu, overlay sidebars
- Touch-friendly tap targets

## 🎬 Animations

All animations match Supabase Studio exactly:

- Sidebar expand/collapse: 0.4s delay + 0.4s duration
- Secondary sidebar: 0.2s fade + slide
- Menu item labels: 0.2s fade
- Smooth easing curves

## 🔧 Customization

### Change Primary Color

Replace brand color in `supabase-colors.css`:

```css
:root {
  --brand-default: 59 130 246; /* Blue instead of green */
}
```

### Add Light Theme

Add light theme variables:

```css
[data-theme="light"] {
  --background-dash-sidebar: 255 255 255;
  --background-studio: 250 250 250;
  /* ... other colors */
}
```

### Custom Icon Sizes

The layout uses Supabase's constants:

```tsx
const ICON_SIZE = 32
const ICON_STROKE_WIDTH = 1.5
```

Adjust these in the component if needed.

## 🆚 V1 vs V2

| Feature | V1 | V2 |
|---------|----|----|
| Colors | Generic gray | Exact Supabase colors |
| Animations | Basic CSS | Framer Motion (exact timing) |
| Sidebar behavior | Toggle only | Expandable/Open/Closed modes |
| Icon size | 20px | 32px (Supabase standard) |
| Spacing | Approximate | Exact (3rem/13rem) |
| Theme | Light/Dark | Dark only (Supabase) |

## 💡 Tips

1. **Icons**: Use `size={32}` and `strokeWidth={1.5}` for all icons
2. **Active states**: Use `bg-selection` for selected items
3. **Tooltips**: Built-in tooltips appear on collapsed sidebar
4. **Mobile**: Test the hamburger menu behavior on small screens

## 📄 License

MIT - Free to use in your projects

## 🙏 Credits

Extracted from [Supabase Studio](https://github.com/supabase/supabase) - all credit to the Supabase team for this beautiful UI!
