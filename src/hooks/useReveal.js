import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-triggered reveal.
 *
 * The design brief calls for restrained motion — 120–200ms transitions, no
 * bounce, no scale-pop. This gives a section a single fade-and-settle as it
 * enters the viewport and then leaves it alone.
 *
 * Honours prefers-reduced-motion by revealing immediately with no transition.
 */
export function useReveal({ threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    // Fail-safe. The observer does not fire while the document is hidden — a
    // link opened in a background tab, for instance — and content must never
    // depend on it to become visible. Reveal regardless after a short delay.
    const failSafe = setTimeout(() => setRevealed(true), 1200)

    return () => {
      observer.disconnect()
      clearTimeout(failSafe)
    }
  }, [threshold, rootMargin])

  return [ref, revealed]
}
