import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'

const EASE = [0.25, 0.1, 0.25, 1]

const ROWS = [
  {
    theme: 'Identity & Data Unification',
    from: 'Anonymous visitors lost forever; fragmented profiles',
    to: 'Every visitor recognized and unified into a single, actionable profile',
  },
  {
    theme: 'Journey Orchestration',
    from: 'Batch campaigns sent on a schedule',
    to: 'Real-time, AI-driven journeys that adapt to every signal',
  },
  {
    theme: 'Sales & Marketing Alignment',
    from: 'Sales receives a name and a company',
    to: 'A complete engagement summary with a suggested next action',
  },
  {
    theme: 'Personalization at Scale',
    from: 'Static pages and generic email blasts',
    to: 'Real-time content personalization driven by CDP data',
  },
  {
    theme: 'AI-Powered Operations',
    from: 'Manual segments, guessed send times, copy from scratch',
    to: 'Einstein generates, predicts, optimizes, and recommends — automatically',
  },
]

export default function C02_FullFromTo() {
  return (
    <SlideLayout variant="muted" style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <SlideEyebrow color="var(--te-amber-soft)">Section 08 · The Full Transformation</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '22px' }}>
          Five shifts. One connected platform.
        </SlideHeadline>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', width: '100%' }}>
          {ROWS.map((r, i) => (
            <motion.div
              key={r.theme}
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.22, duration: 0.5, ease: EASE }}
              className="card-hover"
              style={{
                display: 'grid',
                gridTemplateColumns: '0.9fr 1fr auto 1.15fr',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius)',
                padding: '13px 16px',
              }}
            >
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--te-orange-soft)', lineHeight: 1.3 }}>
                {r.theme}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{r.from}</div>
              <span style={{ color: 'var(--te-orange)', fontWeight: 700, flexShrink: 0 }}>→</span>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.4 }}>
                {r.to}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}
