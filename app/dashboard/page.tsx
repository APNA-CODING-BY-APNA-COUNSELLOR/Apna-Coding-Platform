"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { getCurrentUser, getUserProfile, getCourses, getHackathons, getJobs } from "@/lib/supabase"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, BookOpen, Calendar, Briefcase, Trophy, Clock, MapPin, Building, Star, Users, Edit } from "lucide-react"

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [userProfile, setUserProfile] = useState<any>(null)
  const [courses, setCourses] = useState<any[]>([])
  const [hackathons, setHackathons] = useState<any[]>([])
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      const currentUser = await getCurrentUser()
      if (!currentUser) {
        router.push("/")
        return
      }

      setUser(currentUser)

      // Get user profile
      const { data: profile } = await getUserProfile(currentUser.id)
      setUserProfile(profile)

      // Get latest data
      const [coursesData, hackathonsData, jobsData] = await Promise.all([getCourses(), getHackathons(), getJobs()])

      setCourses(coursesData.data?.slice(0, 3) || [])
      setHackathons(hackathonsData.data?.slice(0, 3) || [])
      setJobs(jobsData.data?.slice(0, 3) || [])
    } catch (error) {
      console.error("Error loading dashboard:", error)
    } finally {
      setLoading(false)
    }
  }

  const getProfileCompletionPercentage = () => {
    if (!userProfile) return 0
    let completed = 0
    const fields = ["full_name", "bio", "github_url", "linkedin_url", "skills"]

    fields.forEach((field) => {
      if (userProfile[field] && userProfile[field].length > 0) {
        completed++
      }
    })

    return Math.round((completed / fields.length) * 100)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  const profileCompletion = getProfileCompletionPercentage()

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {userProfile?.full_name || user?.email?.split("@")[0]}! 👋
              </h1>
              <p className="text-gray-400">Here's what's happening in your coding journey</p>
            </div>
            <Link href="/dashboard/profile">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Completion Alert */}
        {profileCompletion < 100 && (
          <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-yellow-400/30 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Complete Your Profile</h3>
                  <p className="text-gray-300 mb-3">
                    Your profile is {profileCompletion}% complete. Add more details to get better opportunities!
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${profileCompletion}%` }}
                    ></div>
                  </div>
                </div>
                <Link href="/dashboard/profile">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Complete Profile</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Available Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{courses.length}</div>
              <p className="text-xs text-gray-400">Ready to learn</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Hackathons</CardTitle>
              <Trophy className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{hackathons.length}</div>
              <p className="text-xs text-gray-400">Join and compete</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Job Opportunities</CardTitle>
              <Briefcase className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{jobs.length}</div>
              <p className="text-xs text-gray-400">Apply now</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Profile Score</CardTitle>
              <User className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{profileCompletion}%</div>
              <p className="text-xs text-gray-400">Complete your profile</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Courses */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <BookOpen className="w-5 h-5 text-yellow-400" />
                  Latest Courses
                </CardTitle>
                <Link href="/courses">
                  <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-yellow-400/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">{course.title}</h4>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                          {course.level}
                        </Badge>
                        <span className="text-xs text-gray-400">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">No courses available</p>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Hackathons */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Upcoming Hackathons
                </CardTitle>
                <Link href="/hackathons">
                  <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {hackathons.length > 0 ? (
                hackathons.map((hackathon) => (
                  <div
                    key={hackathon.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-yellow-400/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">{hackathon.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {new Date(hackathon.start_date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {hackathon.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Trophy className="w-3 h-3" />
                        {hackathon.prize_pool}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`mt-2 text-xs ${
                        hackathon.status === "upcoming"
                          ? "border-green-400 text-green-400"
                          : hackathon.status === "ongoing"
                            ? "border-yellow-400 text-yellow-400"
                            : "border-gray-400 text-gray-400"
                      }`}
                    >
                      {hackathon.status}
                    </Badge>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">No hackathons available</p>
              )}
            </CardContent>
          </Card>

          {/* Latest Jobs */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Briefcase className="w-5 h-5 text-yellow-400" />
                  Latest Jobs
                </CardTitle>
                <Link href="/jobs">
                  <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="border border-gray-800 rounded-lg p-4 hover:border-yellow-400/50 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2">{job.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Building className="w-3 h-3" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                        {job.experience}
                      </Badge>
                      <span className="text-xs text-green-400 font-medium">{job.salary}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-4">No jobs available</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/courses">
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Browse Courses</h3>
                  <p className="text-gray-400 text-sm">Explore our latest courses</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/hackathons">
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Join Hackathons</h3>
                  <p className="text-gray-400 text-sm">Participate in competitions</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/jobs">
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Briefcase className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Find Jobs</h3>
                  <p className="text-gray-400 text-sm">Discover opportunities</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/community">
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">Join Community</h3>
                  <p className="text-gray-400 text-sm">Connect with developers</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
