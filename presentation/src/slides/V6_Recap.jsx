import { useState } from 'react'
import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline } from '../components/SlideLayout'
import PipelineDashboard from '../components/PipelineDashboard'
import Typewriter from '../components/Typewriter'

const EASE = [0.25, 0.1, 0.25, 1]

const NARRATIVE = [
  'Not replacing Elena\u2019s expertise. Amplifying it.',
  'She typed one sentence — \u201CCreate a campaign targeting Lead Systems Architects in Aerospace interested in high-speed backplanes\u201D — and Einstein drafted the copy, the landing page, and the segment.',
  'She didn\u2019t guess the send time or the next-best action. She directed the strategy — and the platform executed it with intelligence.',
]

const TRANSITION = 'She built this in a single morning. Let that land.'

export default function V6_Recap() {
  const [revealNext, setRevealNext] = useState(false)
  const gate = !revealNext

  return (
    <div
      style={{ width: '100%', height: '100%', cursor: gate ? 'pointer' : 'default' }}
      onClick={
        gate
          ? (e) => {
              e.stopPropagation()
              setRevealNext(true)
            }
          : undefined
      }
    >
      <SlideLayout variant="muted" style={{ justifyContent: 'center' }}>
        <div style={{ width: '100%' }}>
          <SlideEyebrow color="var(--te-amber-soft)">
            Vignette 6 of 6 · Elena&rsquo;s Command Center · The Recap
          </SlideEyebrow>
          <SlideHeadline size="md" style={{ marginBottom: '22px' }}>
            The cockpit that runs it all.
          </SlideHeadline>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.82fr 1.18fr',
              gap: '34px',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {NARRATIVE.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.25, duration: 0.55, ease: EASE }}
                  style={{
                    fontSize: i === 0 ? 'clamp(1.05rem, 1.5vw, 1.3rem)' : 'clamp(0.92rem, 1.3vw, 1.08rem)',
                    fontWeight: i === 0 ? 700 : 300,
                    color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {line}
                </motion.p>
              ))}

              <div style={{ marginTop: '4px', minHeight: '2em' }}>
                {revealNext ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '34px', height: '1px', background: 'linear-gradient(90deg, var(--te-amber-soft), transparent)', flexShrink: 0 }} />
                    <span style={{ fontSize: '1rem', color: 'var(--te-amber-soft)', fontStyle: 'italic' }}>
                      <Typewriter text={TRANSITION} speed={34} startDelay={120} />
                    </span>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.35, 0.85, 0.35] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    style={{ fontSize: '0.76rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
                  >
                    Click anywhere to reveal the moment →
                  </motion.div>
                )}
              </div>
            </div>

            <PipelineDashboard baseDelay={0.5} />
          </div>
        </div>
      </SlideLayout>
    </div>
  )
}
