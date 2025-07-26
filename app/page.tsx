"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, Users, Trophy, Zap, Star, Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"
import FloatingElements from "@/components/floating-elements"
import CodeAnimation from "@/components/code-animation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: Code,
      title: "AI-Powered Learning",
      description: "Learn coding with personalized AI mentorship and real-time feedback",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      title: "Global Community",
      description: "Connect with developers worldwide and collaborate on projects",
      color: "text-yellow-400",
    },
    {
      icon: Trophy,
      title: "Epic Hackathons",
      description: "Participate in global hackathons with real rewards and recognition",
      color: "text-yellow-400",
    },
    {
      icon: Zap,
      title: "Career Opportunities",
      description: "Get hired by top companies through our verified job platform",
      color: "text-yellow-400",
    },
  ]

  const stats = [
    { number: 20000, label: "Active Developers", suffix: "+" },
    { number: 30, label: "Courses Available", suffix: "+" },
    { number: 50, label: "Hackathons Hosted", suffix: "+" },
    { number: 50, label: "Startup Partnerships", suffix: "+" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      company: "Google",
      content:
        "Apna Coding's AI mentorship helped me land my dream job at Google. The personalized learning path was incredible!",
      rating: 5,
    },
    {
      name: "Raj Patel",
      role: "Blockchain Developer",
      company: "Ethereum Foundation",
      content: "The hackathons here are next level. I won $50K in prizes and got hired by the Ethereum Foundation!",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      role: "Frontend Engineer",
      company: "Meta",
      content: "From zero to hero in 6 months. The community support and AI guidance made all the difference.",
      rating: 5,
    },
  ]

  const partners = [
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
    <div className="min-h-screen relative">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <div className="inline-flex items-center bg-gray-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-gray-700/50">
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold mr-2">NEW</span>
                <span className="text-gray-300">Global Level Coding Community</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Build the Future of <span className="text-yellow-400">Coding</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join the world's most advanced coding community. Learn with AI mentorship, compete in global hackathons,
                and get hired by top tech companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl">
                  Start Learning Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 rounded-xl backdrop-blur-sm">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* AI Search Box */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
              <div className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 max-w-2xl mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black" />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Ask AI: 'How do I learn React in 30 days?'"
                      className="w-full bg-transparent text-white placeholder-gray-400 text-lg outline-none"
                    />
                  </div>
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">Ask AI</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Animation */}
        <div className="mt-16">
          <CodeAnimation />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-yellow-400">Apna Coding</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of coding education with AI-powered learning, global community, and real-world
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-gray-900/30 backdrop-blur-sm border-gray-700/50 p-6 transition-all duration-1000 delay-${index * 100} hover:border-yellow-400/50 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success <span className="text-yellow-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from developers who transformed their careers with Apna Coding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className={`bg-gray-900/30 backdrop-blur-sm border-gray-700/50 p-6 transition-all duration-1000 delay-${index * 100} hover:border-yellow-400/50 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-yellow-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-yellow-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We partner with top companies and institutions to provide the best opportunities for our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/partnerships">
              <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black backdrop-blur-sm">
                View All Partners
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/30 backdrop-blur-sm p-12 rounded-3xl border border-gray-700/50 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-yellow-400">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future. Start your journey today with our
              AI-powered learning platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/courses">
                <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4 rounded-xl backdrop-blur-sm">
                  Browse Courses
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
