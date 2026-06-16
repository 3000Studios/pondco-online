import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function BackgroundWallpaper() {
  const canvasRef = useRef(null)
  const location = useLocation()

  // Get video URL based on route path
  const getVideoUrl = (path) => {
    switch (path) {
      case '/':
        return 'https://assets.mixkit.co/videos/preview/mixkit-commercial-airplane-taking-off-at-sunset-14022-large.mp4'
      case '/projects':
        return 'https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-flying-airplane-41851-large.mp4'
      case '/services':
        return 'https://assets.mixkit.co/videos/preview/mixkit-airport-terminal-with-passengers-running-around-42657-large.mp4'
      case '/markets':
        return 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-map-of-the-earth-42171-large.mp4'
      case '/portfolio':
        return 'https://assets.mixkit.co/videos/preview/mixkit-runway-of-an-airport-from-a-landing-plane-42658-large.mp4'
      case '/client':
        return 'https://assets.mixkit.co/videos/preview/mixkit-digital-network-connections-background-loop-42861-large.mp4'
      case '/hub':
        return 'https://assets.mixkit.co/videos/preview/mixkit-cyber-security-system-scanning-screen-42352-large.mp4'
      default:
        return 'https://assets.mixkit.co/videos/preview/mixkit-commercial-airplane-taking-off-at-sunset-14022-large.mp4'
    }
  }

  const currentVideo = getVideoUrl(location.pathname)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: width / 2, y: height / 2, active: false }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
      
      // Update global CSS variables for page spotlight illumination
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Generate static blueprint lines/nodes
    const nodes = []
    const nodeCount = 50
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 0.8,
      })
    }

    let angle = 0
    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // 1. Draw Blueprint Grid
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.025)'
      ctx.lineWidth = 0.5
      const gridSpacing = 50
      
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // 2. Draw blueprint perspective radar lines reactive to mouse
      if (mouse.active) {
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)'
        ctx.lineWidth = 0.5
        const steps = 8
        for (let i = 0; i < steps; i++) {
          const theta = (i / steps) * Math.PI * 2
          const dx = Math.cos(theta) * 200
          const dy = Math.sin(theta) * 200
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(mouse.x + dx, mouse.y + dy)
          ctx.stroke()
        }
      }

      // 3. Draw architectural tower outlines in background
      angle += 0.0005
      ctx.save()
      ctx.translate(width - 180, height - 180)
      ctx.rotate(angle)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.06)'
      ctx.lineWidth = 0.5
      
      for (let r = 40; r <= 160; r += 40) {
        ctx.beginPath()
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(-180, 0)
      ctx.lineTo(180, 0)
      ctx.moveTo(0, -180)
      ctx.lineTo(0, 180)
      ctx.stroke()
      ctx.restore()

      // 4. Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0

        ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        if (mouse.active) {
          const dx = node.x - mouse.x
          const dy = node.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none bg-[#02050f]">
      {/* Background looping video */}
      <video
        key={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.24] transition-opacity duration-1000"
      >
        <source src={currentVideo} type="video/mp4" />
      </video>

      {/* Deep blue color tint overlay */}
      <div className="absolute inset-0 bg-[#030712]/85 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050f]/80 via-transparent to-[#02050f]/90" />

      {/* Interactive Blueprint Canvas Overlay */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block" 
      />
    </div>
  )
}
