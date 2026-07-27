import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1]
const PHOTOS = ['/assets/ty-1.png', '/assets/ty-2.png', '/assets/ty-3.png']

export default function I02_ThankYou() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--grad-slide)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12vh 5vw',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '22px',
          width: '100%',
          maxWidth: '1180px',
          height: '100%',
          maxHeight: '620px',
        }}
      >
        {PHOTOS.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: EASE }}
            style={{
              borderRadius: '6px',
              overflow: 'hidden',
              background: 'var(--bg-card)',
            }}
          >
            <img
              src={src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + 3 * 0.12, duration: 0.6, ease: EASE }}
          style={{
            borderRadius: '6px',
            background: 'var(--te-orange)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '0 8% ',
          }}
        >
          <span
            style={{
              color: '#ffffff',
              fontWeight: 800,
              lineHeight: 1.02,
              fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
              letterSpacing: '-0.01em',
            }}
          >
            Thank
            <br />
            You
          </span>
        </motion.div>
      </div>
    </div>
  )
}
