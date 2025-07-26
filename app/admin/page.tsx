"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, isAdmin } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Calendar,
  Briefcase,
  BookOpen,
  Settings,
  Plus,
  Shield,
  BarChart3,
  Mail,
  ExternalLink,
} from "lucide-react"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [adminAccess, setAdminAccess] = useState(false)
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeHackathons: 0,
    jobListings: 0,
    courses: 0,
  })
  const router = useRouter()

  useEffect(() => {
    checkAdminAccess()
  }, [])

  const checkAdminAccess = async () => {
    try {
      const currentUser = await getCurrentUser()
      if (!currentUser) {
        router.push("/")
        return
      }

      // Strict check - only allow sonishriyash@gmail.com
      if (currentUser.email !== "sonishriyash@gmail.com") {
        router.push("/")
        return
      }

      const hasAdminAccess = await isAdmin(currentUser.email)
      if (!hasAdminAccess) {
        router.push("/")
        return
      }

      setUser(currentUser)
      setAdminAccess(true)

      // Load dashboard stats
      await loadStats()
    } catch (error) {
      console.error("Error checking admin access:", error)
      router.push("/")
    } finally {
      setLoading(false)
    }
  }

  const loadStats = async () => {
    try {
      // These would be real API calls in production
      setStats({
        totalUsers: 1234,
        activeHackathons: 12,
        jobListings: 89,
        courses: 45,
      })
    } catch (error) {
      console.error("Error loading stats:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="text-white mt-4">Loading Admin Dashboard...</p>
        </div>
      </div>
    )
  }

  if (!adminAccess || user?.email !== "sonishriyash@gmail.com") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-red-400 mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-4">You don't have permission to access this admin portal.</p>
          <p className="text-gray-500 text-sm">Only authorized administrators can access this area.</p>
          <Button onClick={() => router.push("/")} className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black">
            Return to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                <Shield className="w-8 h-8 text-yellow-400" />
                Admin Dashboard
              </h1>
              <p className="text-gray-400 mt-1">Welcome back, {user?.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">Super Admin</div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Full Access</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Website
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Admin Access Notice */}
        <div className="mb-8 p-6 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/20 rounded-lg">
          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-yellow-400 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Admin Portal Access</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                This admin portal is exclusively accessible to{" "}
                <strong className="text-yellow-400">sonishriyash@gmail.com</strong>. You have full administrative
                privileges to manage all platform content, users, and settings.
              </p>
              <div className="text-xs text-gray-400">
                Admin Portal URL: <code className="bg-gray-800 px-2 py-1 rounded text-yellow-400">/admin</code>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Users</CardTitle>
              <Users className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-green-400">+20.1% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Hackathons</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.activeHackathons}</div>
              <p className="text-xs text-green-400">+2 new this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Job Listings</CardTitle>
              <Briefcase className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.jobListings}</div>
              <p className="text-xs text-green-400">+12 new this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stats.courses}</div>
              <p className="text-xs text-green-400">+5 new this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <Calendar className="h-5 w-5 text-yellow-400" />
                Manage Hackathons
              </CardTitle>
              <CardDescription className="text-gray-400">Create, edit, and manage hackathon events</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/hackathons")}
              >
                Manage Hackathons
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <Briefcase className="h-5 w-5 text-yellow-400" />
                Manage Jobs
              </CardTitle>
              <CardDescription className="text-gray-400">Post and manage job listings and internships</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/jobs")}
              >
                Manage Jobs
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <BookOpen className="h-5 w-5 text-yellow-400" />
                Manage Courses
              </CardTitle>
              <CardDescription className="text-gray-400">Add and update course content</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/courses")}
              >
                Manage Courses
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <Users className="h-5 w-5 text-yellow-400" />
                User Management
              </CardTitle>
              <CardDescription className="text-gray-400">View and manage user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/users")}
              >
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <BarChart3 className="h-5 w-5 text-yellow-400" />
                Analytics
              </CardTitle>
              <CardDescription className="text-gray-400">View detailed platform analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/analytics")}
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white group-hover:text-yellow-400 transition-colors">
                <Settings className="h-5 w-5 text-yellow-400" />
                Site Settings
              </CardTitle>
              <CardDescription className="text-gray-400">Configure site settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                onClick={() => router.push("/admin/settings")}
              >
                Site Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Create Actions */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Plus className="h-5 w-5 text-yellow-400" />
              Quick Actions
            </CardTitle>
            <CardDescription className="text-gray-400">Perform common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                onClick={() => router.push("/admin/hackathons/new")}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Hackathon
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                onClick={() => router.push("/admin/jobs/new")}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Job Posting
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                onClick={() => router.push("/admin/courses/new")}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Course
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
