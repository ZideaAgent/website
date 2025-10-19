import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  PlusIcon,
  BellIcon,
  UserCircleIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Campaigns', href: '/campaigns', icon: RocketLaunchIcon, current: false },
  { name: 'Automations', href: '/automations', icon: Cog6ToothIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon, current: false },
  { name: 'Account', href: '/account', icon: UserCircleIcon, current: false },
]

const connectedAccounts = [
  {
    id: 1,
    platform: 'Instagram',
    username: '@sarahchen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    status: 'connected',
    followers: '12.5K',
    lastSync: '2 minutes ago',
  },
  {
    id: 2,
    platform: 'Facebook',
    username: 'Sarah Chen Photography',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    status: 'connected',
    followers: '8.2K',
    lastSync: '5 minutes ago',
  },
]

const stats = [
  { name: 'New Messages', value: '24', change: '+12%', changeType: 'positive' },
  { name: 'Auto Replies', value: '156', change: '+8%', changeType: 'positive' },
  { name: 'Engagement Rate', value: '4.2%', change: '+0.3%', changeType: 'positive' },
  { name: 'Active Campaigns', value: '3', change: '0%', changeType: 'neutral' },
]

const recentActivity = [
  {
    id: 1,
    type: 'message',
    message: 'New DM received from @johndoe',
    time: '2 minutes ago',
    icon: ChatBubbleLeftRightIcon,
    status: 'success',
  },
  {
    id: 2,
    type: 'campaign',
    message: 'Campaign "Welcome Series" completed',
    time: '15 minutes ago',
    icon: CheckCircleIcon,
    status: 'success',
  },
  {
    id: 3,
    type: 'warning',
    message: 'Instagram API rate limit approaching',
    time: '1 hour ago',
    icon: ExclamationTriangleIcon,
    status: 'warning',
  },
  {
    id: 4,
    type: 'engagement',
    message: 'Auto-reply sent to @mike_photography',
    time: '2 hours ago',
    icon: ArrowTrendingUpIcon,
    status: 'success',
  },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Dashboard - ZideaAI</title>
        <meta name="description" content="Manage your social media automation campaigns." />
      </Head>

      <div className="h-screen flex overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 flex z-40 md:hidden`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <h1 className="text-xl font-bold text-primary-600">ZideaAI</h1>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.current
                        ? 'bg-primary-100 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                  >
                    <item.icon className="mr-4 h-6 w-6" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <h1 className="text-xl font-bold text-primary-600">ZideaAI</h1>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${
                        item.current
                          ? 'bg-primary-100 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          {/* Top navigation */}
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
                <div className="w-full flex md:ml-0">
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent"
                      placeholder="Search campaigns, automations..."
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt=""
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">Mike Rodriguez</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Page header */}
                <div className="md:flex md:items-center md:justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Dashboard
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Welcome back! Here's what's happening with your campaigns.
                    </p>
                  </div>
                  <div className="mt-4 flex md:mt-0 md:ml-4">
                    <button className="btn-secondary">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      New Campaign
                    </button>
                    <button className="ml-3 btn-primary">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Connect Account
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="card"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                            <ArrowTrendingUpIcon className="w-5 h-5 text-primary-600" />
                          </div>
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {stat.name}
                            </dt>
                            <dd className="flex items-baseline">
                              <div className="text-2xl font-semibold text-gray-900">
                                {stat.value}
                              </div>
                              <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                                stat.changeType === 'positive' ? 'text-green-600' : 
                                stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                              }`}>
                                {stat.change}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Connected Accounts */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="card"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium text-gray-900">Connected Accounts</h3>
                      <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
                        Manage
                      </button>
                    </div>
                    <div className="space-y-4">
                      {connectedAccounts.map((account) => (
                        <div key={account.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <img
                              src={account.avatar}
                              alt={account.username}
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">
                                {account.username}
                              </div>
                              <div className="text-sm text-gray-500">
                                {account.platform} • {account.followers} followers
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center text-sm text-green-600">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                              Connected
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Recent Activity */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="card"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                      <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
                        View All
                      </button>
                    </div>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.status === 'success' ? 'bg-green-100' : 
                            activity.status === 'warning' ? 'bg-yellow-100' : 'bg-gray-100'
                          }`}>
                            <activity.icon className={`w-4 h-4 ${
                              activity.status === 'success' ? 'text-green-600' : 
                              activity.status === 'warning' ? 'text-yellow-600' : 'text-gray-600'
                            }`} />
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 card"
                >
                  <h3 className="text-lg font-medium text-gray-900 mb-6">Quick Actions</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/campaigns/new" className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <RocketLaunchIcon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">Create Campaign</div>
                          <div className="text-xs text-gray-500">Set up new automation</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/automations/new" className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                          <Cog6ToothIcon className="w-5 h-5 text-accent-600" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">Build Automation</div>
                          <div className="text-xs text-gray-500">Create custom flows</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/reports" className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <ChartBarIcon className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">View Reports</div>
                          <div className="text-xs text-gray-500">Analytics & insights</div>
                        </div>
                      </div>
                    </Link>
                    
                    <Link href="/account" className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <UserCircleIcon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">Account Settings</div>
                          <div className="text-xs text-gray-500">Manage your profile</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
