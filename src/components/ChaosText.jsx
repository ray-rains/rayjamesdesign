import { useEffect, useRef, useState } from 'react'

export default function ChaosText() {
  const boxRef = useRef(null)
  const textRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (boxRef.current) boxRef.current.style.transform = 'translateX(0%)'
      setTimeout(() => {
        setVisible(true)
        const glitchIn = () => {
          const slices = textRef.current?.querySelectorAll('.chaos-slice')
          if (!slices) return
          let step = 0
          const steps = 6
          const interval = setInterval(() => {
            slices.forEach((slice) => {
              const shift = (Math.random() - 0.5) * 16
              slice.style.transform = `translateX(${shift}px)`
              slice.style.opacity = Math.random() > 0.3 ? '1' : '0'
            })
            step++
            if (step >= steps) {
              clearInterval(interval)
              slices.forEach((slice) => {
                slice.style.transform = 'translateX(0px)'
                slice.style.opacity = '1'
              })
            }
          }, 80)
        }
        setTimeout(glitchIn, 50)
      }, 500)
    }, 100)
  }, [])

  useEffect(() => {
    if (!visible) return
    let timeout
    const scheduleGlitch = () => {
      const delay = 3000 + Math.random() * 5000
      timeout = setTimeout(() => {
        runGlitch()
        scheduleGlitch()
      }, delay)
    }
    const runGlitch = () => {
      const slices = textRef.current?.querySelectorAll('.chaos-slice')
      if (!slices) return
      const duration = 20
      const steps = 4
      let step = 0
      const interval = setInterval(() => {
        slices.forEach((slice) => {
          const shift = (Math.random() - 0.1) * 12
          slice.style.transform = `translateX(${shift}px)`
        })
        step++
        if (step >= steps) {
          clearInterval(interval)
          slices.forEach((slice) => {
            slice.style.transform = 'translateX(0px)'
          })
        }
      }, duration)
    }
    scheduleGlitch()
    return () => clearTimeout(timeout)
  }, [visible])

  const slices = [
    { clip: 'polygon(0 0%, 100% 0%, 100% 20%, 0 20%)' },
    { clip: 'polygon(0 20%, 100% 20%, 100% 40%, 0 40%)' },
    { clip: 'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)' },
    { clip: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)' },
    { clip: 'polygon(0 80%, 100% 80%, 100% 100%, 0 100%)' },
  ]

  return (
    <span className="chaos-wrapper">
      <span ref={boxRef} className="chaos-box" />
      {visible && (
        <span ref={textRef} className="chaos-text-stack" aria-hidden="true">
          {slices.map((s, i) => (
            <span
              key={i}
              className="chaos-slice"
              style={{
                clipPath: s.clip,
                transition: 'transform 0.01s linear',
              }}
            >
              chaos;
            </span>
          ))}
        </span>
      )}
      <span className="chaos-real">chaos;</span>
    </span>
  )
}