import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'

const SHIFTS = [
  { from: 'Data actioned by humans', to: 'Data powering autonomous agents' },
  { from: 'One-way channels', to: 'Two-way conversations across domains' },
  { from: 'Finite personalization', to: 'Infinite scale with agentic content' },
  { from: 'Capacity constraints', to: 'Agency of agents empowering marketers' },
]

const OUTCOMES = ['↑ Revenue', '↑ Retention', '↑ Conversion', '↑ Impact']
const EASE = [0.25, 0.1, 0.25, 1]

export default function I05_AgenticPlaybooks() {
  return (
    <SlideLayout style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <SlideEyebrow>The Shift</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '24px', maxWidth: '900px' }}>
          Solutions must evolve to support new agentic playbooks.
        </SlideHeadline>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '1000px' }}>
          {SHIFTS.map((s, i) => (
            <motion.div
              key={s.from}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + i * 0.18, duration: 0.5, ease: EASE }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto 1.2fr',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  fontWeight: 300,
                  background: 'var(--bg-card-alt)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius)',
                  padding: '12px 16px',
                }}
              >
                {s.from}
              </div>
              <span style={{ color: 'var(--te-orange)', fontWeight: 700, fontSize: '1.1rem' }}>→</span>
              <div
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  background: 'var(--orange-glow)',
                  border: '1px solid var(--border-orange)',
                  borderRadius: 'var(--radius)',
                  padding: '12px 16px',
                }}
              >
                {s.to}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 + SHIFTS.length * 0.18 + 0.2, duration: 0.55, ease: EASE }}
          style={{
            marginTop: '26px',
            display: 'flex',
            gap: '28px',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {OUTCOMES.map((o) => (
            <span
              key={o}
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--te-amber)',
                letterSpacing: '0.02em',
              }}
            >
              {o}
            </span>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  )
}
