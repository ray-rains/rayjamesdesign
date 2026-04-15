import { useEffect, useRef } from 'react'

export default function HoloInit({ onComplete }) {
  const canvasRef = useRef(null)
  const wipeRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width = W
    canvas.height = H

    const SIZE = 36
    const GAP = 18
    const STEP = SIZE + GAP
    const cols = Math.ceil(W / STEP) + 1
    const rows = Math.ceil(H / STEP) + 1

    // Build grid
    const squares = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const dist = Math.sqrt(c * c + r * r)
        squares.push({
          x: c * STEP,
          y: r * STEP,
          dist,
          opacity: 0.12,
          state: 'idle', // idle | rippling | fading | done
          rippleStart: null,
          fadeStart: null,
        })
      }
    }

    const maxDist = Math.sqrt(cols * cols + rows * rows)
    const rippleSpeed = 0.05 // grid units per ms
    const rippleDuration = 100 // ms the shimmer lasts per square
    const fadeDuration = 200 // ms to fade out

    let startTime = null
    let allDone = false
    let rafId

    const draw = (ts) => {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime

      ctx.clearRect(0, 0, W, H)

      let doneCount = 0

      squares.forEach(sq => {
        const arrivalTime = (sq.dist / (maxDist * rippleSpeed)) * (maxDist * rippleSpeed / rippleSpeed)
        const triggerMs = sq.dist / rippleSpeed

        if (sq.state === 'idle' && elapsed >= triggerMs) {
          sq.state = 'rippling'
          sq.rippleStart = ts
        }

        if (sq.state === 'rippling') {
          const t = (ts - sq.rippleStart) / rippleDuration
          // Shimmer: brightness wave
          const shimmer = Math.sin(t * Math.PI)
          const alpha = 0.08 + shimmer * 0.55

          ctx.save()
          ctx.globalAlpha = alpha
          // Glass refraction shimmer — white with slight blue tint
          const grad = ctx.createLinearGradient(sq.x, sq.y, sq.x + SIZE, sq.y + SIZE)
          grad.addColorStop(0, `rgba(255,255,255,${shimmer * 0.9})`)
          grad.addColorStop(0.4, `rgba(244,248,255,${shimmer * 0.6})`)
          grad.addColorStop(0.8, `rgba(255,255,255,${shimmer * 0.3})`)
          ctx.fillStyle = grad
          ctx.fillRect(sq.x, sq.y, SIZE, SIZE)
          ctx.restore()

          if (t >= 1) {
            sq.state = 'fading'
            sq.fadeStart = ts
          }
        }

        if (sq.state === 'fading') {
          const t = (ts - sq.fadeStart) / fadeDuration
          const alpha = Math.max(0, 0.08 * (1 - t))
          ctx.save()
          ctx.globalAlpha = alpha
          ctx.fillStyle = 'rgba(255,255,255,1)'
          ctx.fillRect(sq.x, sq.y, SIZE, SIZE)
          ctx.restore()

          if (t >= 1) {
            sq.state = 'done'
          }
        }

        if (sq.state === 'done') doneCount++
      })

      if (doneCount === squares.length && !allDone) {
        allDone = true
        // Trigger white wipe
        if (wipeRef.current) {
          wipeRef.current.style.animation = 'holoWipe 0.5s ease-in forwards'
        }
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 600)
        return
      }

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}