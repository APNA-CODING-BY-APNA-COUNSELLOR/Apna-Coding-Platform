"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, User, LogOut, Settings, Shield, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import AuthModal from "@/components/auth/auth-modal"
import { getCurrentUser, signOut, getUserProfile, type User as UserType } from "@/lib/supabase"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup">("login")
  const [user, setUser] = useState<any>(null)
  const [userProfile, setUserProfile] = useState<UserType | null>(null)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)

      if (currentUser) {
        const { data: profile } = await getUserProfile(currentUser.id)
        setUserProfile(profile)
      }
    } catch (error) {
      console.error("Error checking user:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAuthSuccess = () => {
    setShowAuthModal(false)
    checkUser()
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setUser(null)
      setUserProfile(null)
      setShowUserMenu(false)
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Jobs", href: "/jobs" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Community", href: "/community" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Apna Coding" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-white">Apna Coding</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {loading ? (
                <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse" />
              ) : user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors"
                  >
                    {userProfile?.avatar_url ? (
                      <Image
                        src={userProfile.avatar_url || "/placeholder.svg"}
                        alt={userProfile.full_name || "User"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-black" />
                      </div>
                    )}
                    <div className="text-left">
                      <div className="text-white text-sm font-medium flex items-center">
                        {userProfile?.full_name || user.email?.split("@")[0]}
                        {userProfile?.role === "admin" && <Shield className="w-3 h-3 text-yellow-400 ml-1" />}
                      </div>
                      {userProfile?.role === "admin" && <div className="text-yellow-400 text-xs">Admin</div>}
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-2"
                      >
                        <Link
                          href="/dashboard"
                          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                          onClick={() => setShowUserMenu(false)}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Profile Settings
                        </Link>
                        {userProfile?.role === "admin" && (
                          <Link
                            href="/admin"
                            className="flex items-center px-4 py-2 text-yellow-400 hover:bg-gray-800"
                            onClick={() => setShowUserMenu(false)}
                          >
                            <Shield className="w-4 h-4 mr-2" />
                            Admin Panel
                          </Link>
                        )}
                        <hr className="border-gray-700 my-2" />
                        <button
                          onClick={handleSignOut}
                          className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Button
                    variant="ghost"
                    onClick={() => openAuthModal("login")}
                    className="text-gray-300 hover:text-white"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => openAuthModal("signup")}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-800 py-4"
              >
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {user ? (
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex items-center space-x-2 mb-4">
                        {userProfile?.avatar_url ? (
                          <Image
                            src={userProfile.avatar_url || "/placeholder.svg"}
                            alt={userProfile.full_name || "User"}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-black" />
                          </div>
                        )}
                        <div>
                          <div className="text-white text-sm font-medium flex items-center">
                            {userProfile?.full_name || user.email?.split("@")[0]}
                            {userProfile?.role === "admin" && <Shield className="w-3 h-3 text-yellow-400 ml-1" />}
                          </div>
                          {userProfile?.role === "admin" && <div className="text-yellow-400 text-xs">Admin</div>}
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Link
                          href="/dashboard"
                          className="flex items-center text-gray-300 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Dashboard
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          className="flex items-center text-gray-300 hover:text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          <Settings className="w-4 h-4 mr-2" />
                          Profile Settings
                        </Link>
                        {userProfile?.role === "admin" && (
                          <Link
                            href="/admin"
                            className="flex items-center text-yellow-400"
                            onClick={() => setIsOpen(false)}
                          >
                            <Shield className="w-4 h-4 mr-2" />
                            Admin Panel
                          </Link>
                        )}
                        <button
                          onClick={() => {
                            handleSignOut()
                            setIsOpen(false)
                          }}
                          className="flex items-center text-gray-300 hover:text-white"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3 pt-4 border-t border-gray-800">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          openAuthModal("login")
                          setIsOpen(false)
                        }}
                        className="text-gray-300 hover:text-white justify-start"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => {
                          openAuthModal("signup")
                          setIsOpen(false)
                        }}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold justify-start"
                      >
                        Sign Up
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onSuccess={handleAuthSuccess}
      />
    </>
  )
}
