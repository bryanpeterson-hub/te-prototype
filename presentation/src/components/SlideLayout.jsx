import { motion } from 'framer-motion'
import PrecisionBackground from './PrecisionBackground'

const EASE = [0.25, 0.1, 0.25, 1]

/**
 * Base slide shell — full-bleed graphite gradient with soft radial glows.
 * variant: 'light' (orange/amber glow) | 'muted' (warm amber glow)
 */
export function SlideLayout({ children, center = false, variant = 'light', style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: variant === 'muted' ? 'var(--grad-muted)' : 'var(--grad-slide)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: center ? 'center' : 'flex-start',
        alignItems: center ? 'center' : 'flex-start',
        padding: center
          ? 'var(--slide-padding)'
          : 'var(--slide-padding-v) var(--slide-padding)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Radial glow overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background:
            variant === 'muted'
              ? 'radial-gradient(ellipse 50% 45% at 10% 8%, rgba(255,176,32,0.14) 0%, transparent 62%), radial-gradient(ellipse 45% 50% at 92% 88%, rgba(255,109,34,0.16) 0%, transparent 60%)'
              : 'radial-gradient(ellipse 55% 45% at 90% 10%, rgba(255,109,34,0.22) 0%, transparent 65%), radial-gradient(ellipse 40% 55% at 5% 85%, rgba(255,176,32,0.14) 0%, transparent 60%)',
        }}
      />
      <PrecisionBackground />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1180px',
          margin: center ? '0 auto' : '0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: center ? 'center' : 'flex-start',
          textAlign: center ? 'center' : 'left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function FadeUp({ children, delay = 0, y = 18, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: EASE }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function SlideEyebrow({ children, color = 'var(--te-orange-soft)', delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.16em',
          color,
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}
      >
        {children}
      </div>
    </FadeUp>
  )
}

export function SlideHeadline({ children, size = 'lg', delay = 0.1, style = {} }) {
  const sizes = {
    xl: { fontSize: 'clamp(2.2rem, 4.4vw, 3.6rem)', lineHeight: 1.08, fontWeight: 700 },
    lg: { fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)', lineHeight: 1.14, fontWeight: 700 },
    md: { fontSize: 'clamp(1.4rem, 2.4vw, 2.05rem)', lineHeight: 1.2, fontWeight: 700 },
    sm: { fontSize: 'clamp(1.1rem, 1.9vw, 1.55rem)', lineHeight: 1.3, fontWeight: 600 },
  }
  return (
    <FadeUp delay={delay}>
      <h1 style={{ color: 'var(--text-primary)', margin: 0, ...sizes[size], ...style }}>
        {children}
      </h1>
    </FadeUp>
  )
}

export function SlideBody({ children, delay = 0.2, style = {} }) {
  return (
    <FadeUp delay={delay}>
      <p
        style={{
          fontSize: 'clamp(0.98rem, 1.35vw, 1.18rem)',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          maxWidth: '720px',
          ...style,
        }}
      >
        {children}
      </p>
    </FadeUp>
  )
}

export function AccentLine({ delay = 0, color = 'var(--te-orange)', width = '54px' }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      style={{
        width,
        height: '3px',
        background: `linear-gradient(90deg, ${color}, var(--te-amber))`,
        transformOrigin: 'left',
        margin: '18px 0 26px',
        borderRadius: '2px',
      }}
    />
  )
}

/** Frosted-glass card. */
export function GlassCard({ children, delay = 0, hover = true, style = {}, className = '' }) {
  return (
    <FadeUp delay={delay}>
      <div
        className={hover ? `card-hover ${className}` : className}
        style={{
          background: 'var(--bg-card)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius)',
          padding: '20px 22px',
          ...style,
        }}
      >
        {children}
      </div>
    </FadeUp>
  )
}

export function TransitionLine({ children, delay = 0, color = 'var(--te-orange-soft)' }) {
  return (
    <FadeUp delay={delay}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '8px' }}>
        <div
          style={{
            width: '34px',
            height: '1px',
            background: `linear-gradient(90deg, ${color}, transparent)`,
          }}
        />
        <div style={{ fontSize: '0.98rem', color, fontStyle: 'italic', fontWeight: 400 }}>
          {children}
        </div>
      </div>
    </FadeUp>
  )
}
