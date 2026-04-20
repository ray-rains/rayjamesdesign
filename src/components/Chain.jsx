import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Chain() {
  const svgRef = useRef(null)

  useEffect(() => {
    const ellipses = svgRef.current.querySelectorAll('.chain-ellipse')
    const arrowClip = svgRef.current.querySelector('.chain-arrow-clip')

    // Ellipses expand from center
    ellipses.forEach((el) => {
      gsap.fromTo(el,
        { attr: { cx: 172.5 } },
        { attr: { cx: 172.5 + parseFloat(el.dataset.offset) }, duration: 1.2, ease: 'power3.out', delay: 0.6 }
      )
    })

    // Top lines expand from center outward
    gsap.fromTo('#chain-top-left',
      { attr: { x1: 172.5, x2: 172.5 } },
      { attr: { x1: 85.5, x2: 172.5 }, duration: 1.2, ease: 'power3.out', delay: 0.6 }
    )
    gsap.fromTo('#chain-top-right',
      { attr: { x1: 172.5, x2: 172.5 } },
      { attr: { x1: 172.5, x2: 259.5 }, duration: 1.2, ease: 'power3.out', delay: 0.6 }
    )

    // Bottom lines expand from center outward
    gsap.fromTo('#chain-bot-left',
      { attr: { x1: 172.5, x2: 172.5 } },
      { attr: { x1: 85.5, x2: 172.5 }, duration: 1.2, ease: 'power3.out', delay: 0.6 }
    )
    gsap.fromTo('#chain-bot-right',
      { attr: { x1: 172.5, x2: 172.5 } },
      { attr: { x1: 172.5, x2: 259.5 }, duration: 1.2, ease: 'power3.out', delay: 0.6 }
    )

    // Arrow clip scales from left
    gsap.fromTo(arrowClip,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power3.out', transformOrigin: 'left center' }
    )
  }, [])

  const cx = 172.5
  const cy = 47
  const rx = 29
  const ry = 32
  const offsets = [-90, -70, -50, -30, -10, 10, 30, 50, 70, 90]

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 345 94"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <defs>
        <clipPath id="arrow-clip">
          <rect
            className="chain-arrow-clip"
            x="12"
            y="0"
            width="333"
            height="94"
            style={{ transformOrigin: '12px 47px' }}
          />
        </clipPath>
      </defs>

      {/* Arrow line and head inside clip */}
      <g clipPath="url(#arrow-clip)">
        <line
          x1="12"
          y1={cy}
          x2="333"
          y2={cy}
          stroke="currentColor"
          strokeWidth="1"
        />
        <polygon
          points="333,42 345,47 333,52"
          fill="currentColor"
        />
      </g>

      {/* Top line left */}
      <line
        id="chain-top-left"
        x1={cx}
        y1={cy - ry}
        x2={cx}
        y2={cy - ry}
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Top line right */}
      <line
        id="chain-top-right"
        x1={cx}
        y1={cy - ry}
        x2={cx}
        y2={cy - ry}
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Bottom line left */}
      <line
        id="chain-bot-left"
        x1={cx}
        y1={cy + ry}
        x2={cx}
        y2={cy + ry}
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Bottom line right */}
      <line
        id="chain-bot-right"
        x1={cx}
        y1={cy + ry}
        x2={cx}
        y2={cy + ry}
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Ellipses */}
      {offsets.map((offset, i) => (
        <ellipse
          key={i}
          className="chain-ellipse"
          data-offset={offset}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}