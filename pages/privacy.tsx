import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - ZideaAI</title>
        <meta name="description" content="Privacy Policy for ZideaAI social media automation platform." />
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
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create an account or update your profile</li>
                  <li>Connect your social media accounts</li>
                  <li>Use our automation features</li>
                  <li>Contact us for support</li>
                  <li>Subscribe to our newsletter</li>
                </ul>
                <p className="mt-4">This information may include your name, email address, social media account information, and any content you choose to automate.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage and trends</li>
                  <li>Personalize your experience</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Social Media Data</h2>
              <p className="text-gray-700 mb-6">
                When you connect your social media accounts, we access and store information necessary to provide our automation services. This includes your profile information, posts, messages, and engagement data. We only access data that you explicitly authorize and only use it to provide the services you've requested.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We retain your information for as long as your account is active or as needed to provide you services. We may retain certain information for longer periods as required by law or for legitimate business purposes such as fraud prevention.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your Rights</h2>
              <div className="text-gray-700 mb-6">
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your account and data</li>
                  <li>Export your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Third-Party Services</h2>
              <p className="text-gray-700 mb-6">
                Our service integrates with third-party platforms like Instagram and Facebook. These platforms have their own privacy policies, and we encourage you to review them. We are not responsible for the privacy practices of these third-party services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. International Transfers</h2>
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to This Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Email: privacy@zideaai.com<br />
                  Address: 123 Tech Street, San Francisco, CA 94105<br />
                  Phone: (555) 123-4567
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
