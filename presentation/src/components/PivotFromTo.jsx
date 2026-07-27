import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1]

/**
 * FROM fades in first, then a visual sweep line crosses, then TO fades in.
 */
export default function PivotFromTo({
  fromLabel = 'From',
  fromItems = [],
  toLabel = 'To',
  toItems = [],
  baseDelay = 0.1,
  centerTo = false,
  centerFrom = false,
}) {
  const sweepDelay = baseDelay + 0.7
  const toDelay = sweepDelay + 0.5

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {/* FROM */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: baseDelay, duration: 0.6, ease: EASE }}
        style={{ marginBottom: '24px' }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            marginBottom: '12px',
            textAlign: centerFrom ? 'center' : 'left',
          }}
        >
          {fromLabel}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: centerFrom ? 'center' : 'flex-start',
          }}
        >
          {fromItems.map((item) => (
            <span
              key={item}
              className="card-hover"
              style={{
                fontSize: '0.92rem',
                fontWeight: 300,
                color: 'var(--text-muted)',
                background: 'var(--bg-card-alt)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius)',
                padding: '9px 15px',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Sweep line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 0.5] }}
        transition={{ delay: sweepDelay, duration: 0.55, ease: EASE }}
        style={{
          height: '2px',
          width: '100%',
          transformOrigin: 'left',
          background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber), var(--te-steel))',
          margin: '4px 0 24px',
          borderRadius: '2px',
        }}
      />

      {/* TO */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: toDelay, duration: 0.6, ease: EASE }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--te-amber-soft)',
            marginBottom: '12px',
            textAlign: centerTo ? 'center' : 'left',
          }}
        >
          {toLabel}
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: centerTo ? 'center' : 'flex-start',
          }}
        >
          {toItems.map((item, i) => (
            <motion.span
              key={item}
              className="card-hover-blue"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: toDelay + 0.1 + i * 0.09, duration: 0.4, ease: EASE }}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                background: 'var(--orange-glow)',
                border: '1px solid var(--border-orange)',
                borderRadius: 'var(--radius)',
                padding: '9px 15px',
              }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
