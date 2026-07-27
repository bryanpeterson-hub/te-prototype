import { motion } from 'framer-motion'
import { SlideLayout } from '../components/SlideLayout'

const EASE = [0.25, 0.1, 0.25, 1]
const lineStyle = {
  fontSize: 'clamp(2rem, 3.7vw, 3.35rem)',
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: '-0.01em',
  color: 'var(--text-primary)',
  margin: 0,
}

export default function I03_PlaybookEvolve() {
  return (
    <SlideLayout center>
      <div style={{ maxWidth: '1120px', display: 'flex', flexDirection: 'column', gap: '2.2vh' }}>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.65, ease: EASE }}
          style={lineStyle}
        >
          Every B2B marketing leader knows their playbook has to evolve.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          style={{
            width: '84px',
            height: '3px',
            margin: '0 auto',
            background: 'linear-gradient(90deg, var(--te-orange), var(--te-amber))',
            borderRadius: '2px',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.65, ease: EASE }}
          style={lineStyle}
        >
          The hard part is figuring out{' '}
          <span style={{ color: 'var(--te-orange-soft)' }}>what to change</span>,{' '}
          <span style={{ color: 'var(--te-orange-soft)' }}>what to keep</span>, and{' '}
          <span style={{ color: 'var(--te-orange-soft)' }}>where to start</span>.
        </motion.p>
      </div>
    </SlideLayout>
  )
}
