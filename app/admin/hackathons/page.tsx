"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getCurrentUser, isAdmin, getAllHackathons, deleteHackathon, type Hackathon } from "@/lib/supabase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users, Trophy, Edit, Trash2, Plus, Search, Shield } from "lucide-react"

export default function AdminHackathons() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [adminAccess, setAdminAccess] = useState(false)
  const [hackathons, setHackathons] = useState<Hackathon[]>([])
  const [filteredHackathons, setFilteredHackathons] = useState<Hackathon[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  useEffect(() => {
    checkAdminAccess()
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filtered = hackathons.filter(
        (hackathon) =>
          hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hackathon.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredHackathons(filtered)
    } else {
      setFilteredHackathons(hackathons)
    }
  }, [searchTerm, hackathons])

  const checkAdminAccess = async () => {
    try {
      const currentUser = await getCurrentUser()
      if (!currentUser || currentUser.email !== "sonishriyash@gmail.com") {
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
      await loadHackathons()
    } catch (error) {
      console.error("Error checking admin access:", error)
      router.push("/")
    } finally {
      setLoading(false)
    }
  }

  const loadHackathons = async () => {
    try {
      const { data, error } = await getAllHackathons()
      if (error) {
        console.error("Error loading hackathons:", error)
        return
      }
      setHackathons(data || [])
    } catch (error) {
      console.error("Error loading hackathons:", error)
    }
  }

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return
    }

    try {
      const { error } = await deleteHackathon(id)
      if (error) {
        alert("Error deleting hackathon: " + error.message)
        return
      }

      await loadHackathons()
      alert("Hackathon deleted successfully!")
    } catch (error) {
      console.error("Error deleting hackathon:", error)
      alert("Error deleting hackathon")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500"
      case "ongoing":
        return "bg-green-500"
      case "completed":
        return "bg-gray-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="text-white mt-4">Loading Hackathons...</p>
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
          <p className="text-gray-400">You don't have permission to access this page.</p>
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
                <Calendar className="w-8 h-8 text-yellow-400" />
                Manage Hackathons
              </h1>
              <p className="text-gray-400 mt-1">Create, edit, and manage hackathon events</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => router.push("/admin/hackathons/new")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Hackathon
              </Button>
              <Button
                onClick={() => router.push("/admin")}
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <Card className="bg-gray-900 border-gray-800 mb-6">
          <CardHeader>
            <CardTitle className="text-white">Search & Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search hackathons by title or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                {filteredHackathons.length} hackathons
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <Card key={hackathon.id} className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">{hackathon.title}</CardTitle>
                    <Badge className={`${getStatusColor(hackathon.status)} text-white mb-2`}>
                      {hackathon.status.charAt(0).toUpperCase() + hackathon.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-400 line-clamp-2">{hackathon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    {new Date(hackathon.start_date).toLocaleDateString()} -{" "}
                    {new Date(hackathon.end_date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    {hackathon.location}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                    {hackathon.prize_pool}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Users className="w-4 h-4 mr-2 text-yellow-400" />
                    {hackathon.participants_count} participants
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {hackathon.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {hackathon.technologies.length > 3 && (
                      <Badge variant="outline" className="border-gray-600 text-gray-300 text-xs">
                        +{hackathon.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-700 text-white hover:bg-gray-800 bg-transparent"
                      onClick={() => router.push(`/admin/hackathons/edit/${hackathon.id}`)}
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                      onClick={() => handleDelete(hackathon.id, hackathon.title)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHackathons.length === 0 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Hackathons Found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm
                  ? "No hackathons match your search criteria."
                  : "Get started by creating your first hackathon."}
              </p>
              <Button
                onClick={() => router.push("/admin/hackathons/new")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Hackathon
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
