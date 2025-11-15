'use client'

import { useState } from 'react'
import { ChevronLeft, Menu, Database, Settings, Home, Search, Bell, User, HelpCircle } from 'lucide-react'

// ============================================
// STANDALONE DASHBOARD LAYOUT COMPONENT
// ============================================
// Copy this entire file to your Next.js project
// Install required dependencies: npm install lucide-react

interface MenuItem {
  key: string
  label: string
  icon: React.ReactNode
  link: string
  items?: SubMenuItem[]
}

interface SubMenuItem {
  name: string
  key: string
  url: string
}

interface DashboardLayoutProps {
  children?: React.ReactNode

  // Customization props
  primaryMenuItems?: MenuItem[]
  secondaryMenuItems?: SubMenuItem[]
  projectName?: string
  organizationName?: string
  userName?: string

  // Callbacks
  onPrimaryMenuClick?: (key: string) => void
  onSecondaryMenuClick?: (key: string) => void
  onSearch?: () => void
}

export default function DashboardLayout({
  children,
  primaryMenuItems,
  secondaryMenuItems,
  projectName = "My Project",
  organizationName = "My Organization",
  userName = "User",
  onPrimaryMenuClick,
  onSecondaryMenuClick,
  onSearch,
}: DashboardLayoutProps) {
  const [selectedPrimary, setSelectedPrimary] = useState('database')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [secondarySidebarOpen, setSecondarySidebarOpen] = useState(true)

  // Default primary menu items
  const defaultPrimaryItems: MenuItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: <Home className="w-5 h-5" />,
      link: '/project/home',
    },
    {
      key: 'database',
      label: 'Database',
      icon: <Database className="w-5 h-5" />,
      link: '/project/database',
      items: [
        { name: 'Tables', key: 'tables', url: '/project/database/tables' },
        { name: 'Functions', key: 'functions', url: '/project/database/functions' },
        { name: 'Triggers', key: 'triggers', url: '/project/database/triggers' },
        { name: 'Extensions', key: 'extensions', url: '/project/database/extensions' },
      ],
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      link: '/project/settings',
    },
  ]

  const menuItems = primaryMenuItems || defaultPrimaryItems
  const selectedMenuItem = menuItems.find(item => item.key === selectedPrimary)
  const secondaryItems = secondaryMenuItems || selectedMenuItem?.items || []

  const handlePrimaryClick = (key: string) => {
    setSelectedPrimary(key)
    if (onPrimaryMenuClick) {
      onPrimaryMenuClick(key)
    }
  }

  const handleSecondaryClick = (key: string) => {
    if (onSecondaryMenuClick) {
      onSecondaryMenuClick(key)
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-50">
      {/* TOP HEADER BAR */}
      <header className="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4 flex-shrink-0 z-20">
        {/* Left side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 hover:bg-gray-100 rounded"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="font-semibold text-sm">{organizationName}</div>
            <span className="text-gray-400">/</span>
            <div className="font-semibold text-sm text-green-600">{projectName}</div>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            onClick={onSearch}
            className="w-full px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-sm text-left text-gray-500 flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <kbd className="ml-auto text-xs bg-white px-1.5 py-0.5 rounded border">⌘K</kbd>
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <HelpCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded">
            <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              {userName.charAt(0).toUpperCase()}
            </div>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* PRIMARY SIDEBAR (Left-most) */}
        <aside className={`
          w-16 bg-gray-900 text-white flex-shrink-0
          flex flex-col items-center py-4 gap-2
          ${mobileMenuOpen ? 'absolute inset-y-0 left-0 z-30 lg:relative' : 'hidden lg:flex'}
        `}>
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handlePrimaryClick(item.key)}
              className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                transition-colors relative group
                ${selectedPrimary === item.key
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'}
              `}
              title={item.label}
            >
              {item.icon}

              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded
                            opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>

              {/* Active indicator */}
              {selectedPrimary === item.key && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-400 rounded-r"></div>
              )}
            </button>
          ))}
        </aside>

        {/* SECONDARY SIDEBAR (Contextual navigation) */}
        {secondaryItems.length > 0 && (
          <aside className={`
            w-64 bg-white border-r border-gray-200 flex-shrink-0
            transition-all duration-200
            ${secondarySidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0'}
            ${mobileMenuOpen ? 'absolute inset-y-0 left-16 z-20 lg:relative' : 'hidden lg:block'}
          `}>
            <div className="h-full flex flex-col">
              {/* Secondary sidebar header */}
              <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4">
                <h2 className="font-semibold text-sm">{selectedMenuItem?.label}</h2>
                <button
                  onClick={() => setSecondarySidebarOpen(!secondarySidebarOpen)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronLeft className={`w-4 h-4 transition-transform ${!secondarySidebarOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Secondary menu items */}
              <nav className="flex-1 overflow-y-auto p-2">
                {secondaryItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleSecondaryClick(item.key)}
                    className="w-full px-3 py-2 text-sm text-left rounded hover:bg-gray-100
                             text-gray-700 hover:text-gray-900 flex items-center gap-2"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* MAIN CONTENT PANEL */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="h-full">
            {children || (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-6xl mb-4">📄</div>
                  <p className="text-lg">Content goes here</p>
                  <p className="text-sm mt-2">Replace this with your page content</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}

// ============================================
// EXAMPLE USAGE
// ============================================

export function ExampleUsage() {
  return (
    <DashboardLayout
      projectName="My App"
      organizationName="My Company"
      userName="John Doe"
      onPrimaryMenuClick={(key) => console.log('Primary menu clicked:', key)}
      onSecondaryMenuClick={(key) => console.log('Secondary menu clicked:', key)}
      onSearch={() => console.log('Search clicked')}
    >
      {/* Your page content goes here */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to your dashboard</h1>
        <p className="text-gray-600">This is your main content area.</p>
      </div>
    </DashboardLayout>
  )
}
