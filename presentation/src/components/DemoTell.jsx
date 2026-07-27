import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow } from './SlideLayout'
import Typewriter from './Typewriter'

const EASE = [0.25, 0.1, 0.25, 1]
const TOTAL_DEMOS = 6

function DemoLabel({ number, total = TOTAL_DEMOS }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--te-orange)',
        border: '1px solid var(--border-orange)',
        borderRadius: '999px',
        padding: '5px 14px',
        marginBottom: '22px',
      }}
    >
      Vignette {number} of {total}
    </div>
  )
}

function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * TELL (before) — the Lead-In. We tell the audience what they're about to see.
 * The micro-cliffhanger types/reveals last.
 */
export function TellBefore({ number, section, lines = [], cliffhanger }) {
  return (
    <SlideLayout style={{ justifyContent: 'center' }}>
      <div style={{ maxWidth: '900px' }}>
        <FadeIn delay={0}>
          <DemoLabel number={number} />
        </FadeIn>
        <SlideEyebrow delay={0.1}>{section} · The Lead-In</SlideEyebrow>

        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.35, duration: 0.6, ease: EASE }}
            style={{
              fontSize: 'clamp(1.1rem, 1.9vw, 1.5rem)',
              fontWeight: i === lines.length - 1 ? 600 : 300,
              color: i === lines.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
              lineHeight: 1.5,
              marginBottom: '18px',
            }}
          >
            {line}
          </motion.p>
        ))}

        {cliffhanger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 + lines.length * 0.35 + 0.2, duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '10px' }}
          >
            <div
              style={{
                width: '38px',
                height: '1px',
                background: 'linear-gradient(90deg, var(--te-orange), transparent)',
              }}
            />
            <span style={{ fontSize: '1rem', color: 'var(--te-orange)', fontStyle: 'italic', fontWeight: 500 }}>
              {cliffhanger}
            </span>
          </motion.div>
        )}
      </div>
    </SlideLayout>
  )
}

function ShiftRow({ from, to, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.45, ease: EASE }}
      className="card-hover"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 15px',
        background: 'var(--bg-card)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius)',
      }}
    >
      <span style={{ flex: 1, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{from}</span>
      <span style={{ color: 'var(--te-orange-soft)', fontWeight: 700, flexShrink: 0 }}>→</span>
      <span style={{ flex: 1, fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.4 }}>
        {to}
      </span>
    </motion.div>
  )
}

/**
 * TELL (after) — the Recap. What the audience just saw and why it matters, plus
 * the per-vignette From -> To shift. The forward-looking transition types out
 * on the first click anywhere; the next click advances the deck.
 */
export function TellAfter({ number, section, lines = [], shift = [], transition, variant = 'muted' }) {
  const [revealNext, setRevealNext] = useState(false)

  const clickToReveal = transition && !revealNext

  return (
    <div
      style={{ width: '100%', height: '100%', cursor: clickToReveal ? 'pointer' : 'default' }}
      onClick={
        clickToReveal
          ? (e) => {
              e.stopPropagation()
              setRevealNext(true)
            }
          : undefined
      }
    >
      <SlideLayout variant={variant} style={{ justifyContent: 'center' }}>
        <div style={{ maxWidth: '1080px', width: '100%' }}>
          <FadeIn delay={0}>
            <DemoLabel number={number} />
          </FadeIn>
          <SlideEyebrow delay={0.1} color="var(--te-amber-soft)">
            {section} · The Recap
          </SlideEyebrow>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: shift.length ? '1.05fr 0.95fr' : '1fr',
              gap: '40px',
              alignItems: 'start',
            }}
          >
            {/* Left: what you just saw */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.22, duration: 0.5 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '14px',
                }}
              >
                What you just saw
              </motion.div>
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.28, duration: 0.6, ease: EASE }}
                  style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.28rem)',
                    fontWeight: i === 0 ? 600 : 300,
                    color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Right: the shift */}
            {shift.length > 0 && (
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--te-amber-soft)',
                    marginBottom: '14px',
                  }}
                >
                  The shift
                </motion.div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {shift.map((s, i) => (
                    <ShiftRow key={i} from={s.from} to={s.to} delay={0.45 + i * 0.15} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Forward-looking transition — types out on click anywhere */}
          {transition && (
            <div style={{ marginTop: '26px', minHeight: '2.2em' }}>
              {revealNext ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '1px',
                      background: 'linear-gradient(90deg, var(--te-amber-soft), transparent)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', color: 'var(--te-amber-soft)', fontStyle: 'italic' }}>
                    <Typewriter text={transition} speed={34} startDelay={120} />
                  </span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.35, 0.85, 0.35] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  Click anywhere to reveal what&rsquo;s next →
                </motion.div>
              )}
            </div>
          )}
        </div>
      </SlideLayout>
    </div>
  )
}
