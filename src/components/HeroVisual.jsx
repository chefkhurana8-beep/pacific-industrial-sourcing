/**
 * HeroVisual — the signature element.
 *
 * No photography was supplied and the brief rules out gradients, patterns and
 * stock imagery. The motif is your actual logo mark: two slate containers at
 * the bottom, one bronze container offset above. Scaled 3x for the hero.
 * Static, no animation.
 */

// Your actual logo mark: 2 slate at bottom, 1 bronze above.
// Exact proportions from the original: x=8,34,21 y=34,14, width=22, height=16.
// Scaled 2.5x to match the original spacing without bloat.
const SLATE_BOXES = [
  { x: 20, y: 85 },  // left bottom (8 * 2.5)
  { x: 85, y: 85 },  // right bottom (34 * 2.5)
]

const BRONZE_BOX = { x: 52.5, y: 35 } // center, above (21 * 2.5, 14 * 2.5)

const W = 55   // 22 * 2.5
const H = 40   // 16 * 2.5

export default function HeroVisual() {
  return (
    <div aria-hidden="true" style={{ width: '100%', maxWidth: 300 }}>
      <svg viewBox="0 0 160 130" width="100%" role="presentation" style={{ display: 'block' }}>
        {/* Two slate containers at the bottom. */}
        {SLATE_BOXES.map((box, i) => (
          <rect
            key={`slate-${i}`}
            x={box.x}
            y={box.y}
            width={W}
            height={H}
            rx="4.5"
            fill="none"
            stroke="var(--color-primary-700)"
            strokeWidth="4"
          />
        ))}

        {/* Bronze container in original logo position — centered above the slate boxes. */}
        <rect
          x={BRONZE_BOX.x}
          y={BRONZE_BOX.y}
          width={W}
          height={H}
          rx="4.5"
          fill="none"
          stroke="var(--brand-accent)"
          strokeWidth="4"
        />
      </svg>
    </div>
  )
}
