import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'

const ACTORS = [
  { role: 'Design Engineer', pain: 'Disconnected experiences create friction in the buying journey' },
  { role: 'TE Marketing', pain: 'Limited visibility prevents action on customer demand' },
  { role: 'TE Sales Team', pain: 'Disassociated engagement limits understanding of customer intent' },
  { role: 'Distributor / Partner', pain: 'Manual processes slow execution and limit productivity' },
  { role: 'Procurement Buyer', pain: 'Legacy complexity limits agility and scale' },
]

const OUTCOMES = ['↑ Revenue Leakage', '↑ Slower Growth', '↓ Share of Wallet']
const EASE = [0.25, 0.1, 0.25, 1]

export default function I06_CurrentState() {
  return (
    <SlideLayout variant="muted" style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <SlideEyebrow color="var(--te-orange)">Current State</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '6px', maxWidth: '960px' }}>
          Today&rsquo;s digital ecosystem jeopardizes TE&rsquo;s opportunity.
        </SlideHeadline>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '22px' }}>
          {OUTCOMES.map((o) => (
            <span key={o} style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--te-orange)', letterSpacing: '0.04em' }}>
              {o}
            </span>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', width: '100%' }}>
          {ACTORS.map((a, i) => (
            <motion.div
              key={a.role}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.5, ease: EASE }}
              className="card-hover"
              style={{
                background: 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid var(--border-subtle)',
                borderTop: '3px solid rgba(255,109,34,0.6)',
                borderRadius: 'var(--radius)',
                padding: '16px 15px',
                minHeight: '160px',
              }}
            >
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>
                {a.role}
              </div>
              <div style={{ fontSize: '0.8rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {a.pain}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 + ACTORS.length * 0.12 + 0.2, duration: 0.6 }}
          style={{
            marginTop: '22px',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          ↑ ↑ ↑&nbsp;&nbsp;Siloed Systems &amp; Data&nbsp;&nbsp;↑ ↑ ↑
        </motion.div>
      </div>
    </SlideLayout>
  )
}
