import { motion } from 'framer-motion'
import CountUp from './CountUp'

const EASE = [0.25, 0.1, 0.25, 1]

const ATTRIBUTION = [
  { touch: 'Organic Search', pct: 100, color: 'var(--te-steel)' },
  { touch: 'TE Agent', pct: 88, color: 'var(--te-orange)' },
  { touch: 'White Paper', pct: 72, color: 'var(--te-orange)' },
  { touch: 'Nurture Email', pct: 58, color: 'var(--te-amber)' },
  { touch: 'Engineer Call', pct: 40, color: 'var(--te-amber)' },
]

const FUNNEL = [
  { stage: 'Marketing Qualified', value: 100 },
  { stage: 'Sales Accepted', value: 64 },
  { stage: 'Opportunity', value: 38 },
]

function Panel({ title, children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: EASE }}
      style={{
        background: 'var(--bg-card)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius)',
        padding: '18px 20px',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <div
        style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--te-orange-soft)',
          marginBottom: '16px',
        }}
      >
        {title}
      </div>
      {children}
    </motion.div>
  )
}

export default function PipelineDashboard({ baseDelay = 0.2 }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '14px',
      }}
    >
      {/* Multi-touch attribution — spans left column */}
      <Panel title="Multi-Touch Attribution · Lauren's Journey" delay={baseDelay} style={{ gridRow: '1 / 3' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          {ATTRIBUTION.map((row, i) => (
            <div key={row.touch}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '5px',
                }}
              >
                <span>{row.touch}</span>
                <span style={{ color: 'var(--text-muted)' }}>{i === 0 ? 'entry' : `${row.pct}%`}</span>
              </div>
              <div
                style={{
                  height: '10px',
                  background: 'var(--bg-card-alt)',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: row.pct / 100 }}
                  transition={{ delay: baseDelay + 0.3 + i * 0.1, duration: 0.7, ease: EASE }}
                  style={{
                    height: '100%',
                    width: '100%',
                    transformOrigin: 'left',
                    background: `linear-gradient(90deg, ${row.color}, var(--te-amber))`,
                    borderRadius: '5px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Panel>

      {/* Conversion forecast */}
      <Panel title="Einstein Conversion Forecast" delay={baseDelay + 0.15}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
          <div style={{ fontSize: '2.6rem', fontWeight: 800, color: 'var(--te-orange)', lineHeight: 1 }}>
            <CountUp value={42} decimals={0} suffix="%" duration={1400} />
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>likelihood · HALE Launch</div>
        </div>
        <div style={{ marginTop: '14px', height: '8px', background: 'var(--bg-card-alt)', borderRadius: '4px', overflow: 'hidden' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0.42 }}
            transition={{ delay: baseDelay + 0.5, duration: 0.9, ease: EASE }}
            style={{
              height: '100%',
              width: '100%',
              transformOrigin: 'left',
              background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
              borderRadius: '4px',
            }}
          />
        </div>
      </Panel>

      {/* Funnel + attributed pipeline */}
      <Panel title="Funnel · Marketing-Generated Pipeline" delay={baseDelay + 0.3}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {FUNNEL.map((f, i) => (
            <div key={f.stage} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', width: '120px', flexShrink: 0 }}>
                {f.stage}
              </span>
              <div style={{ flex: 1, height: '8px', background: 'var(--bg-card-alt)', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: f.value / 100 }}
                  transition={{ delay: baseDelay + 0.5 + i * 0.1, duration: 0.6, ease: EASE }}
                  style={{
                    height: '100%',
                    width: '100%',
                    transformOrigin: 'left',
                    background: 'var(--te-orange-soft)',
                    borderRadius: '4px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: baseDelay + 0.9, duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            STRADA Whisper · this quarter
          </span>
          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--te-amber)' }}>
            <CountUp value={2.4} decimals={1} prefix="$" suffix="M" duration={1600} />
          </span>
        </motion.div>
      </Panel>
    </div>
  )
}
