import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp } from './SlideLayout'

/**
 * Persona card — name, role, and their driving need/question.
 * - `reveal`: a "day in their life" one-liner shown on hover (Section 0).
 * - `answer`: a solution line rendered beneath (recap use).
 * - `emphasized`: highlight the primary audience proxy (Elena).
 */
export default function PersonaCard({
  name,
  title,
  quote,
  reveal,
  answer,
  delay = 0,
  compact = false,
  emphasized = false,
}) {
  const [hover, setHover] = useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)

  return (
    <FadeUp delay={delay} style={{ height: '100%' }}>
      <div
        className="card-hover"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          height: '100%',
          background: emphasized ? 'var(--orange-glow)' : 'var(--bg-card)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: emphasized ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius)',
          padding: compact ? '18px 20px' : '22px 24px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              flexShrink: 0,
              background: 'linear-gradient(135deg, rgba(255,109,34,0.4), rgba(255,176,32,0.32))',
              border: '1px solid rgba(255,109,34,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#fff',
            }}
          >
            {initials}
          </div>
          <div>
            <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {name}
            </div>
            <div style={{ fontSize: '0.76rem', color: 'var(--te-orange-soft)', letterSpacing: '0.02em' }}>
              {title}
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: compact ? '0.86rem' : '0.92rem',
            color: 'var(--text-secondary)',
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.55,
            borderLeft: '3px solid rgba(255,109,34,0.55)',
            paddingLeft: '14px',
          }}
        >
          {quote}
        </div>

        {reveal && (
          <div style={{ minHeight: hover ? undefined : '0', marginTop: hover ? '14px' : '0' }}>
            <AnimatePresence>
              {hover && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                  }}
                >
                  <span style={{ color: 'var(--te-orange-soft)', fontWeight: 700, marginRight: '8px' }}>
                    A day in the life
                  </span>
                  {reveal}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {answer && (
          <div
            style={{
              marginTop: '14px',
              paddingTop: '14px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ color: 'var(--te-amber-soft)', fontWeight: 700, flexShrink: 0 }}>→</span>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
              {answer}
            </div>
          </div>
        )}
      </div>
    </FadeUp>
  )
}
