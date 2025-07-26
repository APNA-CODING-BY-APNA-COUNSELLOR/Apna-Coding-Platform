"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Heart,
  Building,
  GraduationCap,
  Users,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Trophy,
  Zap,
  FileText,
  Briefcase,
  School,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PartnershipSlider from "@/components/partnership-slider"

export default function PartnershipsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const partnershipTypes = [
    {
      icon: Building,
      title: "Corporate Partnership",
      description: "Partner with us to provide training, internships, and job opportunities to our community",
      benefits: [
        "Access to 20,000+ developers",
        "Custom training programs",
        "Recruitment pipeline",
        "Brand visibility",
      ],
      color: "text-yellow-400",
    },
    {
      icon: GraduationCap,
      title: "Educational Partnership",
      description: "Collaborate with educational institutions to enhance coding education",
      benefits: ["Curriculum development", "Faculty training", "Student projects", "Research collaboration"],
      color: "text-yellow-400",
    },
    {
      icon: Heart,
      title: "Community Partnership",
      description: "Join hands with communities and organizations to spread coding education",
      benefits: ["Community events", "Workshops", "Mentorship programs", "Social impact"],
      color: "text-yellow-400",
    },
  ]

  const currentPartners = [
    { name: "GitHub", description: "Open source collaboration platform", logo: "/images/partners/github.png" },
    { name: "NVIDIA", description: "AI and GPU technology leader", logo: "/images/partners/nvidia-new.png" },
    { name: "Microsoft", description: "Cloud and productivity solutions", logo: "/images/partners/microsoft-new.webp" },
    {
      name: "IIT Bombay E-Cell",
      description: "Entrepreneurship development",
      logo: "/images/partners/iit-bombay-ecell.png",
    },
    {
      name: "IIT Kharagpur E-Cell",
      description: "Innovation and entrepreneurship",
      logo: "/images/partners/iit-kharagpur-ecell.png",
    },
    {
      name: "IIT Hyderabad E-Cell",
      description: "Startup ecosystem development",
      logo: "/images/partners/iit-hyderabad-ecell.png",
    },
    { name: "Dell", description: "Technology solutions provider", logo: "/images/partners/dell-small-business.png" },
    { name: "Amazon Web Services", description: "Cloud computing platform", logo: "/images/partners/aws-new.webp" },
    { name: "MIT Orbit", description: "Innovation and entrepreneurship", logo: "/images/partners/mit-orbit.png" },
  ]

  const partnershipForms = [
    {
      title: "Partnership Form",
      description: "General partnership opportunities and collaborations",
      icon: <FileText className="w-6 h-6" />,
      link: "https://forms.gle/JU8U2xapiyB6Ts8p6",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Job & Internship Opportunities",
      description: "Post job openings and internship positions for our community",
      icon: <Briefcase className="w-6 h-6" />,
      link: "https://forms.gle/S3MWV7rKR69yNv296",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Open Apna Coding Club",
      description: "Start an official Apna Coding Club in your college",
      icon: <School className="w-6 h-6" />,
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeSvRDYtHF49YsEngmAfGzndDToaaZHCO5gMsjHzm9dV55b2Q/viewform",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const clubBenefits = [
    "Sponsorship & Tech Support – Get sponsorships for hackathons and access to services from NVIDIA, Microsoft, GitHub, and cloud hosting providers.",
    "Recognition & Certification – Every event, hackathon, and workshop will be officially recognized. Certificates and letters will feature Apna Coding branding.",
    "PR & Promotion – Your club's activities will be promoted on our official website, social media pages, and community channels.",
    "Networking & Collaborations – Partner with other college clubs and organizations to host tech events, coding competitions, and workshops.",
    "Placement Assistance – Direct support from Apna Coding in college placement cells through industry connections and training.",
    "Leadership & Growth – Exclusive opportunities to connect with tech leaders, investors, and mentors for career growth.",
  ]

  const clubRequirements = [
    "Collaboration Agreement – The student opening the club must sign a collaboration agreement to officially represent Apna Coding.",
    "Event Recognition – All hackathons, coding events, and tech workshops conducted must include Apna Coding branding in promotional materials and certificates.",
    "Minimum 5 Team Members – A core team of at least five members is required to establish the club.",
    "Social Media Presence – Create an official Instagram and LinkedIn account for the college's Apna Coding Club and collaborate with our main pages.",
    "Cross-Club Collaboration – The club should work with other college clubs to conduct joint events and tech programs.",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Partnership form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", company: "", type: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Partner with <span className="text-yellow-400">Apna Coding</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join forces with us to empower the next generation of developers. Together, we can create meaningful
              impact in the tech community and build a stronger future for coding education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
                Become a Partner
                <Heart className="ml-2 w-5 h-5" />
              </Button>
              <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                View Current Partners
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Forms */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership <span className="text-yellow-400">Forms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right partnership opportunity for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipForms.map((form, index) => (
              <motion.div
                key={form.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${form.color} flex items-center justify-center mx-auto mb-6`}
                    >
                      <div className="text-white">{form.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{form.title}</h3>
                    <p className="text-gray-400 mb-6">{form.description}</p>
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full"
                      onClick={() => window.open(form.link, "_blank")}
                    >
                      Apply Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apna Coding Club Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Apna Coding Club</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Apna Coding Club is an official tech community for students passionate about coding, hackathons, and
              innovation. By opening an Apna Coding Club in your college, you become a part of a global network of
              developers, tech enthusiasts, and industry leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Benefits of Starting an Apna Coding Club</h3>
                  <ul className="space-y-4">
                    {clubBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Requirements to Start an Official Apna Coding Club
                  </h3>
                  <ul className="space-y-4">
                    {clubRequirements.map((requirement, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Slider */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <PartnershipSlider />
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership <span className="text-yellow-400">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer various partnership models to suit different organizations and their goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mb-6">
                      <type.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-400 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Current Partners</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're proud to work with industry leaders who share our vision of empowering developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-white p-2">
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Contact Us for <span className="text-yellow-400">Partnership</span>
              </h2>
              <p className="text-xl text-gray-300">
                Ready to collaborate? Get in touch with us to discuss partnership opportunities
              </p>
            </div>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Mail className="w-6 h-6 text-yellow-400 mr-4" />
                        <div>
                          <p className="text-white font-medium">Email</p>
                          <p className="text-gray-400">apnacoding.tech@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-6 h-6 text-yellow-400 mr-4" />
                        <div>
                          <p className="text-white font-medium">Phone</p>
                          <p className="text-gray-400">+91 8989976990</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-6 h-6 text-yellow-400 mr-4" />
                        <div>
                          <p className="text-white font-medium">Address</p>
                          <p className="text-gray-400">Jabalpur, MP 482001, India</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Why Partner with Us?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Users className="w-5 h-5 text-yellow-400 mr-3" />
                        20,000+ Active Developer Community
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Trophy className="w-5 h-5 text-yellow-400 mr-3" />
                        50+ Successful Hackathons
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                        Global Reach & Impact
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
