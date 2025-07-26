"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ExternalLink, Github, MessageCircle } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Jobs", href: "/jobs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const communityLinks = [
    { name: "Discord", href: "https://discord.gg/krffBfBF", icon: <MessageCircle className="w-4 h-4" /> },
    {
      name: "WhatsApp",
      href: "https://chat.whatsapp.com/HqVg4ctR6QKJnfvemsEQ8H?mode=ac_t",
      icon: <MessageCircle className="w-4 h-4" />,
    },
    { name: "GitHub", href: "https://github.com/APNA-CODING-BY-APNA-COUNSELLOR", icon: <Github className="w-4 h-4" /> },
    {
      name: "Slack",
      href: "https://join.slack.com/t/apna-coding/shared_invite/zt-38medu00n-AEx8~VnvUZxQgeC4sr55eQ",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ]

  const partnershipLinks = [
    { name: "Become a Partner", href: "/partnerships" },
    { name: "College Clubs", href: "/partnerships#college-clubs" },
    { name: "Corporate Partnership", href: "/partnerships#corporate" },
    { name: "Join Our Team", href: "https://forms.gle/S3MWV7rKR69yNv296" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/privacy#cookies" },
  ]

  const industryPartners = [
    { name: "GitHub", logo: "/images/partners/github.png" },
    { name: "NVIDIA", logo: "/images/partners/nvidia-new.png" },
    { name: "Microsoft", logo: "/images/partners/microsoft-new.webp" },
    { name: "IIT Bombay E-Cell", logo: "/images/partners/iit-bombay-ecell.png" },
    { name: "IIT Kharagpur E-Cell", logo: "/images/partners/iit-kharagpur-ecell.png" },
    { name: "IIT Hyderabad E-Cell", logo: "/images/partners/iit-hyderabad-ecell.png" },
    { name: "Dell", logo: "/images/partners/dell-small-business.png" },
    { name: "AWS", logo: "/images/partners/aws-new.webp" },
    { name: "MIT Orbit", logo: "/images/partners/mit-orbit.png" },
  ]

  return (
    <footer className="bg-gray-900/30 backdrop-blur-sm border-t border-gray-700/50 mt-20 relative">
      <div className="container mx-auto px-4 py-16">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trusted by <span className="text-yellow-400">Industry Leaders</span>
            </h3>
            <p className="text-gray-300">Our partners help us provide the best opportunities for our community</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 items-center">
            {industryPartners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-3 bg-white rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="Apna Coding" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold text-white">Apna Coding</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering the next generation of developers through innovative learning, community building, and
              real-world opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 text-yellow-400 mr-3" />
                <span>apnacoding.tech@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 text-yellow-400 mr-3" />
                <span>+91 8989976990</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 text-yellow-400 mr-3" />
                <span>Jabalpur, MP 482001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partnerships & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Partnerships</h4>
            <ul className="space-y-2 mb-6">
              {partnershipLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">© 2025 Apna Coding. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {communityLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
