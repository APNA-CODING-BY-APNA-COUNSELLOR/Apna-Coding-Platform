"use client"

import { useState } from "react"
import { X } from "lucide-react"
import LoginForm from "./login-form"
import SignupForm from "./signup-form"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export default function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  if (!isOpen) return null

  const handleSuccess = () => {
    onClose()
    if (onSuccess) {
      onSuccess()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-gray-900 border border-gray-800 rounded-lg shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">{activeTab === "login" ? "Sign In" : "Create Account"}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "login" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === "signup" ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "login" ? <LoginForm onSuccess={handleSuccess} /> : <SignupForm onSuccess={handleSuccess} />}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
              className="text-yellow-400 hover:text-yellow-300 font-medium"
            >
              {activeTab === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
