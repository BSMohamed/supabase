'use client'

/**
 * SUPABASE DASHBOARD LAYOUT - Exact Match
 * Extracted from Supabase Studio (original implementation)
 *
 * Features:
 * - Expandable sidebar (hover to expand)
 * - Smooth framer-motion animations
 * - Exact Supabase colors and styling
 * - Contextual secondary sidebar
 * - Responsive mobile layout
 */

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Database, Settings, Home, Search, Bell, User, HelpCircle,
  PanelLeftDashed, ChevronLeft, Menu, X
} from 'lucide-react'

// ============================================
// TYPES
// ============================================

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
  primaryMenuItems?: MenuItem[]
  secondaryMenuItems?: SubMenuItem[]
  projectName?: string
  organizationName?: string
  userName?: string
  onPrimaryMenuClick?: (key: string) => void
  onSecondaryMenuClick?: (key: string) => void
  onSearch?: () => void
}

// ============================================
// CONSTANTS (from original Supabase)
// ============================================

const SIDEBAR_WIDTH = '13rem' // 208px
const SIDEBAR_WIDTH_ICON = '3rem' // 48px
const ICON_SIZE = 32
const ICON_STROKE_WIDTH = 1.5

// ============================================
// MAIN COMPONENT
// ============================================

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
  const [sidebarOpen, setSidebarOpen] = useState(false) // Collapsed by default
  const [sidebarBehavior, setSidebarBehavior] = useState<'expandable' | 'open' | 'closed'>('expandable')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Default primary menu items (Supabase style)
  const defaultPrimaryItems: MenuItem[] = [
    {
      key: 'home',
      label: 'Home',
      icon: <Home size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />,
      link: '/project/home',
    },
    {
      key: 'database',
      label: 'Database',
      icon: <Database size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />,
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
      icon: <Settings size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />,
      link: '/project/settings',
    },
  ]

  const menuItems = primaryMenuItems || defaultPrimaryItems
  const selectedMenuItem = menuItems.find(item => item.key === selectedPrimary)
  const secondaryItems = secondaryMenuItems || selectedMenuItem?.items || []

  const handlePrimaryClick = (key: string) => {
    setSelectedPrimary(key)
    if (onPrimaryMenuClick) onPrimaryMenuClick(key)
  }

  const handleSecondaryClick = (key: string) => {
    if (onSecondaryMenuClick) onSecondaryMenuClick(key)
  }

  // Auto expand/collapse behavior
  useEffect(() => {
    if (sidebarBehavior === 'open') setSidebarOpen(true)
    if (sidebarBehavior === 'closed') setSidebarOpen(false)
  }, [sidebarBehavior])

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-studio">
      {/* TOP HEADER BAR */}
      <header className="h-12 border-b border-default bg-studio flex items-center justify-between px-4 flex-shrink-0 z-20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 hover:bg-surface-100 rounded transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-foreground font-medium">{organizationName}</span>
            <span className="text-border-stronger">/</span>
            <span className="text-brand font-medium">{projectName}</span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            onClick={onSearch}
            className="w-full px-3 py-1.5 bg-surface-100 hover:bg-surface-200 rounded border border-default text-sm text-left text-foreground-muted flex items-center gap-2 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search...</span>
            <kbd className="ml-auto text-xs bg-alternative px-1.5 py-0.5 rounded border border-strong font-mono">⌘K</kbd>
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-100 rounded-md transition-colors">
            <HelpCircle className="w-5 h-5 text-foreground-light" />
          </button>
          <button className="p-2 hover:bg-surface-100 rounded-md transition-colors relative">
            <Bell className="w-5 h-5 text-foreground-light" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full"></span>
          </button>
          <button className="flex items-center gap-2 p-1.5 hover:bg-surface-100 rounded-md transition-colors">
            <div className="w-7 h-7 bg-brand rounded-full flex items-center justify-center text-background text-sm font-medium">
              {userName.charAt(0).toUpperCase()}
            </div>
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* PRIMARY SIDEBAR (Expandable with framer-motion) */}
        <AnimatePresence>
          <motion.aside
            initial={false}
            animate={{
              width: sidebarOpen ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_ICON
            }}
            transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
            onMouseEnter={() => {
              if (sidebarBehavior === 'expandable') setSidebarOpen(true)
            }}
            onMouseLeave={() => {
              if (sidebarBehavior === 'expandable') setSidebarOpen(false)
            }}
            className={`
              bg-dash-sidebar border-r border-default flex-shrink-0
              hidden lg:flex flex-col
              ${mobileMenuOpen ? 'absolute inset-y-0 left-0 z-30 lg:relative' : ''}
            `}
          >
            {/* Sidebar content */}
            <nav className="flex-1 flex flex-col gap-1 p-2 overflow-hidden">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handlePrimaryClick(item.key)}
                  className={`
                    group relative flex items-center gap-3 rounded-md transition-all
                    ${sidebarOpen ? 'px-2' : 'px-1.5 justify-center'}
                    ${selectedPrimary === item.key
                      ? 'bg-selection text-foreground'
                      : 'text-foreground-lighter hover:bg-surface-100 hover:text-foreground'}
                    h-10
                  `}
                  title={!sidebarOpen ? item.label : ''}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                    {item.icon}
                  </div>

                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm font-normal overflow-hidden whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {selectedPrimary === item.key && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand rounded-r"></div>
                  )}

                  {/* Tooltip for collapsed state */}
                  {!sidebarOpen && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-background text-xs rounded
                                  opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                      {item.label}
                    </div>
                  )}
                </button>
              ))}
            </nav>

            {/* Sidebar footer - Behavior toggle */}
            <div className="border-t border-default p-2">
              <div className="relative">
                <button
                  onClick={() => {
                    const behaviors: ('expandable' | 'open' | 'closed')[] = ['expandable', 'open', 'closed']
                    const currentIndex = behaviors.indexOf(sidebarBehavior)
                    const nextBehavior = behaviors[(currentIndex + 1) % behaviors.length]
                    setSidebarBehavior(nextBehavior)
                  }}
                  className={`
                    flex items-center gap-3 rounded-md transition-colors w-full
                    ${sidebarOpen ? 'px-2' : 'px-1.5 justify-center'}
                    text-foreground-muted hover:bg-surface-100 hover:text-foreground h-10
                  `}
                  title={!sidebarOpen ? 'Toggle sidebar' : ''}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8">
                    <PanelLeftDashed size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />
                  </div>
                </button>
              </div>
            </div>
          </motion.aside>
        </AnimatePresence>

        {/* SECONDARY SIDEBAR (Contextual navigation) */}
        {secondaryItems.length > 0 && (
          <AnimatePresence>
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className={`
                w-64 bg-dash-sidebar border-r border-default flex-shrink-0
                ${mobileMenuOpen ? 'absolute inset-y-0 left-12 z-20 lg:relative' : 'hidden lg:block'}
              `}
            >
              <div className="h-full flex flex-col">
                {/* Secondary sidebar header */}
                <div className="h-12 border-b border-default flex items-center justify-between px-6">
                  <h2 className="text-lg font-normal text-foreground">{selectedMenuItem?.label}</h2>
                </div>

                {/* Secondary menu items */}
                <nav className="flex-1 overflow-y-auto px-3 py-3">
                  <div className="space-y-0.5">
                    {secondaryItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => handleSecondaryClick(item.key)}
                        className="w-full px-3 py-2 text-sm text-left rounded-md
                                 text-foreground-light hover:text-foreground hover:bg-surface-100
                                 transition-colors flex items-center gap-2"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.aside>
          </AnimatePresence>
        )}

        {/* MAIN CONTENT PANEL */}
        <main className="flex-1 overflow-auto bg-studio">
          <div className="h-full">
            {children || (
              <div className="h-full flex items-center justify-center text-foreground-muted">
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
          className="fixed inset-0 bg-overlay z-10 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}
