"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Search,
  Share2,
  ExternalLink,
  MessageCircle,
  Star,
  Lock,
  AlertCircle,
  LogIn,
} from "lucide-react"
import { hackathons, searchHackathons, type HackathonData } from "@/lib/hackathons-data"
import { getCurrentUser } from "@/lib/supabase"

export default function HackathonsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredHackathons, setFilteredHackathons] = useState<HackathonData[]>(hackathons)
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  useEffect(() => {
    let filtered = searchHackathons(searchQuery)

    if (selectedStatus !== "all") {
      filtered = filtered.filter((hackathon) => hackathon.status === selectedStatus)
    }

    setFilteredHackathons(filtered)
  }, [searchQuery, selectedStatus])

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser()
      setUser(currentUser)
    } catch (error) {
      console.error("Error checking user:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleShare = async (hackathon: HackathonData) => {
    const shareData = {
      title: hackathon.title,
      text: `Check out ${hackathon.title} - ${hackathon.description.substring(0, 100)}...`,
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`)
      alert("Link copied to clipboard!")
    }
  }

  const handleRegistration = (hackathon: HackathonData) => {
    if (!user) {
      alert("Please login to register for hackathons!")
      return
    }

    if (hackathon.registrationLink) {
      window.open(hackathon.registrationLink, "_blank")
    } else {
      alert("Registration link not available for this hackathon.")
    }
  }

  const handleWhatsAppJoin = (hackathon: HackathonData) => {
    if (!user) {
      alert("Please login to join WhatsApp groups!")
      return
    }

    if (hackathon.whatsappLink) {
      window.open(hackathon.whatsappLink, "_blank")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-500 text-white"
      case "ongoing":
        return "bg-green-500 text-white"
      case "completed":
        return "bg-gray-500 text-white"
      case "cancelled":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Hackathons & <span className="text-yellow-400">Competitions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the most exciting hackathons and coding competitions. Build innovative solutions, learn new
            technologies, and win amazing prizes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>$1M+ in prizes</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span>100K+ participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span>Year-round events</span>
            </div>
          </div>

          {!user && (
            <div className="mt-8 p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-lg max-w-md mx-auto">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <LogIn className="w-5 h-5" />
                <span className="font-semibold">Login Required</span>
              </div>
              <p className="text-sm text-gray-300">Please login to register for hackathons and join WhatsApp groups</p>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search hackathons by name, location, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-900 border-gray-700 text-white pl-10 focus:border-yellow-400"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-white rounded-md px-4 py-2 focus:border-yellow-400"
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Featured BNB Hackathons */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-8 h-8 text-yellow-400" />
            Featured BNB AI Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHackathons
              .filter((hackathon) => hackathon.featured)
              .map((hackathon) => (
                <Card
                  key={hackathon.id}
                  className="bg-black border-yellow-400 hover:border-yellow-300 transition-all duration-300 group ring-2 ring-yellow-400/50"
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={hackathon.image || "/placeholder.svg"}
                        alt={hackathon.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-yellow-400 text-black font-semibold">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                          {hackathon.title}
                        </CardTitle>
                        <Badge className={getStatusColor(hackathon.status)}>{hackathon.status}</Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(hackathon)}
                        className="text-gray-400 hover:text-yellow-400"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {hackathon.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span>
                          {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4 text-yellow-400" />
                        <span>{hackathon.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span>{hackathon.participants.toLocaleString()} participants</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-green-400 font-semibold">{hackathon.prizePool}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {hackathon.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {hackathon.technologies.length > 4 && (
                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                              +{hackathon.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Organizer</h4>
                        <p className="text-sm text-gray-400">{hackathon.organizer}</p>
                      </div>

                      {hackathon.partnerships.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-300 mb-1">Partners</h4>
                          <p className="text-sm text-gray-400">{hackathon.partnerships.join(", ")}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => handleRegistration(hackathon)}
                        disabled={!user}
                        className={`flex-1 ${
                          !user
                            ? "bg-gray-600 hover:bg-gray-600 text-gray-300 cursor-not-allowed"
                            : "bg-yellow-400 hover:bg-yellow-500 text-black"
                        }`}
                      >
                        {!user ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Login Required
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Register Now
                          </>
                        )}
                      </Button>

                      {hackathon.whatsappLink && (
                        <Button
                          onClick={() => handleWhatsAppJoin(hackathon)}
                          disabled={!user}
                          variant="outline"
                          className={`${
                            !user
                              ? "border-gray-600 text-gray-400 cursor-not-allowed"
                              : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                          }`}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Hackathons */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">All Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHackathons
              .filter((hackathon) => !hackathon.featured)
              .map((hackathon) => (
                <Card
                  key={hackathon.id}
                  className="bg-black border-gray-800 hover:border-yellow-400 transition-all duration-300 group"
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <img
                        src={hackathon.image || "/placeholder.svg"}
                        alt={hackathon.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2 group-hover:text-yellow-400 transition-colors">
                          {hackathon.title}
                        </CardTitle>
                        <Badge className={getStatusColor(hackathon.status)}>{hackathon.status}</Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(hackathon)}
                        className="text-gray-400 hover:text-yellow-400"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed">
                      {hackathon.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span>
                          {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="w-4 h-4 text-yellow-400" />
                        <span>{hackathon.location}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span>{hackathon.participants.toLocaleString()} participants</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-green-400 font-semibold">{hackathon.prizePool}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-1">
                          {hackathon.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-yellow-400 text-yellow-400 text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {hackathon.technologies.length > 4 && (
                            <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                              +{hackathon.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-1">Organizer</h4>
                        <p className="text-sm text-gray-400">{hackathon.organizer}</p>
                      </div>

                      {hackathon.partnerships.length > 0 && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-300 mb-1">Partners</h4>
                          <p className="text-sm text-gray-400">{hackathon.partnerships.join(", ")}</p>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => handleRegistration(hackathon)}
                        disabled={!user}
                        className={`flex-1 ${
                          !user
                            ? "bg-gray-600 hover:bg-gray-600 text-gray-300 cursor-not-allowed"
                            : "bg-yellow-400 hover:bg-yellow-500 text-black"
                        }`}
                      >
                        {!user ? (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Login Required
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Register Now
                          </>
                        )}
                      </Button>

                      {hackathon.whatsappLink && (
                        <Button
                          onClick={() => handleWhatsAppJoin(hackathon)}
                          disabled={!user}
                          variant="outline"
                          className={`${
                            !user
                              ? "border-gray-600 text-gray-400 cursor-not-allowed"
                              : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                          }`}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {filteredHackathons.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No hackathons found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Login Notice */}
        {!user && (
          <div className="mt-16 p-6 bg-gray-900 border border-gray-800 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Login Required for Registration</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To register for hackathons and join WhatsApp groups, please{" "}
                  <strong className="text-yellow-400">login to your account</strong>. All hackathons have active
                  registration links and WhatsApp communities for participants.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
