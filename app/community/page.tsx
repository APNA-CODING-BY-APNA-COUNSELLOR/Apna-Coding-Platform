"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const communityPlatforms = [
    {
      name: "Discord",
      description: "Join our main community hub for real-time discussions, coding help, and networking",
      icon: <MessageCircle className="w-8 h-8" />,
      members: "15,000+",
      link: "https://discord.gg/krffBfBF",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "WhatsApp",
      description: "Get instant updates, announcements, and quick community interactions",
      icon: <MessageCircle className="w-8 h-8" />,
      members: "8,000+",
      link: "https://chat.whatsapp.com/HqVg4ctR6QKJnfvemsEQ8H?mode=ac_t",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "GitHub",
      description: "Collaborate on open-source projects, share code, and contribute to the community",
      icon: <Github className="w-8 h-8" />,
      members: "5,000+",
      link: "https://github.com/APNA-CODING-BY-APNA-COUNSELLOR",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Slack",
      description: "Professional networking, career discussions, and industry insights",
      icon: <MessageCircle className="w-8 h-8" />,
      members: "3,000+",
      link: "https://join.slack.com/t/apna-coding/shared_invite/zt-38medu00n-AEx8~VnvUZxQgeC4sr55eQ",
      color: "from-pink-500 to-rose-600",
    },
  ]

  const communityFeatures = [
    {
      title: "24/7 Support",
      description: "Get help anytime from our active community members and mentors",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Code Reviews",
      description: "Share your projects and get constructive feedback from experienced developers",
      icon: <Github className="w-6 h-6" />,
    },
    {
      title: "Study Groups",
      description: "Join study groups for different technologies and learn together",
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: "Career Guidance",
      description: "Get career advice, interview tips, and job referrals from industry professionals",
      icon: <MessageCircle className="w-6 h-6" />,
    },
  ]

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
            <Users className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-gray-300">20,000+ Active Members</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-yellow-400">Community</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded developers, share knowledge, get help, and grow together in our vibrant global
            coding community.
          </p>
        </motion.div>

        {/* Community Platforms */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Choose Your Platform
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityPlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group"
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full overflow-hidden hover:border-yellow-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <div className="text-black">{platform.icon}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{platform.members}</div>
                        <div className="text-gray-400 text-sm">Members</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {platform.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">{platform.description}</p>
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full"
                      onClick={() => window.open(platform.link, "_blank")}
                    >
                      Join {platform.name}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Features */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            What You'll Get
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full text-center hover:border-yellow-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <div className="text-black">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gray-900/50 rounded-3xl p-12 border border-gray-800">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Community <span className="text-yellow-400">Guidelines</span>
              </h2>
              <p className="text-xl text-gray-300">
                Help us maintain a positive and inclusive environment for everyone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">✅ Do's</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                    Be respectful and kind to all members
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                    Share knowledge and help others learn
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                    Use appropriate channels for different topics
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                    Search before asking questions
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2" />
                    Provide context when asking for help
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">❌ Don'ts</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                    No spam, self-promotion, or off-topic content
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                    No harassment, discrimination, or hate speech
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                    Don't share pirated content or illegal materials
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                    Avoid excessive tagging or direct messages
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2" />
                    Don't ask for homework or assignment solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-900/50 rounded-3xl p-12 border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey with thousands of developers who are learning, building, and growing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4"
                onClick={() => window.open("https://discord.gg/krffBfBF", "_blank")}
              >
                Join Discord Community
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button
                className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4"
                onClick={() => window.open("https://chat.whatsapp.com/HqVg4ctR6QKJnfvemsEQ8H?mode=ac_t", "_blank")}
              >
                Join WhatsApp Group
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
