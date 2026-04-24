import { useEffect, useRef } from 'react'

export default function CaseStudyModal({ title, role, skills, heroImage, isOpen, onClose, children }) {
  const overlayRef = useRef(null)
  const scanBarRef = useRef(null)
  const contentRef = useRef(null)
  const closeRef = useRef(null)
  const scanlineRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const overlay = overlayRef.current
      const scanBar = scanBarRef.current
      const content = contentRef.current
      const closeBtn = closeRef.current
      const scanline = scanlineRef.current

      overlay.style.opacity = '0'
      overlay.style.transform = 'none'
      scanBar.style.transform = 'translateY(-3px)'
      content.style.opacity = '0'
      content.style.transform = 'translateY(12px)'

      requestAnimationFrame(() => {
        overlay.style.transition = 'opacity 0.15s ease'
        overlay.style.opacity = '1'

        setTimeout(() => {
          scanline.style.transition = 'opacity 0.1s ease'
          scanline.style.opacity = '1'
          scanBar.style.transition = 'transform 0.5s linear'
          scanBar.style.transform = 'translateY(100vh)'

          setTimeout(() => {
            scanline.style.opacity = '0'
            content.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            content.style.opacity = '1'
            content.style.transform = 'translateY(0)'
            closeBtn.style.opacity = '1'
          }, 520)
        }, 150)
      })
    } else {
      document.body.style.overflow = ''
    }

    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleClose = () => {
    const overlay = overlayRef.current
    const content = contentRef.current
    const closeBtn = closeRef.current

    closeBtn.style.opacity = '0'
    content.style.transition = 'opacity 0.2s ease, transform 0.2s ease'
    content.style.opacity = '0'
    content.style.transform = 'translateY(8px)'

    setTimeout(() => {
      overlay.style.transition = 'transform 0.25s cubic-bezier(0.4, 0, 1, 1)'
      overlay.style.transformOrigin = 'center'
      overlay.style.transform = 'scaleY(0.02)'

      setTimeout(() => {
        overlay.style.transition = 'opacity 0.1s ease'
        overlay.style.opacity = '0'
        setTimeout(() => { onClose() }, 100)
      }, 250)
    }, 200)
  }

  if (!isOpen) return null

  return (
    <div className="modal__overlay" ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) handleClose() }}>
      {/* scan bar color: change background in modal__scanBar CSS to adjust */}
      <div className="modal__scanBar" ref={scanBarRef} />
      <div className="modal__scanline" ref={scanlineRef} />
      <div className="modal__content" ref={contentRef}>
        <div className="modal__hero">
        </div>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__role">&gt;&gt;{role}&lt;&lt;</p>
          <div className="modal__skills">
            {skills?.map((skill, i) => (
              <span key={i} className="modal__skill">{skill}</span>
            ))}
          </div>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
      <button className="modal__close" ref={closeRef} onClick={handleClose}>
        <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="9" x2="44" y2="9" stroke="currentColor" strokeWidth="2" />
        </svg>
        close project
        <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokeWidth="2" />
        </svg>
      </button>
    </div>
  )
}