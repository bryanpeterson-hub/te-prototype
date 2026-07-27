import { useEffect, useRef, useState } from 'react'

/**
 * Counts up from 0 to `value` over `duration` ms when it mounts (or when
 * `start` flips true). Formats with a prefix/suffix and fixed decimals.
 */
export default function CountUp({
  value,
  duration = 1500,
  decimals = 1,
  prefix = '',
  suffix = '',
  start = true,
  style = {},
}) {
  const [display, setDisplay] = useState(0)
  const raf = useRef(0)

  useEffect(() => {
    if (!start) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [value, duration, start])

  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', ...style }}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
