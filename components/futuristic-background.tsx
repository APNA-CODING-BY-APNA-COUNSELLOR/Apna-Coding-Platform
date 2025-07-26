"use client"

import { useEffect, useRef } from "react"

export default function FuturisticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Geometric shapes data
    const shapes: Array<{
      x: number
      y: number
      size: number
      rotation: number
      type: "cross" | "l-shape" | "dot"
      opacity: number
      speed: number
    }> = []

    // Create geometric shapes
    for (let i = 0; i < 30; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 10,
        rotation: Math.random() * Math.PI * 2,
        type: ["cross", "l-shape", "dot"][Math.floor(Math.random() * 3)] as "cross" | "l-shape" | "dot",
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    // Grid dots
    const gridDots: Array<{ x: number; y: number; opacity: number }> = []
    const gridSpacing = 50
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      for (let y = 0; y < canvas.height; y += gridSpacing) {
        gridDots.push({
          x,
          y,
          opacity: Math.random() * 0.2 + 0.05,
        })
      }
    }

    const drawCross = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(-size / 2, 0)
      ctx.lineTo(size / 2, 0)
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(0, size / 2)
      ctx.stroke()
      ctx.restore()
    }

    const drawLShape = (x: number, y: number, size: number, rotation: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = `rgba(251, 191, 36, ${opacity})`
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(-size / 2, -size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.stroke()
      ctx.restore()
    }

    const drawDot = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath()
      ctx.arc(x, y, size / 4, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(251, 191, 36, ${opacity})`
      ctx.fill()
    }

    const animate = () => {
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#000000")
      gradient.addColorStop(0.5, "#111111")
      gradient.addColorStop(1, "#1a1a1a")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid dots
      gridDots.forEach((dot) => {
        drawDot(dot.x, dot.y, 2, dot.opacity)
      })

      // Draw and animate geometric shapes
      shapes.forEach((shape) => {
        shape.rotation += shape.speed * 0.01
        shape.y += shape.speed * 0.2

        // Reset position if shape goes off screen
        if (shape.y > canvas.height + shape.size) {
          shape.y = -shape.size
          shape.x = Math.random() * canvas.width
        }

        switch (shape.type) {
          case "cross":
            drawCross(shape.x, shape.y, shape.size, shape.rotation, shape.opacity)
            break
          case "l-shape":
            drawLShape(shape.x, shape.y, shape.size, shape.rotation, shape.opacity)
            break
          case "dot":
            drawDot(shape.x, shape.y, shape.size, shape.opacity)
            break
        }
      })

      // Add glowing overlay effect
      const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )
      overlayGradient.addColorStop(0, "rgba(251, 191, 36, 0.02)")
      overlayGradient.addColorStop(0.5, "rgba(251, 191, 36, 0.01)")
      overlayGradient.addColorStop(1, "rgba(0, 0, 0, 0.1)")

      ctx.fillStyle = overlayGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
