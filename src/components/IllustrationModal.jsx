import { useEffect, useRef, useState } from 'react'

const illustrations = [
  { src: '/Wastelands.pdf', alt: 'Wastelands Issue 1' },
  { src: '/Manifestation.pdf', alt: 'Contribution to Apollo City Comics Shadow Anthology' },
  { src: '/page0016-17.jpg', alt: 'Yes, a Jojo reference' },
  { src: '/GunborgSkirmisherFull.jpg', alt: 'Inaugural card art for FullAuto TCG' },
  { src: '/WastelandLullaby.jpg', alt: 'Stars on the midnight ranges' },
  { src: '/GoblinParty.jpg', alt: 'When you are tight with the neighbors downstairs' },
  { src: '/OniFull.jpg', alt: 'Magitek worldbuilding exercise' },
  { src: '/WitchBoltColors.jpg', alt: 'Future collaborations with DS artist Witch Bolt' },
  { src: '/Wastelands2', alt: 'This will eventually come out...' },
  { src: '/Lucid1.jpg', alt: 'In collaboration with MatteBlackStudios for the release of LUCID' },
  { src: '/Lucid2.jpg', alt: 'In collaboration with MatteBlackStudios for the release of LUCID' },
  { src: '/FrenetikaTheMage.jpg', alt: 'In collaboration with the release of the Frenetika PC game' },
  { src: '/Friedrich.jpg', alt: 'I definitely do NOT have a favorite OC in the Wastelands series' },
  { src: '/GallowanCommission.jpg', alt: 'The best fantasy race from the mind of the best Dungeon Master in the world' },
  { src: '/Memoriam.jpg' },
  { src: '/Sketch.jpg' },
]

export default function IllustrationModal({ isOpen, onClose }) {
  const overlayRef = useRef(null)
  const scanBarRef = useRef(null)
  const contentRef = useRef(null)
  const closeRef = useRef(null)
  const scanlineRef = useRef(null)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const navigate = (e) => {
    const midpoint = window.innerWidth / 2
    if (e.clientX < midpoint) {
      setLightboxIndex(i => (i - 1 + illustrations.length) % illustrations.length)
    } else {
      setLightboxIndex(i => (i + 1) % illustrations.length)
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="modal__overlay illus__overlay" ref={overlayRef}>
        <div className="modal__scanBar" ref={scanBarRef} />
        <div className="modal__scanline" ref={scanlineRef} />
        <div className="modal__content" ref={contentRef}>
          <h2 className="modal__title">ILLUSTRATION</h2>
          <p className="modal__role">&gt;&gt;lesser known comics / freelance&lt;&lt;</p>
          <div className="illus__grid">
            {illustrations.map((ill, i) => (
              <div
                key={i}
                className="illus__thumb"
                onClick={() => openLightbox(i)}
              >
                <img src={ill.src} alt={ill.alt} />
              </div>
            ))}
          </div>
        </div>
        <button className="modal__close" ref={closeRef} onClick={handleClose}>
          <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="9" x2="44" y2="9" stroke="currentColor" strokeWidth="2" />
          </svg>
          close portfolio
          <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="9" x2="44" y2="9" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {lightboxOpen && (
        <div className="illus__lightbox" onClick={navigate}>
          <button className="illus__lightboxClose" onClick={(e) => { e.stopPropagation(); closeLightbox() }}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <div className="illus__lightboxArrowLeft">&#8592;</div>
          <img
            className="illus__lightboxImg"
            src={illustrations[lightboxIndex].src}
            alt={illustrations[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="illus__lightboxArrowRight">&#8594;</div>
        </div>
      )}
    </>
  )
}