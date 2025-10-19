import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - ZideaAI</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="mx-auto w-64 h-64 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                <div className="text-8xl font-bold text-primary-600">404</div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Oops! Page Not Found
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <p className="text-gray-500">
                Don't worry, let's get you back on track!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary inline-flex items-center justify-center">
                <HomeIcon className="w-5 h-5 mr-2" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary inline-flex items-center justify-center"
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Maybe you were looking for:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Link
                  href="/dashboard"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-900">Dashboard</div>
                  <div className="text-xs text-gray-500">Manage your campaigns</div>
                </Link>
                <Link
                  href="/campaigns/new"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-900">Create Campaign</div>
                  <div className="text-xs text-gray-500">Start automating</div>
                </Link>
                <Link
                  href="/reports"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-900">Reports</div>
                  <div className="text-xs text-gray-500">View analytics</div>
                </Link>
                <Link
                  href="/support"
                  className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <div className="text-sm font-medium text-gray-900">Support</div>
                  <div className="text-xs text-gray-500">Get help</div>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 mb-2">
                Still can't find what you're looking for?
              </p>
              <Link
                href="/support"
                className="text-primary-600 hover:text-primary-500 font-medium"
              >
                Contact our support team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
