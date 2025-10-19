import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  UserPlusIcon,
  ClockIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

const steps = [
  { id: 1, name: 'Account', description: 'Select platform' },
  { id: 2, name: 'Type', description: 'Choose automation' },
  { id: 3, name: 'Content', description: 'Set up messages' },
  { id: 4, name: 'Schedule', description: 'Configure timing' },
  { id: 5, name: 'Review', description: 'Launch campaign' },
]

const automationTypes = [
  {
    id: 'auto-reply',
    name: 'Auto Reply',
    description: 'Automatically respond to DMs and comments',
    icon: ChatBubbleLeftRightIcon,
    features: ['Keyword triggers', 'Custom responses', 'Smart routing'],
  },
  {
    id: 'engagement',
    name: 'Engagement Bot',
    description: 'Like, comment, and follow based on criteria',
    icon: HeartIcon,
    features: ['Hashtag targeting', 'Location-based', 'User criteria'],
  },
  {
    id: 'follow-back',
    name: 'Follow Back',
    description: 'Automatically follow back new followers',
    icon: UserPlusIcon,
    features: ['Instant follow-back', 'Smart filtering', 'Rate limiting'],
  },
  {
    id: 'welcome-series',
    name: 'Welcome Series',
    description: 'Send a sequence of messages to new followers',
    icon: ClockIcon,
    features: ['Multi-step sequence', 'Delayed sending', 'Personalization'],
  },
]

const connectedAccounts = [
  {
    id: 1,
    platform: 'Instagram',
    username: '@sarahchen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    followers: '12.5K',
    status: 'connected',
  },
  {
    id: 2,
    platform: 'Facebook',
    username: 'Sarah Chen Photography',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
    followers: '8.2K',
    status: 'connected',
  },
]

export default function CampaignWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    accountId: '',
    automationType: '',
    campaignName: '',
    message: '',
    keywords: '',
    schedule: 'immediate',
    scheduleDate: '',
    scheduleTime: '',
    isEnabled: true,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      toast.success('Campaign created successfully!')
      setIsLoading(false)
      // Redirect to campaigns page
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Select Account</h3>
              <div className="grid gap-4">
                {connectedAccounts.map((account) => (
                  <label
                    key={account.id}
                    className={`relative flex items-center p-4 border rounded-lg cursor-pointer hover:border-primary-300 ${
                      formData.accountId === account.id.toString()
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="accountId"
                      value={account.id}
                      checked={formData.accountId === account.id.toString()}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <img
                      src={account.avatar}
                      alt={account.username}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {account.username}
                          </div>
                          <div className="text-sm text-gray-500">
                            {account.platform} • {account.followers} followers
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-green-600">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Connected
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Choose Automation Type</h3>
              <div className="grid gap-4">
                {automationTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`relative flex items-start p-4 border rounded-lg cursor-pointer hover:border-primary-300 ${
                      formData.automationType === type.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="automationType"
                      value={type.id}
                      checked={formData.automationType === type.id}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <type.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {type.name}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        {type.description}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {type.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Name
              </label>
              <input
                type="text"
                name="campaignName"
                id="campaignName"
                value={formData.campaignName}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter campaign name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message Template
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter your message template. Use {{name}} for personalization."
              />
              <p className="mt-2 text-sm text-gray-500">
                Use variables like {{name}}, {{username}}, {{platform}} for personalization
              </p>
            </div>

            <div>
              <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-2">
                Trigger Keywords (Optional)
              </label>
              <input
                type="text"
                name="keywords"
                id="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                className="input-field"
                placeholder="hello, hi, help (comma separated)"
              />
              <p className="mt-2 text-sm text-gray-500">
                Messages containing these keywords will trigger the automation
              </p>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Schedule</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="immediate"
                      checked={formData.schedule === 'immediate'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Start immediately</span>
                  </label>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="schedule"
                      value="scheduled"
                      checked={formData.schedule === 'scheduled'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">Schedule for later</span>
                  </label>
                </div>
              </div>
            </div>

            {formData.schedule === 'scheduled' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="scheduleDate"
                    id="scheduleDate"
                    value={formData.scheduleDate}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
                <div>
                  <label htmlFor="scheduleTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="scheduleTime"
                    id="scheduleTime"
                    value={formData.scheduleTime}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                </div>
              </div>
            )}

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isEnabled"
                id="isEnabled"
                checked={formData.isEnabled}
                onChange={handleInputChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="isEnabled" className="ml-2 block text-sm text-gray-700">
                Enable campaign immediately after creation
              </label>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Campaign Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Account:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {connectedAccounts.find(acc => acc.id.toString() === formData.accountId)?.username}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Type:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {automationTypes.find(type => type.id === formData.automationType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Name:</span>
                  <span className="text-sm font-medium text-gray-900">{formData.campaignName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Schedule:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formData.schedule === 'immediate' ? 'Immediate' : `${formData.scheduleDate} at ${formData.scheduleTime}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formData.isEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Message Preview:</h4>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-900">{formData.message}</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      <Head>
        <title>Create Campaign - ZideaAI</title>
        <meta name="description" content="Create a new automation campaign for your social media accounts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/dashboard" className="text-primary-600 hover:text-primary-500">
                  <ArrowLeftIcon className="w-5 h-5" />
                </Link>
                <h1 className="ml-4 text-2xl font-bold text-gray-900">Create Campaign</h1>
              </div>
              <div className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        currentStep >= step.id
                          ? 'bg-primary-600 border-primary-600 text-white'
                          : 'border-gray-300 text-gray-500'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckIcon className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-medium">{step.id}</span>
                      )}
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-medium ${
                        currentStep >= step.id ? 'text-primary-600' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </div>
                      <div className="text-xs text-gray-500">{step.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                      currentStep > step.id ? 'bg-primary-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="card">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Previous
              </button>

              {currentStep < steps.length ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !formData.accountId) ||
                    (currentStep === 2 && !formData.automationType) ||
                    (currentStep === 3 && (!formData.campaignName || !formData.message))
                  }
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating...
                    </>
                  ) : (
                    <>
                      <RocketLaunchIcon className="w-4 h-4 mr-2" />
                      Launch Campaign
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
