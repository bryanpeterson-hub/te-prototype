import { motion } from 'framer-motion'

const EASE = [0.25, 0.1, 0.25, 1]

// A flat baseline, and an ECG-style pulse waveform.
const FLAT = 'M0,70 L1000,70'
const PULSE =
  'M0,70 L360,70 L390,70 L410,32 L440,108 L470,52 L495,70 L640,70 L660,70 L678,44 L700,96 L720,70 L1000,70'

/**
 * Section 1 metaphor: an anonymous visitor's signal that flatlines (gray, still)
 * then — after the cliffhanger — pulses back to life in TE orange.
 */
export default function Flatline({ alive = false }) {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <svg
        viewBox="0 0 1000 140"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 'clamp(90px, 14vh, 140px)', display: 'block' }}
      >
        <defs>
          <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--te-orange)" />
            <stop offset="100%" stopColor="var(--te-amber)" />
          </linearGradient>
          <filter id="pulseGlow" x="-10%" y="-60%" width="120%" height="220%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flat baseline */}
        <motion.path
          d={FLAT}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="2"
          animate={{ opacity: alive ? 0 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
        />

        {/* Live pulse */}
        {alive && (
          <motion.path
            d={PULSE}
            fill="none"
            stroke="url(#pulseGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#pulseGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0.85, 1] }}
            transition={{
              pathLength: { duration: 1.1, ease: EASE },
              opacity: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
            }}
          />
        )}
      </svg>
    </div>
  )
}
