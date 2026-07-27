import { motion } from 'framer-motion'
import PrecisionBackground from './PrecisionBackground'

/**
 * Live-demo handoff slate. Animated concentric rings + a "live" recording dot,
 * with the demo title and a one-line description. Feels like a stage curtain.
 */
export default function DemoPlaceholder({ number, total = 6, title, description }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--grad-slide)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6vh 8vw',
        textAlign: 'center',
      }}
    >
      <PrecisionBackground density={52} />

      {/* Animated rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ scale: [1, 1.5 + i * 0.3, 1], opacity: [0.14, 0, 0.14] }}
          transition={{ duration: 3, delay: i * 0.6, repeat: Infinity, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: `${20 + i * 14}vmin`,
            height: `${20 + i * 14}vmin`,
            borderRadius: '50%',
            border: '1px solid var(--te-orange)',
            pointerEvents: 'none',
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          color: 'var(--te-orange)',
          textTransform: 'uppercase',
          marginBottom: '22px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            background: 'var(--te-orange)',
            animation: 'pulseDot 1.6s ease-in-out infinite',
          }}
        />
        Vignette {number} of {total} · Live Demo
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontSize: 'clamp(2.6rem, 6.5vw, 5.4rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
          lineHeight: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        LIVE
        <span style={{ color: 'var(--te-orange)' }}> DEMO</span>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          width: '90px',
          height: '2px',
          background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
          margin: '28px 0 24px',
          position: 'relative',
          zIndex: 1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          fontSize: 'clamp(1.05rem, 1.9vw, 1.5rem)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '14px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {title}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.5 }}
        style={{
          fontSize: '0.92rem',
          fontWeight: 300,
          color: 'var(--text-muted)',
          maxWidth: '660px',
          lineHeight: 1.6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {description}
      </motion.div>
    </div>
  )
}
