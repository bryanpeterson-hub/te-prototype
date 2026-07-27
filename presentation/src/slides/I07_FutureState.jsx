import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline, TransitionLine } from '../components/SlideLayout'

const PILLARS = [
  { title: 'Known Customer Engagement', sub: 'Every visitor recognized — anonymous or not' },
  { title: 'Account-Level Visibility', sub: 'The full buying group, mapped in real time' },
  { title: 'Intelligent Automation at Scale', sub: 'AI agents doing the heavy lifting' },
  { title: 'Connected Buying Journeys', sub: 'Marketing, sales, and web on one platform' },
]

const OUTCOMES = ['↑ Revenue Growth', '↑ Operational Efficiency', '↑ Share of Wallet']
const EASE = [0.25, 0.1, 0.25, 1]

export default function I07_FutureState() {
  return (
    <SlideLayout style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <SlideEyebrow color="var(--te-amber-soft)">Future State</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '6px', maxWidth: '980px' }}>
          Tomorrow, TE turns digital engagement into accelerated growth.
        </SlideHeadline>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '22px' }}>
          {OUTCOMES.map((o) => (
            <span key={o} style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--te-amber)', letterSpacing: '0.04em' }}>
              {o}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', width: '100%' }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.14, duration: 0.5, ease: EASE }}
              className="card-hover-blue"
              style={{
                background: 'var(--orange-glow)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-orange)',
                borderRadius: 'var(--radius)',
                padding: '18px 16px',
                minHeight: '150px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {p.title}
              </div>
              <div style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {p.sub}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 + PILLARS.length * 0.14 + 0.15, duration: 0.6 }}
          style={{
            marginTop: '20px',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--te-amber-soft)',
          }}
        >
          ↑ ↑ ↑&nbsp;&nbsp;One Unified Platform for Customer Engagement&nbsp;&nbsp;↑ ↑ ↑
        </motion.div>

        <div style={{ marginTop: '24px' }}>
          <TransitionLine delay={0.25 + PILLARS.length * 0.14 + 0.4}>
            Let me show you what that looks like — through the eyes of one customer, and one marketer.
          </TransitionLine>
        </div>
      </div>
    </SlideLayout>
  )
}
