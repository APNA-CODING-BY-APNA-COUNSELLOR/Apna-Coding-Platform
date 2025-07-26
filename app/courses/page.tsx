"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { motion } from "framer-motion"
import {
  Search,
  Clock,
  Users,
  Star,
  Play,
  BookOpen,
  Award,
  ChevronRight,
  Share2,
  Bookmark,
  ExternalLink,
  Lock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { getCurrentUser } from "@/lib/supabase"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [bookmarkedCourses, setBookmarkedCourses] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setIsVisible(true)
    checkUser()
  }, [])

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

  const categories = [
    "All",
    "Design & Video",
    "Business & Finance",
    "Programming & Tech",
    "Marketing & SEO",
    "Data Science & AI",
    "Web Development",
    "Mobile Development",
    "Certification Prep",
    "Personal Development",
  ]

  const courses = [
    {
      id: 1,
      title: "Social Media Video Editing with Canva - From Beginner to Pro",
      description: "Master Canva for creating stunning social media videos and graphics",
      category: "Design & Video",
      level: "Beginner to Advanced",
      duration: "8 hours",
      students: 15420,
      rating: 4.8,
      price: "Free",
      originalPrice: "$89.99",
      instructor: "Udemy Expert",
      tags: ["Canva", "Video Editing", "Social Media"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/20519/social-media-video-editing-with-canva-from-beginner-to-pro",
      image: "/images/courses-hero.png",
    },
    {
      id: 2,
      title: "Business Analyst Using Excel",
      description: "Complete guide to business analysis using Microsoft Excel",
      category: "Business & Finance",
      level: "Intermediate",
      duration: "12 hours",
      students: 8930,
      rating: 4.7,
      price: "Free",
      originalPrice: "$129.99",
      instructor: "Udemy Expert",
      tags: ["Excel", "Business Analysis", "Data Analysis"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/3472/business-analyst-using-excel",
      image: "/images/courses-hero.png",
    },
    {
      id: 3,
      title: "CapCut Video Editing for Social Media Reels & Shorts Videos",
      description: "Master CapCut for creating viral social media content",
      category: "Design & Video",
      level: "Beginner",
      duration: "6 hours",
      students: 12340,
      rating: 4.9,
      price: "Free",
      originalPrice: "$79.99",
      instructor: "Udemy Expert",
      tags: ["CapCut", "Video Editing", "Social Media"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/19779/capcut-video-editing-for-social-media-reels-shorts-videos",
      image: "/images/courses-hero.png",
    },
    {
      id: 4,
      title: "Advanced CapCut - From Beginner to Motion Graphics Master",
      description: "Advanced CapCut techniques for professional video editing",
      category: "Design & Video",
      level: "Advanced",
      duration: "10 hours",
      students: 7650,
      rating: 4.8,
      price: "Free",
      originalPrice: "$149.99",
      instructor: "Udemy Expert",
      tags: ["CapCut", "Motion Graphics", "Advanced Editing"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/22730/advanced-capcut-from-beginner-to-motion-graphics-master",
      image: "/images/courses-hero.png",
    },
    {
      id: 5,
      title: "Consumer Lending",
      description: "Complete guide to consumer lending and financial services",
      category: "Business & Finance",
      level: "Intermediate",
      duration: "8 hours",
      students: 5420,
      rating: 4.6,
      price: "Free",
      originalPrice: "$99.99",
      instructor: "Udemy Expert",
      tags: ["Finance", "Lending", "Banking"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/6935/consumer_lending",
      image: "/images/courses-hero.png",
    },
    {
      id: 6,
      title: "100 Lesson Planning Ideas for School Teachers",
      description: "Creative lesson planning strategies for effective teaching",
      category: "Personal Development",
      level: "Beginner",
      duration: "5 hours",
      students: 9870,
      rating: 4.7,
      price: "Free",
      originalPrice: "$69.99",
      instructor: "Udemy Expert",
      tags: ["Teaching", "Education", "Lesson Planning"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27224/100-lesson-planning-ideas-for-school-teachers",
      image: "/images/courses-hero.png",
    },
    {
      id: 7,
      title: "312-38 Network Security Administrator Practice Test",
      description: "Complete practice test for network security certification",
      category: "Certification Prep",
      level: "Advanced",
      duration: "4 hours",
      students: 3210,
      rating: 4.5,
      price: "Free",
      originalPrice: "$59.99",
      instructor: "Udemy Expert",
      tags: ["Network Security", "Certification", "Practice Test"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27225/312-38-network-security-administrator-practice-test",
      image: "/images/courses-hero.png",
    },
    {
      id: 8,
      title: "NSE7_SDW-7.0 Fortinet Network Security Expert Practice",
      description: "Fortinet network security expert certification preparation",
      category: "Certification Prep",
      level: "Expert",
      duration: "6 hours",
      students: 2890,
      rating: 4.6,
      price: "Free",
      originalPrice: "$199.99",
      instructor: "Udemy Expert",
      tags: ["Fortinet", "Network Security", "Expert Level"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/25906/nse7_sdw-70-fortinet-network-security-expert-practice",
      image: "/images/courses-hero.png",
    },
    {
      id: 9,
      title: "AI Engineering Complete Bootcamp Masterclass",
      description: "Complete AI engineering bootcamp from basics to advanced",
      category: "Data Science & AI",
      level: "Beginner to Advanced",
      duration: "25 hours",
      students: 18750,
      rating: 4.9,
      price: "Free",
      originalPrice: "$299.99",
      instructor: "Udemy Expert",
      tags: ["AI", "Machine Learning", "Engineering"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27226/ai-engineering-complete-bootcamp-masterclass",
      image: "/images/courses-hero.png",
    },
    {
      id: 10,
      title: "700-651 Cisco Collaboration Cloud and Managed Services Sale",
      description: "Cisco collaboration certification preparation course",
      category: "Certification Prep",
      level: "Advanced",
      duration: "8 hours",
      students: 4320,
      rating: 4.7,
      price: "Free",
      originalPrice: "$179.99",
      instructor: "Udemy Expert",
      tags: ["Cisco", "Collaboration", "Cloud Services"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/25208/700-651-cisco-collaboration-cloud-and-managed-services-sale",
      image: "/images/courses-hero.png",
    },
    {
      id: 11,
      title: "Master Self-Talk Transformation Personal Development",
      description: "Transform your mindset through positive self-talk techniques",
      category: "Personal Development",
      level: "Beginner",
      duration: "4 hours",
      students: 11230,
      rating: 4.8,
      price: "Free",
      originalPrice: "$79.99",
      instructor: "Udemy Expert",
      tags: ["Self Development", "Psychology", "Mindset"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27227/master-self-talk-transformation-personal-development",
      image: "/images/courses-hero.png",
    },
    {
      id: 12,
      title: "Practice Test CompTIA IT Fundamentals+ ITF+ FC0-U61",
      description: "Complete practice test for CompTIA IT Fundamentals certification",
      category: "Certification Prep",
      level: "Beginner",
      duration: "3 hours",
      students: 6540,
      rating: 4.6,
      price: "Free",
      originalPrice: "$49.99",
      instructor: "Udemy Expert",
      tags: ["CompTIA", "IT Fundamentals", "Certification"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27082/practice-test-comptia-it-fundamentals-itf-fc0-u61",
      image: "/images/courses-hero.png",
    },
    {
      id: 13,
      title: "Practice Test Oracle Cloud Infra 2024 1Z0-1085-24",
      description: "Oracle Cloud Infrastructure certification practice test",
      category: "Certification Prep",
      level: "Advanced",
      duration: "5 hours",
      students: 3890,
      rating: 4.7,
      price: "Free",
      originalPrice: "$129.99",
      instructor: "Udemy Expert",
      tags: ["Oracle", "Cloud", "Infrastructure"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/26918/practice-test-oracle-cloud-infra-2024-1z0-1085-24",
      image: "/images/courses-hero.png",
    },
    {
      id: 14,
      title: "Postgraduate Executive Diploma General Management",
      description: "Executive-level general management diploma course",
      category: "Business & Finance",
      level: "Advanced",
      duration: "20 hours",
      students: 5670,
      rating: 4.8,
      price: "Free",
      originalPrice: "$399.99",
      instructor: "Udemy Expert",
      tags: ["Management", "Executive", "Leadership"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/9218/postgraduate-executive-diploma-general-management",
      image: "/images/courses-hero.png",
    },
    {
      id: 15,
      title: "Learn Word Now",
      description: "Complete Microsoft Word course for beginners",
      category: "Programming & Tech",
      level: "Beginner",
      duration: "6 hours",
      students: 8920,
      rating: 4.5,
      price: "Free",
      originalPrice: "$59.99",
      instructor: "Udemy Expert",
      tags: ["Microsoft Word", "Office", "Productivity"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/5109/learn-word-now",
      image: "/images/courses-hero.png",
    },
    {
      id: 16,
      title: "Complete WordPress Elementor Guide - Design, Build & Earn",
      description: "Master WordPress and Elementor for web design and development",
      category: "Web Development",
      level: "Beginner to Advanced",
      duration: "15 hours",
      students: 14560,
      rating: 4.9,
      price: "Free",
      originalPrice: "$199.99",
      instructor: "Udemy Expert",
      tags: ["WordPress", "Elementor", "Web Design"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/26895/complete-wordpress-elementor-guide-design-build-earn",
      image: "/images/courses-hero.png",
    },
    {
      id: 17,
      title: "Mastering the Fundamentals of ChatGPT and AI Tools",
      description: "Complete guide to ChatGPT and AI tools for productivity",
      category: "Data Science & AI",
      level: "Beginner",
      duration: "8 hours",
      students: 22340,
      rating: 4.8,
      price: "Free",
      originalPrice: "$149.99",
      instructor: "Udemy Expert",
      tags: ["ChatGPT", "AI Tools", "Productivity"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/16057/mastering-the-fundamentals-of-chatgpt-and-ai-tools",
      image: "/images/courses-hero.png",
    },
    {
      id: 18,
      title: "HPE0-V27 HPE Edge-to-Cloud Solutions Practice Test",
      description: "HPE Edge-to-Cloud Solutions certification practice test",
      category: "Certification Prep",
      level: "Advanced",
      duration: "4 hours",
      students: 2340,
      rating: 4.6,
      price: "Free",
      originalPrice: "$89.99",
      instructor: "Udemy Expert",
      tags: ["HPE", "Cloud Solutions", "Certification"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27229/hpe0-v27-hpe-edge-to-cloud-solutions-practice-test",
      image: "/images/courses-hero.png",
    },
    {
      id: 19,
      title: "The Complete Microsoft Excel Course - Basics to Programming",
      description: "Master Excel from basics to advanced programming with VBA",
      category: "Programming & Tech",
      level: "Beginner to Advanced",
      duration: "18 hours",
      students: 19870,
      rating: 4.9,
      price: "Free",
      originalPrice: "$249.99",
      instructor: "Udemy Expert",
      tags: ["Excel", "VBA", "Data Analysis"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/26872/the-complete-microsoft-excel-course-basics-to-programming",
      image: "/images/courses-hero.png",
    },
    {
      id: 20,
      title: "Facebook Ads + ChatGPT - La Fórmula del Éxito",
      description: "Facebook advertising with ChatGPT for maximum success",
      category: "Marketing & SEO",
      level: "Intermediate",
      duration: "10 hours",
      students: 7890,
      rating: 4.7,
      price: "Free",
      originalPrice: "$159.99",
      instructor: "Udemy Expert",
      tags: ["Facebook Ads", "ChatGPT", "Digital Marketing"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/27230/facebook-ads-chatgpt-la-formula-del-exito",
      image: "/images/courses-hero.png",
    },
    {
      id: 21,
      title: "The Complete Guide to Instagram Marketing for Businesses",
      description: "Master Instagram marketing strategies for business growth",
      category: "Marketing & SEO",
      level: "Beginner to Advanced",
      duration: "12 hours",
      students: 16540,
      rating: 4.8,
      price: "Free",
      originalPrice: "$179.99",
      instructor: "Udemy Expert",
      tags: ["Instagram", "Social Media Marketing", "Business"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/22480/the-complete-guide-to-instagram-marketing-for-businesses",
      image: "/images/courses-hero.png",
    },
    {
      id: 22,
      title: "Advanced Skill Test Associate Python Programmer PCAP™ V4",
      description: "Python programming certification preparation and practice",
      category: "Programming & Tech",
      level: "Intermediate",
      duration: "6 hours",
      students: 9230,
      rating: 4.7,
      price: "Free",
      originalPrice: "$119.99",
      instructor: "Udemy Expert",
      tags: ["Python", "Programming", "Certification"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/26466/advanced-skill-test-associate-python-programmer-pcaptm-v4",
      image: "/images/courses-hero.png",
    },
    {
      id: 23,
      title: "Marketing Management Principles",
      description: "Fundamental principles of marketing management",
      category: "Marketing & SEO",
      level: "Beginner",
      duration: "8 hours",
      students: 11450,
      rating: 4.6,
      price: "Free",
      originalPrice: "$99.99",
      instructor: "Udemy Expert",
      tags: ["Marketing", "Management", "Business Strategy"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/10437/marketing-management-principles",
      image: "/images/courses-hero.png",
    },
    {
      id: 24,
      title: "7 Steps for Entrepreneurs to Turn a Business Idea to Reality",
      description: "Complete guide for entrepreneurs to launch successful businesses",
      category: "Business & Finance",
      level: "Beginner",
      duration: "5 hours",
      students: 13670,
      rating: 4.8,
      price: "Free",
      originalPrice: "$89.99",
      instructor: "Udemy Expert",
      tags: ["Entrepreneurship", "Business", "Startup"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/24174/7-steps-for-entrepreneurs-to-turn-a-business-idea-to-reality",
      image: "/images/courses-hero.png",
    },
    {
      id: 25,
      title: "Advanced Skill Test Python Professional Level 2 PCPP2™ V3",
      description: "Advanced Python programming certification preparation",
      category: "Programming & Tech",
      level: "Advanced",
      duration: "8 hours",
      students: 5890,
      rating: 4.8,
      price: "Free",
      originalPrice: "$199.99",
      instructor: "Udemy Expert",
      tags: ["Python", "Advanced Programming", "Certification"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/26590/advanced-skill-test-python-professional-level-2-pcpp2tm-v3",
      image: "/images/courses-hero.png",
    },
    // Continue with more courses...
    {
      id: 26,
      title: "Adobe Illustrator Complete Mega Course - Beginner to Advance",
      description: "Master Adobe Illustrator from beginner to professional level",
      category: "Design & Video",
      level: "Beginner to Advanced",
      duration: "20 hours",
      students: 18920,
      rating: 4.9,
      price: "Free",
      originalPrice: "$299.99",
      instructor: "Udemy Expert",
      tags: ["Adobe Illustrator", "Graphic Design", "Vector Graphics"],
      redirectUrl:
        "https://techlinks.in/udemy-free-coupons/19509/adobe-illustrator-complete-mega-course-beginner-to-advance",
      image: "/images/courses-hero.png",
    },
    {
      id: 27,
      title: "The Logo Design Expert Course",
      description: "Professional logo design course for graphic designers",
      category: "Design & Video",
      level: "Intermediate",
      duration: "12 hours",
      students: 14560,
      rating: 4.8,
      price: "Free",
      originalPrice: "$199.99",
      instructor: "Udemy Expert",
      tags: ["Logo Design", "Branding", "Graphic Design"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/20065/the-logo-design-expert-course",
      image: "/images/courses-hero.png",
    },
    {
      id: 28,
      title: "The Ultimate Adobe Photoshop CC Advanced Course",
      description: "Advanced Adobe Photoshop techniques and workflows",
      category: "Design & Video",
      level: "Advanced",
      duration: "16 hours",
      students: 21340,
      rating: 4.9,
      price: "Free",
      originalPrice: "$249.99",
      instructor: "Udemy Expert",
      tags: ["Adobe Photoshop", "Photo Editing", "Digital Art"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/24010/the-ultimate-adobe-photoshop-cc-advanced-course",
      image: "/images/courses-hero.png",
    },
    {
      id: 29,
      title: "Power BI and Tableau for Data Visualization",
      description: "Master data visualization with Power BI and Tableau",
      category: "Data Science & AI",
      level: "Intermediate",
      duration: "14 hours",
      students: 16780,
      rating: 4.8,
      price: "Free",
      originalPrice: "$219.99",
      instructor: "Udemy Expert",
      tags: ["Power BI", "Tableau", "Data Visualization"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/18880/power-bi-and-tableau-for-data-visualization",
      image: "/images/courses-hero.png",
    },
    {
      id: 30,
      title: "Java Course - Beginner to Advance Level",
      description: "Complete Java programming course from basics to advanced",
      category: "Programming & Tech",
      level: "Beginner to Advanced",
      duration: "25 hours",
      students: 23450,
      rating: 4.9,
      price: "Free",
      originalPrice: "$299.99",
      instructor: "Udemy Expert",
      tags: ["Java", "Programming", "Object-Oriented"],
      redirectUrl: "https://techlinks.in/udemy-free-coupons/23834/java-course-beginner-to-advance-level",
      image: "/images/courses-hero.png",
    },
    // Add more courses here to reach 100 total...
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleBookmark = (courseId: number) => {
    setBookmarkedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId],
    )
  }

  const handleCourseAccess = (course: any) => {
    if (!user) {
      alert("Please login to access premium courses!")
      return
    }

    // Open the redirect URL in a new tab
    window.open(course.redirectUrl, "_blank")
  }

  const handleShare = (course: any) => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(`${course.title} - ${window.location.href}`)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>100+ Free Premium Udemy Courses | Apna Coding</title>
        <meta
          name="description"
          content="Access 100+ premium Udemy courses for free! Learn programming, design, business, AI, and more. Exclusive collection for Apna Coding members."
        />
        <meta
          name="keywords"
          content="free udemy courses, premium courses free, programming courses, design courses, business courses, AI courses, certification prep, web development"
        />
        <link rel="canonical" href="https://apnacoding.tech/courses" />
        <meta property="og:title" content="100+ Free Premium Udemy Courses | Apna Coding" />
        <meta
          property="og:description"
          content="Access 100+ premium Udemy courses for free! Learn programming, design, business, AI, and more."
        />
        <meta property="og:url" content="https://apnacoding.tech/courses" />
        <meta property="og:image" content="https://apnacoding.tech/images/courses-hero.png" />
      </Head>

      <div className="min-h-screen pt-20 bg-black">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-red-500 text-white px-3 py-1">🔥 PREMIUM</Badge>
                  <Badge className="bg-green-500 text-white px-3 py-1">100% FREE</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  <span className="text-yellow-400">100+</span> Premium Udemy Courses
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Access exclusive collection of premium Udemy courses worth $10,000+ absolutely FREE!
                  {!user && <span className="text-yellow-400 font-semibold"> Login required to access courses.</span>}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {user ? (
                    <>
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3">
                        Start Learning Free
                        <Play className="ml-2 w-5 h-5" />
                      </Button>
                      <Button
                        onClick={() => window.open("/hackathons", "_blank")}
                        className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3"
                      >
                        Watch Demo
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3"
                        onClick={() => alert("Please login to access courses!")}
                      >
                        Login to Access
                        <Lock className="ml-2 w-5 h-5" />
                      </Button>
                      <Button
                        onClick={() => window.open("/hackathons", "_blank")}
                        className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3"
                      >
                        Watch Demo
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                  <Image src="/images/courses-hero.png" alt="Premium Udemy Courses" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">Worth $10,000+</h3>
                    <p className="text-sm opacity-90">Now Available for FREE</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Login Warning for Non-Users */}
        {!user && (
          <section className="py-8 bg-red-900/20 border-y border-red-500/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-center gap-4 text-center">
                <Lock className="w-6 h-6 text-red-400" />
                <p className="text-red-300 text-lg">
                  <span className="font-semibold">Login Required:</span> These premium courses are exclusive to our
                  registered members.
                  <Link href="/auth" className="text-yellow-400 hover:underline ml-2">
                    Sign up now for free access!
                  </Link>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Search and Filter Section */}
        <section className="py-8 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search premium courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black border-gray-700 text-white placeholder-gray-400 focus:border-yellow-400"
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
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredCourses.length} Premium Course{filteredCourses.length !== 1 ? "s" : ""} Available
              </h2>
              <p className="text-gray-300 text-lg">
                {selectedCategory !== "All" ? `Showing ${selectedCategory} courses` : "All premium Udemy courses"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card
                    className={`bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 group overflow-hidden h-full flex flex-col ${!user ? "opacity-75" : ""}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge className="bg-red-500 text-white text-xs">PREMIUM</Badge>
                        <Badge className="bg-green-500 text-white text-xs">{course.price}</Badge>
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleBookmark(course.id)}
                          className={`bg-black/50 hover:bg-black/70 p-2 h-8 w-8 ${bookmarkedCourses.includes(course.id) ? "text-yellow-400" : "text-white"}`}
                        >
                          <Bookmark className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleShare(course)}
                          className="bg-black/50 hover:bg-black/70 text-white p-2 h-8 w-8"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-black/70 text-white text-xs">{course.level}</Badge>
                      </div>
                      {!user && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Lock className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>

                    <CardContent className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-yellow-400 border-yellow-400 text-xs">
                          {course.category}
                        </Badge>
                        <div className="flex items-center text-yellow-400">
                          <Star className="w-4 h-4 fill-current mr-1" />
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-gray-400 mb-4 text-sm line-clamp-3 flex-grow">{course.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm">
                          <span className="text-gray-400">by {course.instructor}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-green-400 font-semibold">{course.price}</span>
                            <span className="text-gray-500 line-through text-xs">{course.originalPrice}</span>
                          </div>
                        </div>
                      </div>

                      <Button
                        className={`w-full ${user ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "bg-gray-600 text-gray-300 cursor-not-allowed"} text-sm py-2`}
                        onClick={() => handleCourseAccess(course)}
                        disabled={!user}
                      >
                        {user ? (
                          <>
                            Access Course
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Login Required
                            <Lock className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Access <span className="text-yellow-400">Premium Courses</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of learners who are advancing their careers with our exclusive collection of premium
                Udemy courses. All courses are handpicked and verified for quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {user ? (
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
                    Browse All Courses
                    <BookOpen className="ml-2 w-5 h-5" />
                  </Button>
                ) : (
                  <Link href="/auth">
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3">
                      Sign Up for Free Access
                      <Play className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                )}
                <Link href="/contact">
                  <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                    Contact Support
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
