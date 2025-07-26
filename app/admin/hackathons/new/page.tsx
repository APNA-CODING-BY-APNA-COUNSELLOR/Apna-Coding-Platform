"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save, Plus, X } from "lucide-react"
import { createHackathon } from "@/lib/supabase"

export default function NewHackathon() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [technologies, setTechnologies] = useState<string[]>([])
  const [newTech, setNewTech] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    start_date: "",
    end_date: "",
    registration_deadline: "",
    location: "",
    prize_pool: "",
    participants_count: 0,
    status: "upcoming" as "upcoming" | "ongoing" | "completed" | "cancelled",
    registration_open: true,
    registration_link: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? Number.parseInt(value) || 0
          : type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : value,
    }))
  }

  const addTechnology = () => {
    if (newTech.trim() && !technologies.includes(newTech.trim())) {
      setTechnologies([...technologies, newTech.trim()])
      setNewTech("")
    }
  }

  const removeTechnology = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const hackathonData = {
        ...formData,
        technologies,
      }

      const { error } = await createHackathon(hackathonData)

      if (error) {
        console.error("Error creating hackathon:", error)
        alert("Failed to create hackathon. Please try again.")
        return
      }

      alert("Hackathon created successfully!")
      router.push("/admin/hackathons")
    } catch (error) {
      console.error("Error creating hackathon:", error)
      alert("Failed to create hackathon. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Button
            onClick={() => router.push("/admin/hackathons")}
            variant="outline"
            size="sm"
            className="border-gray-700 text-white hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Hackathons
          </Button>
          <div>
            <h1 className="text-4xl font-bold">Create New Hackathon</h1>
            <p className="text-gray-400">Add a new hackathon event to the platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Hackathon Details</CardTitle>
              <CardDescription className="text-gray-400">
                Fill in the information for the new hackathon event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title" className="text-white">
                    Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    placeholder="Enter hackathon title"
                  />
                </div>

                <div>
                  <Label htmlFor="location" className="text-white">
                    Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    placeholder="e.g., Mumbai, India"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-white">
                  Description *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  placeholder="Describe the hackathon..."
                />
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="start_date" className="text-white">
                    Start Date *
                  </Label>
                  <Input
                    id="start_date"
                    name="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={handleInputChange}
                    required
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  />
                </div>

                <div>
                  <Label htmlFor="end_date" className="text-white">
                    End Date *
                  </Label>
                  <Input
                    id="end_date"
                    name="end_date"
                    type="date"
                    value={formData.end_date}
                    onChange={handleInputChange}
                    required
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  />
                </div>

                <div>
                  <Label htmlFor="registration_deadline" className="text-white">
                    Registration Deadline
                  </Label>
                  <Input
                    id="registration_deadline"
                    name="registration_deadline"
                    type="date"
                    value={formData.registration_deadline}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  />
                </div>
              </div>

              {/* Prize and Participants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="prize_pool" className="text-white">
                    Prize Pool *
                  </Label>
                  <Input
                    id="prize_pool"
                    name="prize_pool"
                    value={formData.prize_pool}
                    onChange={handleInputChange}
                    required
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    placeholder="e.g., $100K+"
                  />
                </div>

                <div>
                  <Label htmlFor="participants_count" className="text-white">
                    Expected Participants
                  </Label>
                  <Input
                    id="participants_count"
                    name="participants_count"
                    type="number"
                    value={formData.participants_count}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Status and Registration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="status" className="text-white">
                    Status *
                  </Label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-black border border-gray-700 text-white rounded-md px-3 py-2 focus:border-yellow-400"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="registration_link" className="text-white">
                    Registration Link
                  </Label>
                  <Input
                    id="registration_link"
                    name="registration_link"
                    type="url"
                    value={formData.registration_link}
                    onChange={handleInputChange}
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    placeholder="https://..."
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <Label htmlFor="image_url" className="text-white">
                  Image URL
                </Label>
                <Input
                  id="image_url"
                  name="image_url"
                  type="url"
                  value={formData.image_url}
                  onChange={handleInputChange}
                  className="bg-black border-gray-700 text-white focus:border-yellow-400"
                  placeholder="https://..."
                />
              </div>

              {/* Technologies */}
              <div>
                <Label className="text-white">Technologies</Label>
                <div className="flex gap-2 mb-3">
                  <Input
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    placeholder="Add technology"
                    className="bg-black border-gray-700 text-white focus:border-yellow-400"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                  />
                  <Button
                    type="button"
                    onClick={addTechnology}
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-yellow-400 text-black px-2 py-1 rounded text-sm"
                    >
                      {tech}
                      <button type="button" onClick={() => removeTechnology(tech)} className="ml-1">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <Button type="submit" disabled={loading} className="bg-yellow-400 hover:bg-yellow-500 text-black px-8">
                  <Save className="w-4 h-4 mr-2" />
                  {loading ? "Creating..." : "Create Hackathon"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}
