import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  UserPlusIcon,
  ClockIcon,
  EyeIcon,
  CalendarIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const timeRanges = [
  { label: 'Last 7 days', value: '7d' },
  { label: 'Last 30 days', value: '30d' },
  { label: 'Last 90 days', value: '90d' },
  { label: 'This year', value: '1y' },
]

const platforms = [
  { label: 'All Platforms', value: 'all' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Facebook', value: 'facebook' },
]

const campaigns = [
  { label: 'All Campaigns', value: 'all' },
  { label: 'Welcome Series', value: 'welcome' },
  { label: 'Auto Reply', value: 'auto-reply' },
  { label: 'Engagement Bot', value: 'engagement' },
]

// Mock data
const messageData = [
  { date: '2024-01-01', received: 45, sent: 38, engagement: 84 },
  { date: '2024-01-02', received: 52, sent: 48, engagement: 92 },
  { date: '2024-01-03', received: 38, sent: 35, engagement: 92 },
  { date: '2024-01-04', received: 61, sent: 58, engagement: 95 },
  { date: '2024-01-05', received: 47, sent: 44, engagement: 94 },
  { date: '2024-01-06', received: 55, sent: 52, engagement: 95 },
  { date: '2024-01-07', received: 42, sent: 40, engagement: 95 },
]

const campaignPerformance = [
  { name: 'Welcome Series', messages: 156, engagement: 92, conversion: 8.5 },
  { name: 'Auto Reply', messages: 234, engagement: 87, conversion: 6.2 },
  { name: 'Engagement Bot', messages: 89, engagement: 94, conversion: 12.1 },
  { name: 'Follow Back', messages: 67, engagement: 78, conversion: 4.8 },
]

const platformData = [
  { name: 'Instagram', value: 65, color: '#E1306C' },
  { name: 'Facebook', value: 35, color: '#1877F2' },
]

const topPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'Beautiful sunset from my recent trip to Bali...',
    likes: 1247,
    comments: 89,
    shares: 23,
    engagement: 8.2,
  },
  {
    id: 2,
    platform: 'Facebook',
    content: 'Excited to announce our new product launch!',
    likes: 892,
    comments: 156,
    shares: 67,
    engagement: 12.4,
  },
  {
    id: 3,
    platform: 'Instagram',
    content: 'Behind the scenes of our latest photoshoot',
    likes: 1567,
    comments: 134,
    shares: 45,
    engagement: 9.8,
  },
]

const responseTimeData = [
  { hour: '00', avgTime: 45 },
  { hour: '01', avgTime: 38 },
  { hour: '02', avgTime: 42 },
  { hour: '03', avgTime: 35 },
  { hour: '04', avgTime: 28 },
  { hour: '05', avgTime: 25 },
  { hour: '06', avgTime: 22 },
  { hour: '07', avgTime: 18 },
  { hour: '08', avgTime: 15 },
  { hour: '09', avgTime: 12 },
  { hour: '10', avgTime: 8 },
  { hour: '11', avgTime: 6 },
  { hour: '12', avgTime: 5 },
  { hour: '13', avgTime: 4 },
  { hour: '14', avgTime: 3 },
  { hour: '15', avgTime: 2 },
  { hour: '16', avgTime: 2 },
  { hour: '17', avgTime: 3 },
  { hour: '18', avgTime: 4 },
  { hour: '19', avgTime: 6 },
  { hour: '20', avgTime: 8 },
  { hour: '21', avgTime: 12 },
  { hour: '22', avgTime: 18 },
  { hour: '23', avgTime: 25 },
]

export default function Reports() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d')
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCampaign, setSelectedCampaign] = useState('all')

  const stats = [
    {
      name: 'Total Messages',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: 'Engagement Rate',
      value: '8.4%',
      change: '+2.1%',
      changeType: 'positive',
      icon: HeartIcon,
    },
    {
      name: 'New Followers',
      value: '234',
      change: '+18%',
      changeType: 'positive',
      icon: UserPlusIcon,
    },
    {
      name: 'Avg Response Time',
      value: '2.3m',
      change: '-15%',
      changeType: 'positive',
      icon: ClockIcon,
    },
  ]

  return (
    <>
      <Head>
        <title>Reports & Analytics - ZideaAI</title>
        <meta name="description" content="View detailed analytics and performance reports for your social media automation campaigns." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Track your automation performance and engagement metrics
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="btn-secondary">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    Export Report
                  </button>
                  <button className="btn-primary">
                    <ChartBarIcon className="w-4 h-4 mr-2" />
                    Schedule Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="card mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <FunnelIcon className="w-5 h-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="input-field w-40"
              >
                {timeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="input-field w-40"
              >
                {platforms.map((platform) => (
                  <option key={platform.value} value={platform.value}>
                    {platform.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="input-field w-40"
              >
                {campaigns.map((campaign) => (
                  <option key={campaign.value} value={campaign.value}>
                    {campaign.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-600" />
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
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.changeType === 'positive' ? (
                            <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
                          )}
                          {stat.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Message Volume Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-6">Message Volume</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={messageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="received"
                      stackId="1"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="sent"
                      stackId="1"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Platform Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-6">Platform Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {platformData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center space-x-6 mt-4">
                {platformData.map((platform) => (
                  <div key={platform.name} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="text-sm text-gray-600">{platform.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Campaign Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card mb-8"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">Campaign Performance</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={campaignPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="messages" fill="#3B82F6" />
                  <Bar dataKey="engagement" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Response Time Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card mb-8"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-6">Average Response Time by Hour</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="avgTime"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Top Performing Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">Top Performing Posts</h3>
              <button className="text-sm text-primary-600 hover:text-primary-500 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {topPosts.map((post, index) => (
                <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        <EyeIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {post.content}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          {post.platform}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <HeartIcon className="w-4 h-4 mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center">
                          <ChatBubbleLeftRightIcon className="w-4 h-4 mr-1" />
                          {post.comments}
                        </span>
                        <span className="flex items-center">
                          <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                          {post.shares}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {post.engagement}%
                    </div>
                    <div className="text-xs text-gray-500">Engagement</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
