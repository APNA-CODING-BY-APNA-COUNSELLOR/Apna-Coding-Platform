"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gray-900/50 px-4 py-2 rounded-full mb-6 border border-gray-800">
            <Shield className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-gray-300">Last Updated: July 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-800 mb-8"
          >
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>
                    <strong className="text-yellow-400">Personal Information:</strong> Name, email address, profile
                    photo (optional), resume (for job board)
                  </p>
                  <p>
                    <strong className="text-yellow-400">Usage Data:</strong> Course progress, login history, IP address
                  </p>
                  <p>
                    <strong className="text-yellow-400">Analytics:</strong> Pages visited, device/browser type, etc.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">2. How We Use Your Data</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>To provide and improve platform features (courses, job board, events)</li>
                    <li>To send updates about hackathons, community news, or new courses</li>
                    <li>To respond to inquiries and provide support</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">3. Sharing and Storage</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>We do not sell or rent your personal information</li>
                    <li>Data is stored securely on cloud servers with encryption</li>
                    <li>Limited data may be shared with trusted services (e.g., analytics tools, email systems)</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">4. Your Rights</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Request data deletion by contacting:{" "}
                      <span className="text-yellow-400">apnacoding.tech@gmail.com</span>
                    </li>
                    <li>You can update preferences or unsubscribe anytime</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Cookie Policy</h2>
                <div className="text-gray-300 space-y-4">
                  <p>Apna Coding uses cookies to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Track login status</li>
                    <li>Remember user preferences</li>
                    <li>Analyze site traffic and behavior</li>
                  </ul>
                  <p>You can:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Disable cookies in your browser</li>
                    <li>Use incognito/private mode to limit cookie tracking</li>
                  </ul>
                  <p>
                    We use essential cookies and performance cookies only. No third-party ads or marketing cookies are
                    used.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">GDPR Compliance</h2>
                <div className="text-gray-300 space-y-4">
                  <p>If you are a resident of the EU:</p>
                  <p>We comply with the General Data Protection Regulation (GDPR). You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Access your data</li>
                    <li>Correct or delete your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                  </ul>
                  <p>
                    To exercise your GDPR rights, email:{" "}
                    <span className="text-yellow-400">apnacoding.tech@gmail.com</span>
                  </p>
                  <p>
                    Data is processed based on user consent and our legitimate educational interest. We ensure data
                    minimization, transparency, and secure storage.
                  </p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300">
                  For any policy-related questions, contact:{" "}
                  <span className="text-yellow-400">apnacoding.tech@gmail.com</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
