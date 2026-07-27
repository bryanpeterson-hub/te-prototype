import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'
import Flatline from '../components/Flatline'

const PANELS = [
  {
    name: 'Lauren',
    role: 'The customer',
    img: '/assets/lauren.png',
    body:
      'Dense PDF catalogs. Websites built for everyone — which means built for no one. A 200,000-part product line and no clear path to the right answer. When she doesn\u2019t find it in 90 seconds, she leaves. And she never comes back.',
  },
  {
    name: 'Elena',
    role: 'The marketer',
    img: '/assets/elena.png',
    body:
      'CRM data in Sales Cloud. Web data in analytics. Campaign data in Marketing Cloud. None of it talking in real time. She has a leadership meeting next week and needs a pipeline number — and all she has is a click-through rate. That\u2019s not a story. That\u2019s a spreadsheet.',
    emphasized: true,
  },
  {
    name: 'James',
    role: 'The seller',
    img: '/assets/james.png',
    body:
      'A weekly lead list. A name. A company. No context, no signal, no story. He\u2019s flying blind while his best prospect is on the website right now.',
  },
]

const EASE = [0.25, 0.1, 0.25, 1]

export default function S01a_WorldBefore() {
  return (
    <SlideLayout style={{ justifyContent: 'center' }}>
      <div style={{ width: '100%' }}>
        <SlideEyebrow>Section 01 · The World Before</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '24px', maxWidth: '900px' }}>
          Three people, one broken status quo.
        </SlideHeadline>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1fr', gap: '14px', alignItems: 'stretch' }}>
          {PANELS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.18, duration: 0.55, ease: EASE }}
              className="card-hover"
              style={{
                background: p.emphasized ? 'var(--orange-glow)' : 'var(--bg-card)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: p.emphasized ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius)',
                padding: '20px 22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '58px',
                    height: '58px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    overflow: 'hidden',
                    background: p.emphasized
                      ? 'linear-gradient(135deg, rgba(255,109,34,0.45), rgba(255,176,32,0.32))'
                      : 'rgba(255,255,255,0.08)',
                    border: p.emphasized ? '1px solid var(--border-orange)' : '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>{p.name}</span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: p.emphasized ? 'var(--te-orange)' : 'var(--text-muted)',
                    }}
                  >
                    {p.role}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{ marginTop: '26px' }}
        >
          <Flatline alive={false} />
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              marginTop: '6px',
            }}
          >
            An anonymous signal, going nowhere
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  )
}
