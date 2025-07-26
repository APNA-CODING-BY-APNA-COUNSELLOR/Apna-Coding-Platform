"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Users, Heart, Target, Eye, Award, MapPin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedCounter from "@/components/animated-counter"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: 20000, label: "Active Developers", suffix: "+" },
    { number: 30, label: "Courses Available", suffix: "+" },
    { number: 50, label: "Hackathons Hosted", suffix: "+" },
    { number: 50, label: "Startup Partnerships", suffix: "+" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community and collaboration to drive innovation and growth.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from education to community building.",
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "We embrace new technologies and innovative approaches to solve real-world problems.",
    },
    {
      icon: Award,
      title: "Empowerment",
      description: "We empower developers to reach their full potential and achieve their career goals.",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gray-900/50 px-4 py-2 rounded-full mb-6 border border-gray-800">
              <Users className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-gray-300">Global Coding Community</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Apna Coding</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize coding education and create opportunities for developers worldwide
              through AI-powered learning, community collaboration, and industry partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To empower the next generation of developers by providing accessible, high-quality coding education,
                    fostering a supportive global community, and creating pathways to meaningful career opportunities in
                    technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-black" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    To become the world's leading platform where developers learn, collaborate, and innovate together,
                    breaking down barriers to technology education and creating a more inclusive and diverse tech
                    industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-yellow-400">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our community culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full text-center hover:border-yellow-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Meet Our <span className="text-yellow-400">Founder</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The visionary behind Apna Coding's mission to democratize coding education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden">
                      <Image src="/images/shriyash-soni-new.jpeg" alt="Shriyash Soni" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl font-bold text-white mb-2">Shriyash Soni</h3>
                    <p className="text-yellow-400 text-xl mb-6">Founder & CEO</p>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      Passionate about technology, innovation, and building impactful solutions. Dedicated to empowering
                      the next generation of developers through accessible education, community building, and creating
                      opportunities for growth in the tech industry.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
                        Jabalpur, MP, India
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="w-5 h-5 text-yellow-400 mr-2" />
                        apnacoding.tech@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-900/50 rounded-3xl p-12 border border-gray-800">
              <h2 className="text-4xl font-bold text-white mb-6">
                Join Our <span className="text-yellow-400">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Be part of a community that's shaping the future of coding education and creating opportunities for
                developers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/community">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4">
                    Join Community
                    <Users className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/partnerships">
                  <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-4">
                    Partner with Us
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
