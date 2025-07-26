"use client"

import { motion } from "framer-motion"
import { FileText, Users, Shield, AlertTriangle } from "lucide-react"

export default function TermsPage() {
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
            <FileText className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-gray-300">Effective Date: July 2025</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of <span className="text-yellow-400">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Welcome to Apna Coding. By using our website and services, you agree to the following terms.
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
                  <Users className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">1. Eligibility</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>You must be 13+ to use our platform</li>
                    <li>You must use the platform in compliance with all laws</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">2. User Conduct</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Do not use the platform to harass, spam, or plagiarize content</li>
                    <li>Do not try to access restricted/admin areas without permission</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>All course content, graphics, and materials are owned by Apna Coding</li>
                    <li>You may not reproduce or sell materials without written permission</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">4. Account Termination</h2>
                </div>
                <div className="text-gray-300 space-y-4">
                  <p>We reserve the right to suspend or delete accounts for abuse or violation of terms</p>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                <p className="text-gray-300">
                  For any terms-related questions, contact:{" "}
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
