import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  PlayIcon,
  CheckIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Auto-Reply Messages',
    description: 'Set up intelligent auto-replies for DMs and comments with AI-powered responses that feel natural and engaging.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Smart Engagement',
    description: 'Automatically engage with your audience through comments, likes, and follows based on customizable triggers.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Platform Integration',
    description: 'Seamlessly connect Instagram and Facebook Pages with secure OAuth integration and real-time sync.',
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Insights',
    description: 'Track engagement metrics, response rates, and campaign performance with detailed analytics dashboard.',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Content Creator',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
    content: 'ZideaAI has transformed how I manage my Instagram. I can focus on creating content while it handles all my DMs automatically.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Social Media Manager',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    content: 'Managing multiple client accounts is now effortless. The automation flows are incredibly intuitive and save me hours daily.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Agency Owner',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    content: 'Our client engagement rates increased by 300% since implementing ZideaAI. The ROI is incredible.',
    rating: 5,
  },
]

const stats = [
  { label: 'Active Users', value: '10,000+' },
  { label: 'Messages Automated', value: '1M+' },
  { label: 'Platforms Supported', value: '2' },
  { label: 'Uptime', value: '99.9%' },
]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>ZideaAI - Automate Your Social Media Messaging</title>
        <meta name="description" content="Automate Instagram and Facebook messaging with AI-powered flows. Perfect for creators, agencies, and social media managers." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-primary-600">ZideaAI</h1>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <Link href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Pricing
                  </Link>
                  <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Testimonials
                  </Link>
                  <Link href="/login" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                    Login
                  </Link>
                  <Link href="/signup" className="btn-primary">
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <Link href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Features
                </Link>
                <Link href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
                <Link href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Testimonials
                </Link>
                <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link href="/signup" className="block px-3 py-2 text-base font-medium text-primary-600 hover:text-primary-700">
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="gradient-bg py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Automate Your
                  <span className="text-primary-600"> Social Media</span>
                  <br />
                  Messaging
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Stop spending hours on repetitive DMs and comments. ZideaAI automates your Instagram and Facebook messaging 
                  with intelligent AI-powered flows that engage your audience 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/signup" className="btn-primary text-lg px-8 py-3 inline-flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <button className="btn-secondary text-lg px-8 py-3 inline-flex items-center">
                    <PlayIcon className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
              </motion.div>

              {/* Hero Image/Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-16"
              >
                <div className="relative max-w-5xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                    <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary-600" />
                        </div>
                        <p className="text-gray-500">Dashboard Preview</p>
                        <p className="text-sm text-gray-400 mt-2">Your automation dashboard will appear here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Modern Creators
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate your social media presence and focus on what matters most - creating amazing content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Creators Worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See what our users are saying about ZideaAI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of creators who are already saving hours every day with ZideaAI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary text-lg px-8 py-3">
                Start Your Free Trial
              </Link>
              <Link href="#pricing" className="btn-secondary text-lg px-8 py-3">
                View Pricing
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-4">ZideaAI</h3>
                <p className="text-gray-400">
                  Automate your social media messaging with AI-powered flows.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/support" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 ZideaAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
