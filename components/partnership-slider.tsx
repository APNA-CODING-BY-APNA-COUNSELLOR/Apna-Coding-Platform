"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const PartnershipSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(partners.length / 3))
    }, 3000)

    return () => clearInterval(timer)
  }, [partners.length])

  const getVisiblePartners = () => {
    const startIndex = currentIndex * 3
    return partners.slice(startIndex, startIndex + 3)
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Our <span className="text-yellow-400">Partners</span>
      </h2>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        We're proud to collaborate with industry leaders and educational institutions
      </p>

      <div className="relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center space-x-8"
        >
          {getVisiblePartners().map((partner, index) => (
            <div
              key={`${partner.name}-${currentIndex}-${index}`}
              className="flex-shrink-0 w-32 h-32 bg-white rounded-lg p-4 flex items-center justify-center shadow-lg"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={120}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {Array.from({ length: Math.ceil(partners.length / 3) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-yellow-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default PartnershipSlider
