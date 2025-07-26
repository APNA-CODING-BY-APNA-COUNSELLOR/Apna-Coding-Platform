"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI coding assistant. I can help you with programming questions, debugging, learning resources, and career guidance. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("react") || input.includes("javascript")) {
      return "Great question about React/JavaScript! I'd recommend starting with our React Masterclass course. You can also check out the official React documentation and practice with small projects. Would you like specific learning resources or help with a particular concept?"
    }

    if (input.includes("python") || input.includes("machine learning")) {
      return "Python is excellent for beginners and ML! Our Data Science with Python course covers everything from basics to advanced ML concepts. I can also suggest some hands-on projects to build your portfolio. What's your current experience level?"
    }

    if (input.includes("job") || input.includes("career") || input.includes("interview")) {
      return "Looking for career guidance? Check out our Jobs section for the latest opportunities. I can help you prepare for technical interviews, review your resume, or suggest skills to focus on based on your target role. What specific area would you like help with?"
    }

    if (input.includes("hackathon") || input.includes("competition")) {
      return "Hackathons are a great way to learn and network! We have 50+ active hackathons listed on our platform. I can help you find ones that match your skill level and interests. Are you looking for beginner-friendly events or specific technology focuses?"
    }

    if (input.includes("course") || input.includes("learn") || input.includes("tutorial")) {
      return "We have 30+ free courses covering web development, AI/ML, blockchain, and more! All courses include hands-on projects and certificates. What technology or skill are you most interested in learning?"
    }

    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! Welcome to Apna Coding! I'm here to help you with your coding journey. Whether you need help with programming concepts, career advice, or finding the right resources, just ask!"
    }

    return "That's an interesting question! I can help you with programming concepts, course recommendations, career guidance, hackathon suggestions, and more. Could you provide a bit more detail about what you're looking for? I'm here to help you succeed in your coding journey!"
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-yellow-400 text-black p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot className="w-6 h-6 mr-2" />
                <div>
                  <h3 className="font-bold">AI Coding Assistant</h3>
                  <p className="text-sm opacity-80">Always here to help</p>
                </div>
              </div>
              <Button onClick={() => setIsOpen(false)} className="p-1 bg-transparent hover:bg-black/10 text-black">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user" ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-white p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything about coding..."
                  className="flex-1 bg-gray-800 border-gray-700 text-white focus:border-yellow-400"
                />
                <Button onClick={handleSendMessage} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
