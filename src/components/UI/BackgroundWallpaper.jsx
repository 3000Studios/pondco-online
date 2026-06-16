import React, { useEffect, useRef } from 'react'

export default function BackgroundWallpaper() {
  const canvasRef = useRef(null)

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
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Generate static blueprint lines/nodes
    const nodes = []
    const nodeCount = 60
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
      })
    }

    let angle = 0
    const draw = () => {
      ctx.fillStyle = '#02050f'
      ctx.fillRect(0, 0, width, height)

      // 1. Draw Blueprint Grid
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.035)'
      ctx.lineWidth = 1
      const gridSpacing = 40
      
      // Draw grid lines
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

      // 2. Draw 3D blueprint perspective grid lines reactive to mouse
      if (mouse.active) {
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.05)'
        ctx.lineWidth = 0.5
        // Render isometric perspective lines from cursor to borders
        const steps = 12
        for (let i = 0; i < steps; i++) {
          const theta = (i / steps) * Math.PI * 2
          const dx = Math.cos(theta) * 300
          const dy = Math.sin(theta) * 300
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(mouse.x + dx, mouse.y + dy)
          ctx.stroke()
        }

        // Draw cursor reticle
        ctx.strokeStyle = 'rgba(0, 242, 254, 0.25)'
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(mouse.x - 35, mouse.y)
        ctx.lineTo(mouse.x + 35, mouse.y)
        ctx.moveTo(mouse.x, mouse.y - 35)
        ctx.lineTo(mouse.x, mouse.y + 35)
        ctx.stroke()
      }

      // 3. Draw architectural tower/plane outlines in background
      angle += 0.001
      ctx.save()
      ctx.translate(width - 150, height - 150)
      ctx.rotate(angle)
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.08)'
      ctx.lineWidth = 1
      
      // Draw concentric radar/blueprint rings
      for (let r = 30; r <= 120; r += 30) {
        ctx.beginPath()
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.stroke()
      }
      // Crosshairs
      ctx.beginPath()
      ctx.moveTo(-130, 0)
      ctx.lineTo(130, 0)
      ctx.moveTo(0, -130)
      ctx.lineTo(0, 130)
      ctx.stroke()
      ctx.restore()

      // 4. Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Wrap around boundaries
        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0

        ctx.fillStyle = 'rgba(0, 242, 254, 0.15)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        // Line to mouse if close
        if (mouse.active) {
          const dx = node.x - mouse.x
          const dy = node.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 180)})`
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
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-50 w-full h-full block pointer-events-none" 
    />
  )
}
