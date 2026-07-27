import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline, TransitionLine } from '../components/SlideLayout'

const JOBS = [
  { title: 'Maximize marketing impact', icon: '◆' },
  { title: 'Increase campaign effectiveness', icon: '◇' },
  { title: 'Orchestrate seamless experiences', icon: '◈' },
  { title: 'Understand customers & performance', icon: '◉' },
]

export default function I04_CMOJobs() {
  return (
    <SlideLayout>
      <SlideEyebrow>The Constant</SlideEyebrow>
      <SlideHeadline size="md" style={{ marginBottom: '28px', maxWidth: '900px' }}>
        A CMO&rsquo;s jobs-to-be-done remain the same&hellip;
      </SlideHeadline>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '14px',
          width: '100%',
          marginBottom: '26px',
        }}
      >
        {JOBS.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + i * 0.14, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="card-hover"
            style={{
              background: 'var(--bg-card)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid var(--border-subtle)',
              borderTop: '3px solid var(--te-orange)',
              borderRadius: 'var(--radius)',
              padding: '22px 20px',
              minHeight: '150px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ fontSize: '1.5rem', color: 'var(--te-orange)' }}>{j.icon}</div>
            <div style={{ fontSize: '1.02rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.35 }}>
              {j.title}
            </div>
          </motion.div>
        ))}
      </div>

      <TransitionLine delay={0.25 + JOBS.length * 0.14 + 0.2}>
        &hellip;but the way they get done is being rewritten.
      </TransitionLine>
    </SlideLayout>
  )
}
