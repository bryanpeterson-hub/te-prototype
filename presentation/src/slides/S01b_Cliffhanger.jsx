import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PrecisionBackground from '../components/PrecisionBackground'
import Flatline from '../components/Flatline'

const EASE = [0.25, 0.1, 0.25, 1]

export default function S01b_Cliffhanger() {
  const [revealed, setRevealed] = useState(false)

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
        cursor: revealed ? 'default' : 'pointer',
      }}
      onClick={
        revealed
          ? undefined
          : (e) => {
              e.stopPropagation()
              setRevealed(true)
            }
      }
    >
      <PrecisionBackground density={48} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
          style={{
            fontSize: 'clamp(1.2rem, 2.3vw, 1.9rem)',
            fontWeight: 300,
            lineHeight: 1.5,
            color: 'var(--text-primary)',
          }}
        >
          Lauren left the site. She said &ldquo;maybe later.&rdquo; In most marketing organizations
          — in most platforms — this is where the story ends. Lauren is gone. The opportunity is
          invisible. <span style={{ color: 'var(--text-muted)' }}>Nobody even knew she was there.</span>
        </motion.p>

        <div style={{ margin: '40px 0 8px' }}>
          <Flatline alive={revealed} />
        </div>

        <AnimatePresence>
          {revealed && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 2.05rem)',
                fontWeight: 600,
                lineHeight: 1.4,
                color: 'var(--te-orange)',
                marginTop: '18px',
              }}
            >
              Let&rsquo;s rewind — and show you what happens when the platform is working.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {!revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
            zIndex: 1,
          }}
        >
          Click to rewind →
        </motion.div>
      )}
    </div>
  )
}
