import { motion } from 'framer-motion'
import PrecisionBackground from '../components/PrecisionBackground'

const EASE = [0.25, 0.1, 0.25, 1]

/**
 * The "Precision at the Edge" story spine, rendered as an animated customer
 * journey (Bullhorn-style): a flowing orange line, sequential nodes, and beat
 * labels alternating above/below the curve, with Lauren anchored bottom-left.
 */
const BEATS = [
  {
    k: 'Once upon a time',
    t: 'Lauren Bailey, Lead Systems Architect at Omega Aerospace, is designing a HALE UAV for 60,000 ft — and needs a backplane connector that holds signal integrity.',
  },
  {
    k: 'Every day',
    t: 'She hunts through dense PDF catalogs on sites not built for her precision — while Elena’s campaigns disappear into the void.',
  },
  {
    k: 'Until one day',
    t: 'Lauren lands on te.com. Anonymous. But the platform notices not just that she’s there — but how.',
  },
  {
    k: 'Because of that',
    t: 'TE Agent engages with context. Lauren shares her specs: 56 Gbps, 100 Ω, VITA-72.',
  },
  {
    k: 'Because of that',
    t: 'It recommends STRADA Whisper and explains why. Data 360 stitches her identity, scores her 88/100, flags Omega Tier-1.',
    emph: true,
  },
  {
    k: 'Because of that',
    t: 'She says “maybe later.” Einstein routes her to a technical nurture path, serves the VITA-72 report, and alerts James.',
    emph: true,
  },
  {
    k: 'Until finally',
    t: 'The follow-up lands at exactly the right moment. Lauren books the engineer call. The deal moves.',
    emph: true,
  },
  {
    k: 'And ever since',
    t: '$2.4M in attributed pipeline — and every engineer like Lauren gets that same precision experience, automatically.',
    emph: true,
  },
]

const X0 = 9
const X1 = 91
const Y_UP = 33
const Y_DOWN = 53

export default function C00_Journey() {
  const n = BEATS.length
  const step = (X1 - X0) / (n - 1)
  const pts = BEATS.map((b, i) => ({
    x: X0 + i * step,
    y: i % 2 === 0 ? Y_UP : Y_DOWN,
    up: i % 2 === 0,
    ...b,
  }))

  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const dx = (p1.x - p0.x) / 2
    d += ` C ${p0.x + dx} ${p0.y} ${p1.x - dx} ${p1.y} ${p1.x} ${p1.y}`
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--grad-slide)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <PrecisionBackground density={26} />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{
          position: 'absolute',
          top: '7vh',
          left: '5vw',
          zIndex: 5,
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--te-orange)',
        }}
      >
        The “Precision at the Edge” Story
      </motion.div>

      {/* Hero: Lauren */}
      <motion.img
        src="/assets/lauren.png"
        alt="Lauren"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
        style={{
          position: 'absolute',
          left: '1%',
          bottom: 0,
          height: '52%',
          width: 'auto',
          zIndex: 2,
          filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.45))',
          pointerEvents: 'none',
        }}
      />

      {/* Journey line */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
      >
        <motion.path
          d={d}
          fill="none"
          stroke="var(--te-orange)"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 2.1, ease: EASE }}
        />
      </svg>

      {/* Nodes + labels */}
      {pts.map((p, i) => {
        const nodeDelay = 0.5 + i * 0.24
        return (
          <div key={i}>
            {/* Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: nodeDelay, duration: 0.4, ease: EASE }}
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                width: p.emph ? '22px' : '16px',
                height: p.emph ? '22px' : '16px',
                borderRadius: '50%',
                background: p.emph ? 'var(--te-orange)' : 'var(--bg-dark)',
                border: p.emph ? '2px solid var(--te-orange)' : '2px solid rgba(255,109,34,0.55)',
                boxShadow: p.emph ? '0 0 0 6px rgba(255,109,34,0.16), 0 0 18px rgba(255,109,34,0.6)' : 'none',
              }}
            />

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: p.up ? -10 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: nodeDelay + 0.12, duration: 0.5, ease: EASE }}
              style={{
                position: 'absolute',
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: p.up ? 'translate(-50%, calc(-100% - 24px))' : 'translate(-50%, 24px)',
                width: '168px',
                textAlign: 'center',
                zIndex: 4,
                textShadow: '0 1px 10px rgba(0,0,0,0.65)',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: p.emph ? 'var(--te-orange)' : 'var(--te-orange-soft)',
                  marginBottom: '7px',
                }}
              >
                {p.k}
              </div>
              <div style={{ fontSize: '0.74rem', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.42 }}>
                {p.t}
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
