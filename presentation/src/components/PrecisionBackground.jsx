import { useRef, useEffect } from 'react'

/**
 * TE "precision at the edge" backdrop: right-angle circuit traces with
 * connector pads over a faint engineering dot-grid, and signal pulses that
 * travel the traces — a nod to signal integrity, TE's core engineering promise.
 *
 * `density` scales the number of traces (kept subtle so it never competes with
 * slide content). Honors prefers-reduced-motion by rendering a static frame.
 */
export default function PrecisionBackground({
  density = 46,
  trace = 'rgba(255, 109, 34, 0.16)',
  grid = 'rgba(255, 255, 255, 0.035)',
  pad = 'rgba(255, 158, 107, 0.35)',
  pulse = '255, 138, 61',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const parent = canvas.parentElement
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let w = 0
    let h = 0
    let traces = []
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const GRID = 44

    const rand = (a, b) => a + Math.random() * (b - a)

    const buildTrace = () => {
      const cols = Math.max(1, Math.floor(w / GRID))
      const rows = Math.max(1, Math.floor(h / GRID))
      let cx = Math.floor(rand(0, cols)) * GRID
      let cy = Math.floor(rand(0, rows)) * GRID
      const pts = [{ x: cx, y: cy }]
      const segs = 3 + Math.floor(rand(0, 4))
      let horiz = Math.random() < 0.5
      for (let i = 0; i < segs; i++) {
        const step = (1 + Math.floor(rand(0, 4))) * GRID * (Math.random() < 0.5 ? 1 : -1)
        if (horiz) cx = Math.max(0, Math.min(w, cx + step))
        else cy = Math.max(0, Math.min(h, cy + step))
        pts.push({ x: cx, y: cy })
        horiz = !horiz
      }
      const cum = [0]
      let total = 0
      for (let i = 1; i < pts.length; i++) {
        total += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y)
        cum.push(total)
      }
      return { pts, cum, total, speed: rand(0.04, 0.12), offset: Math.random() }
    }

    const seed = () => {
      const rect = parent.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.max(5, Math.round(density / 4))
      traces = Array.from({ length: n }, buildTrace)
    }

    seed()
    const ro = new ResizeObserver(seed)
    ro.observe(parent)

    const pointAt = (t, tt) => {
      const target = tt.total * t
      const { cum, pts } = tt
      for (let i = 1; i < cum.length; i++) {
        if (target <= cum[i]) {
          const segLen = cum[i] - cum[i - 1] || 1
          const f = (target - cum[i - 1]) / segLen
          return {
            x: pts[i - 1].x + (pts[i].x - pts[i - 1].x) * f,
            y: pts[i - 1].y + (pts[i].y - pts[i - 1].y) * f,
          }
        }
      }
      return pts[pts.length - 1]
    }

    const drawGrid = () => {
      ctx.fillStyle = grid
      for (let x = 0; x <= w; x += GRID) {
        for (let y = 0; y <= h; y += GRID) {
          ctx.fillRect(x, y, 1, 1)
        }
      }
    }

    const drawStatic = () => {
      for (const tt of traces) {
        ctx.strokeStyle = trace
        ctx.lineWidth = 1.4
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(tt.pts[0].x, tt.pts[0].y)
        for (let i = 1; i < tt.pts.length; i++) ctx.lineTo(tt.pts[i].x, tt.pts[i].y)
        ctx.stroke()
        // connector pads at endpoints
        for (const end of [tt.pts[0], tt.pts[tt.pts.length - 1]]) {
          ctx.fillStyle = pad
          ctx.fillRect(end.x - 2.5, end.y - 2.5, 5, 5)
        }
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      drawGrid()
      drawStatic()

      const t = performance.now() / 1000
      for (const tt of traces) {
        const p = (tt.offset + (t * tt.speed)) % 1
        // trailing pulse (bright head + fading tail)
        for (let k = 0; k < 6; k++) {
          const tk = p - k * 0.012
          if (tk < 0) continue
          const pt = pointAt(tk, tt)
          const a = (1 - k / 6) * 0.9
          ctx.beginPath()
          ctx.arc(pt.x, pt.y, k === 0 ? 2.4 : 1.6, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${pulse}, ${a})`
          if (k === 0) {
            ctx.shadowColor = `rgba(${pulse}, 0.8)`
            ctx.shadowBlur = 8
          } else {
            ctx.shadowBlur = 0
          }
          ctx.fill()
        }
        ctx.shadowBlur = 0
      }
      raf = requestAnimationFrame(draw)
    }

    if (reduce) {
      ctx.clearRect(0, 0, w, h)
      drawGrid()
      drawStatic()
      for (const tt of traces) {
        const pt = pointAt(tt.offset, tt)
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 2.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${pulse}, 0.9)`
        ctx.fill()
      }
    } else {
      draw()
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [density, trace, grid, pad, pulse])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
