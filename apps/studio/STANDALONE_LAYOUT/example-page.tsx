// ============================================
// EXAMPLE: How to use the Dashboard Layout
// ============================================
// Copy this to your Next.js app to see it in action

'use client' // Remove this if using Pages Router

import DashboardLayout from './DashboardLayout'
import { Database, Users, BarChart, Settings, FileText, Mail } from 'lucide-react'

export default function ExamplePage() {
  // Define your menu structure
  const menuItems = [
    {
      key: 'home',
      label: 'Home',
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
        { name: 'Functions', key: 'functions', url: '/database/functions' },
        { name: 'Triggers', key: 'triggers', url: '/database/triggers' },
        { name: 'Extensions', key: 'extensions', url: '/database/extensions' },
        { name: 'Roles', key: 'roles', url: '/database/roles' },
      ],
    },
    {
      key: 'users',
      label: 'Users',
      icon: <Users className="w-5 h-5" />,
      link: '/users',
      items: [
        { name: 'All Users', key: 'all-users', url: '/users/all' },
        { name: 'Admins', key: 'admins', url: '/users/admins' },
        { name: 'Banned', key: 'banned', url: '/users/banned' },
      ],
    },
    {
      key: 'content',
      label: 'Content',
      icon: <FileText className="w-5 h-5" />,
      link: '/content',
      items: [
        { name: 'Posts', key: 'posts', url: '/content/posts' },
        { name: 'Pages', key: 'pages', url: '/content/pages' },
        { name: 'Media', key: 'media', url: '/content/media' },
      ],
    },
    {
      key: 'messages',
      label: 'Messages',
      icon: <Mail className="w-5 h-5" />,
      link: '/messages',
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      link: '/settings',
    },
  ]

  const handlePrimaryClick = (key: string) => {
    console.log('Primary menu clicked:', key)
    // Add your navigation logic here
    // Example with Next.js router:
    // router.push(`/${key}`)
  }

  const handleSecondaryClick = (key: string) => {
    console.log('Secondary menu clicked:', key)
    // Add your navigation logic here
  }

  const handleSearch = () => {
    console.log('Search triggered')
    // Open your search modal/command palette here
  }

  return (
    <DashboardLayout
      primaryMenuItems={menuItems}
      projectName="My Awesome App"
      organizationName="ACME Corporation"
      userName="John Doe"
      onPrimaryMenuClick={handlePrimaryClick}
      onSecondaryMenuClick={handleSecondaryClick}
      onSearch={handleSearch}
    >
      {/* Your actual page content goes here */}
      <ExamplePageContent />
    </DashboardLayout>
  )
}

// Example content component
function ExamplePageContent() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          This is an example of the standalone dashboard layout component
        </p>
      </div>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value="2,543"
          change="+12%"
          positive
        />
        <StatCard
          title="Active Sessions"
          value="1,234"
          change="+5%"
          positive
        />
        <StatCard
          title="Revenue"
          value="$12,345"
          change="-2%"
          positive={false}
        />
      </div>

      {/* Example table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium">
                        U{i}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">User {i}</div>
                        <div className="text-sm text-gray-500">user{i}@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Created a new project
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    2024-01-{20 - i}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Success
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Example stat card component
function StatCard({
  title,
  value,
  change,
  positive,
}: {
  title: string
  value: string
  change: string
  positive: boolean
}) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="text-sm font-medium text-gray-500 mb-1">{title}</div>
      <div className="flex items-baseline justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <span
          className={`text-sm font-medium ${
            positive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  )
}
