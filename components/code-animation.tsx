"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const codeSnippets = [
  "const developer = 'you';",
  "function learnCoding() {",
  "  return 'success';",
  "}",
  "// Join Apna Coding",
  "const future = bright;",
]

export default function CodeAnimation() {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedCode, setDisplayedCode] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        const nextLine = (prev + 1) % codeSnippets.length
        if (nextLine === 0) {
          setDisplayedCode([])
        }
        return nextLine
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setDisplayedCode((prev) => {
      const newCode = [...prev]
      if (currentLine === 0 && prev.length > 0) {
        return [codeSnippets[0]]
      }
      newCode[currentLine] = codeSnippets[currentLine]
      return newCode
    })
  }, [currentLine])

  return (
    <div className="font-mono text-sm bg-gray-900/50 rounded-lg p-4 border border-gray-800 backdrop-blur-sm">
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-3 text-gray-400 text-xs">coding-journey.js</span>
      </div>

      <div className="space-y-1">
        <AnimatePresence>
          {displayedCode.map((line, index) => (
            <motion.div
              key={`${index}-${line}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <span className="text-gray-500 mr-3 select-none">{index + 1}</span>
              <span className="text-yellow-400">{line}</span>
              {index === currentLine && (
                <motion.span
                  className="ml-1 w-2 h-5 bg-yellow-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
