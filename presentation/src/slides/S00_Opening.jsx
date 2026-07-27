import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PersonaCard from '../components/PersonaCard'

const EASE = [0.25, 0.1, 0.25, 1]

const PERSONAS = [
  {
    name: 'Lauren Bailey',
    title: 'Lead Systems Architect · Omega Aerospace',
    quote: 'The right connector, fast — without wading through a catalog.',
    reveal: 'I have 90 seconds to find the right answer. If the site can\u2019t keep up, I move on.',
  },
  {
    name: 'Elena Reyes',
    title: 'Marketing Manager · TE Aerospace BU',
    quote: 'To see Lauren coming, prove it worked, and scale it.',
    reveal: 'I know my data could work harder. I just can\u2019t get it all in one place at the same time.',
    emphasized: true,
  },
  {
    name: 'James Bishop',
    title: 'Solution Consultant · TE',
    quote: 'A complete picture of Lauren before he ever calls her.',
    reveal: 'Marketing sends me a list once a week. By the time I call, the moment has passed.',
  },
]

export default function S00_Opening() {
  const [step, setStep] = useState(0)
  const maxStep = 2
  const gate = step < maxStep

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse 70% 60% at 50% 40%, #17181d 0%, #0a0a0c 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '6vh 8vw',
        cursor: gate ? 'pointer' : 'default',
      }}
      onClick={
        gate
          ? (e) => {
              e.stopPropagation()
              setStep((s) => Math.min(s + 1, maxStep))
            }
          : undefined
      }
    >
      <div style={{ maxWidth: '1160px', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: EASE }}
          style={{
            fontSize: 'clamp(1.65rem, 3.2vw, 2.75rem)',
            fontWeight: 400,
            lineHeight: 1.42,
            color: 'var(--text-primary)',
            margin: 0,
          }}
        >
          Right now, one of your best-fit customers is on your website. She has a hard technical
          problem. She knows exactly what she needs. And she&rsquo;s about to leave —{' '}
          <span style={{ color: 'var(--te-orange-soft)', fontWeight: 600 }}>because the site wasn&rsquo;t personalized to her needs.</span>
        </motion.p>

        <AnimatePresence>
          {step >= 1 && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{
                fontSize: 'clamp(1.5rem, 2.9vw, 2.4rem)',
                fontWeight: 600,
                lineHeight: 1.42,
                color: 'var(--te-orange)',
                marginTop: '38px',
              }}
            >
              What if you didn&rsquo;t have to guess? What if the platform already knew?
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ marginTop: '52px' }}
            >
              <div
                style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '20px',
                }}
              >
                Three people. One story. Hover to meet them.
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', textAlign: 'left' }}>
                {PERSONAS.map((p, i) => (
                  <PersonaCard key={p.name} {...p} delay={0.1 + i * 0.12} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {gate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
          }}
        >
          Click to continue →
        </motion.div>
      )}
    </div>
  )
}
