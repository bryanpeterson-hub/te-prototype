import { motion } from 'framer-motion'

/**
 * Orange CTA button. Purely visual (click anywhere advances the deck),
 * so it renders as a styled span to avoid nested click semantics.
 */
export default function CTAButton({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span
        className="cta-hover"
        style={{
          display: 'inline-block',
          background: 'var(--te-orange)',
          color: '#fff',
          padding: '13px 28px',
          borderRadius: 'var(--radius)',
          fontWeight: 600,
          fontSize: '0.86rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          cursor: 'pointer',
        }}
      >
        {children}
      </span>
    </motion.div>
  )
}
