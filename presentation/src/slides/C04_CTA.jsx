import { motion } from 'framer-motion'
import { SlideLayout, SlideEyebrow, SlideHeadline, SlideBody } from '../components/SlideLayout'

export default function C04_CTA() {
  return (
    <SlideLayout center>
      <div style={{ width: '100%', maxWidth: '880px' }}>
        <SlideEyebrow>Section 08 · Where TE&rsquo;s Story Starts</SlideEyebrow>
        <SlideHeadline size="xl">Let&rsquo;s engineer the foundation together.</SlideHeadline>
        <SlideBody delay={0.35} style={{ margin: '20px auto 30px', maxWidth: '780px' }}>
          For 80 years, TE has engineered connections that hold their signal in the harshest
          environments on earth. The next step is bringing that same precision to how TE connects
          with every engineer who visits &mdash; and it starts with the data foundation beneath it.
        </SlideBody>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="card-hover"
          style={{
            background: 'var(--bg-card)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--border-orange)',
            borderRadius: 'var(--radius)',
            padding: '26px 30px',
            textAlign: 'left',
            maxWidth: '660px',
            margin: '0 auto',
          }}
        >
          <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
            Architecture &amp; Roadmap Working Session
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Bring your technical team together with ours to design the Data 360 unification layer
            specific to TE&rsquo;s environment, and map your phased path to Agentforce Marketing —
            at your pace, on your terms.
          </div>
          <div style={{ fontSize: '0.95rem', color: 'var(--te-orange-soft)', fontStyle: 'italic' }}>
            &ldquo;We&rsquo;ll map exactly how your data gets unified, which use cases you unlock
            first, and what the roadmap looks like to get there — together.&rdquo;
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          style={{
            marginTop: '32px',
            fontSize: 'clamp(1.05rem, 1.7vw, 1.35rem)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            lineHeight: 1.5,
          }}
        >
          Lauren&rsquo;s story started with a single anonymous click.
          <br />
          <span style={{ color: 'var(--te-orange)' }}>Your story starts here.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.6 }}
          style={{
            marginTop: '26px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--te-orange-soft)',
          }}
        >
          Every connection counts.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.55, duration: 0.6 }}
          style={{
            marginTop: '18px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
          }}
        >
          TE Connectivity × Salesforce · Precision at the Edge · July 2026
        </motion.div>
      </div>
    </SlideLayout>
  )
}
