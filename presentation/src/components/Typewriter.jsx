import { useState, useEffect } from 'react'

/**
 * Types out `text` on mount, then calls onDone when finished.
 * Shows a blinking caret while typing.
 */
export default function Typewriter({
  text,
  speed = 42,
  startDelay = 350,
  onDone,
  style = {},
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (count >= text.length) {
      if (!done) {
        setDone(true)
        onDone?.()
      }
      return
    }
    const t = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(t)
  }, [started, count, text.length, speed, done, onDone])

  return (
    <span style={style}>
      {text.slice(0, count)}
      <span
        aria-hidden
        style={{
          display: 'inline-block',
          width: '0.06em',
          marginLeft: '0.04em',
          borderRight: '0.06em solid var(--te-orange)',
          animation: done ? 'none' : 'caretBlink 1s steps(1) infinite',
          opacity: done ? 0 : 1,
        }}
      >
        &nbsp;
      </span>
    </span>
  )
}
