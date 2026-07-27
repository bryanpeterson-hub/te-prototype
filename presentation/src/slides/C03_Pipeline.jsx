import { motion } from 'framer-motion'
import PrecisionBackground from '../components/PrecisionBackground'
import CountUp from '../components/CountUp'

const EASE = [0.25, 0.1, 0.25, 1]

export default function C03_Pipeline() {
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
        textAlign: 'center',
        padding: '6vh 8vw',
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
          background: 'radial-gradient(ellipse 55% 55% at 50% 45%, rgba(255,109,34,0.22) 0%, transparent 65%)',
        }}
      />
      <PrecisionBackground density={64} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--te-orange-soft)',
            marginBottom: '20px',
          }}
        >
          Marketing-Generated Pipeline · STRADA Whisper
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
          style={{
            fontSize: 'clamp(4.5rem, 15vw, 12rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}
        >
          <CountUp value={2.4} decimals={1} prefix="$" suffix="M" duration={1800} />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
            margin: '30px auto',
            borderRadius: '2px',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 1.7vw, 1.35rem)',
            fontWeight: 300,
            color: 'var(--text-secondary)',
            maxWidth: '720px',
          }}
        >
          One product launch. One quarter. Fully attributed — from Lauren&rsquo;s first anonymous
          click to James&rsquo;s closed opportunity. A number Elena can walk into any leadership
          meeting with.
        </motion.p>
      </div>
    </div>
  )
}
