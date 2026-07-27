import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'

const EASE = [0.25, 0.1, 0.25, 1]

const LINES = [
  'Lauren received the follow-up at exactly the right moment. The content was technically precise. The experience felt like TE knew her. She scheduled the engineer call. The deal moved.',
  'Elena\u2019s \u201CHigh-Altitude Launch\u201D campaign attributed $2.4M in pipeline to the STRADA Whisper line — with full multi-touch visibility from Lauren\u2019s first anonymous click to James\u2019s closed opportunity.',
  'And every engineer like Lauren who visits te.com gets that same precision experience — not because Elena built it for each one, but because the platform learned, adapted, and delivered it automatically.',
]

export default function C01_Resolution() {
  return (
    <SlideLayout center>
      <div style={{ maxWidth: '900px' }}>
        <SlideEyebrow>Section 08 · The Resolution</SlideEyebrow>
        <SlideHeadline size="md" style={{ marginBottom: '26px' }}>
          Ever since then&hellip;
        </SlideHeadline>
        {LINES.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.4, duration: 0.7, ease: EASE }}
            style={{
              fontSize: 'clamp(1rem, 1.55vw, 1.28rem)',
              fontWeight: i === 1 ? 500 : 300,
              color: i === 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
              lineHeight: 1.65,
              marginBottom: '18px',
            }}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </SlideLayout>
  )
}
