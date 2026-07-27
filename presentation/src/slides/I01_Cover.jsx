import { motion } from 'framer-motion'
import PrecisionBackground from '../components/PrecisionBackground'

const EASE = [0.25, 0.1, 0.25, 1]

export default function I01_Cover() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--grad-slide)',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 55% 45% at 85% 12%, rgba(255,109,34,0.22) 0%, transparent 65%), radial-gradient(ellipse 45% 50% at 6% 88%, rgba(255,176,32,0.14) 0%, transparent 60%)',
        }}
      />
      <PrecisionBackground density={56} />

      {/* Left: title */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '8vh 4vw 8vh 6vw',
          borderRight: '1px solid var(--border-subtle)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: 'var(--te-orange-soft)',
            textTransform: 'uppercase',
            marginBottom: '26px',
          }}
        >
          Art of the Possible &nbsp;·&nbsp; July 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
          style={{
            fontSize: 'clamp(2.4rem, 4.6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.06,
            color: 'var(--text-primary)',
            margin: 0,
            marginBottom: '18px',
            letterSpacing: '-0.01em',
          }}
        >
          Project Blueprint
          <br />
          <span style={{ color: 'var(--te-orange)' }}>Demonstration</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          style={{
            width: '64px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
            transformOrigin: 'left',
            marginBottom: '24px',
            borderRadius: '2px',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{
            fontSize: 'clamp(0.98rem, 1.35vw, 1.18rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '460px',
          }}
        >
          Reimagining how TE connects with every engineer &mdash; from the first anonymous click to
          closed pipeline, on one platform built for precision.
        </motion.p>
      </div>

      {/* Right: co-brand lockup */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6vh 6vw',
          background: 'rgba(0,0,0,0.16)',
        }}
      >
        <motion.img
          src="/logos/te-logo.png"
          alt="TE Connectivity"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: EASE }}
          style={{ width: '100%', maxWidth: '320px', height: 'auto', borderRadius: '6px', marginBottom: '40px' }}
        />

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          style={{ width: '44px', height: '1px', background: 'var(--border-mid)', marginBottom: '24px' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
        >
          <div
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            In partnership with
          </div>
          <img src="/logos/salesforce-cloud.png" alt="Salesforce" style={{ width: '150px', height: 'auto' }} />
        </motion.div>
      </div>
    </div>
  )
}
