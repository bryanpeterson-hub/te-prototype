import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides/index.jsx'

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } }),
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [showHints, setShowHints] = useState(true)

  const total = slides.length
  const currentSlide = slides[index]

  const go = useCallback(
    (newIndex) => {
      if (newIndex < 0 || newIndex >= total) return
      setDirection(newIndex > index ? 1 : -1)
      setIndex(newIndex)
    },
    [index, total],
  )

  const next = useCallback(() => go(index + 1), [go, index])
  const prev = useCallback(() => go(index - 1), [go, index])

  useEffect(() => {
    const timer = setTimeout(() => setShowHints(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.()
    else document.exitFullscreen?.()
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault()
          next()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          prev()
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'Home':
          e.preventDefault()
          go(0)
          break
        case 'End':
          e.preventDefault()
          go(total - 1)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total])

  const progress = index / (total - 1)

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        background: 'var(--bg-deep)',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onClick={next}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ position: 'absolute', inset: 0 }}
        >
          {currentSlide?.component}
        </motion.div>
      </AnimatePresence>

      {/* Co-brand logo bar — top right */}
      {!currentSlide?.hideChrome && (
        <div
          style={{
            position: 'fixed',
            top: '26px',
            right: '4vw',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            zIndex: 200,
            pointerEvents: 'none',
          }}
        >
          <img src="/logos/te-logo.png" alt="TE Connectivity" style={{ height: '30px', width: 'auto' }} />
          <div style={{ width: '1px', height: '26px', background: 'rgba(255,255,255,0.22)' }} />
          <img src="/logos/salesforce-cloud.png" alt="Salesforce" style={{ height: '30px', width: 'auto' }} />
        </div>
      )}

      {/* Progress bar — bottom */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'rgba(255,255,255,0.08)',
          zIndex: 100,
        }}
      >
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
            transformOrigin: 'left',
          }}
          animate={{ scaleX: progress }}
          initial={false}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Slide counter — bottom right */}
      <div
        style={{
          position: 'fixed',
          bottom: '14px',
          right: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          zIndex: 100,
          fontVariantNumeric: 'tabular-nums',
          letterSpacing: '0.05em',
        }}
      >
        {index + 1} / {total}
      </div>

      {/* Keyboard hints */}
      <AnimatePresence>
        {showHints && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              position: 'fixed',
              bottom: '22px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '18px',
              zIndex: 100,
            }}
          >
            {[
              ['→ / Space', 'next'],
              ['←', 'prev'],
              ['F', 'fullscreen'],
            ].map(([key, label]) => (
              <span key={key} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>
                <span style={{ color: 'var(--text-muted)', marginRight: '4px' }}>{key}</span>
                {label}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
