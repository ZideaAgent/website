import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - ZideaAI</title>
        <meta name="description" content="Terms of Service for ZideaAI social media automation platform." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-6">
              <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-500 mb-4">
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="mt-2 text-gray-600">
                Last updated: December 1, 2024
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using ZideaAI ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
              <p className="text-gray-700 mb-6">
                ZideaAI provides social media automation services including but not limited to automated messaging, comment replies, engagement automation, and analytics for Instagram and Facebook platforms. The Service is designed to help users manage their social media presence more efficiently.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">As a user of ZideaAI, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the terms of service of social media platforms</li>
                  <li>Not use the Service for spam, harassment, or illegal activities</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Provide accurate and up-to-date information</li>
                  <li>Not attempt to reverse engineer or compromise the Service</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Platform Compliance</h2>
              <p className="text-gray-700 mb-6">
                Users are responsible for ensuring their use of ZideaAI complies with the terms of service of Instagram, Facebook, and other social media platforms. ZideaAI is not responsible for any violations of platform terms that may result from the use of our Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">Payment terms include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>Prices may change with 30 days notice to existing customers</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Privacy and Data</h2>
              <p className="text-gray-700 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Service Availability</h2>
              <p className="text-gray-700 mb-6">
                While we strive to maintain high service availability, ZideaAI does not guarantee uninterrupted access to the Service. We reserve the right to modify, suspend, or discontinue the Service at any time with or without notice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                ZideaAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: legal@zideaai.com<br />
                  Address: 123 Tech Street, San Francisco, CA 94105
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
