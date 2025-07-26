"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, ExternalLink, Star, Zap, Code, Brain, Palette, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function AIToolsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Code Generation", "Design", "Writing", "Data Analysis", "Productivity"]

  const aiTools = [
    {
      id: 1,
      name: "GitHub Copilot",
      description: "AI-powered code completion and generation tool",
      category: "Code Generation",
      rating: 4.8,
      price: "Free/Paid",
      url: "https://github.com/features/copilot",
      icon: Code,
      features: ["Code completion", "Multi-language support", "Context-aware suggestions"],
    },
    {
      id: 2,
      name: "ChatGPT",
      description: "Conversational AI for coding help and problem solving",
      category: "Code Generation",
      rating: 4.9,
      price: "Free/Paid",
      url: "https://chat.openai.com",
      icon: Brain,
      features: ["Code explanation", "Debugging help", "Algorithm design"],
    },
    {
      id: 3,
      name: "Figma AI",
      description: "AI-powered design and prototyping tool",
      category: "Design",
      rating: 4.7,
      price: "Free/Paid",
      url: "https://figma.com",
      icon: Palette,
      features: ["Auto-layout", "Design systems", "Collaborative editing"],
    },
    {
      id: 4,
      name: "Cursor",
      description: "AI-first code editor built for productivity",
      category: "Code Generation",
      rating: 4.6,
      price: "Free/Paid",
      url: "https://cursor.sh",
      icon: Code,
      features: ["AI chat in editor", "Code generation", "Refactoring"],
    },
    {
      id: 5,
      name: "Replit AI",
      description: "AI coding assistant in the browser",
      category: "Code Generation",
      rating: 4.5,
      price: "Free/Paid",
      url: "https://replit.com",
      icon: Code,
      features: ["Online IDE", "Collaborative coding", "AI assistance"],
    },
    {
      id: 6,
      name: "Tableau AI",
      description: "AI-powered data visualization and analysis",
      category: "Data Analysis",
      rating: 4.4,
      price: "Paid",
      url: "https://tableau.com",
      icon: Database,
      features: ["Data visualization", "Predictive analytics", "Natural language queries"],
    },
  ]

  const filteredTools = aiTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen pt-20 bg-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-yellow-400">Tools</span> for Developers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the best AI-powered tools to supercharge your development workflow and boost productivity
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900 border-gray-700 text-white focus:border-yellow-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm">{tool.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-400 mb-4">{tool.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-400 text-sm font-medium">{tool.category}</span>
                    <span className="text-gray-300 text-sm">{tool.price}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                      Try Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tools found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 bg-gray-900/50 rounded-2xl p-12"
        >
          <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Boost Your <span className="text-yellow-400">Productivity</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to supercharge your development workflow? Join our community and discover more AI tools and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
              Join Community
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
              Suggest a Tool
              <Zap className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
