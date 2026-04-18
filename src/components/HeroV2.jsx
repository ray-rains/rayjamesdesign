import Dial from './Dial.jsx'

export default function HeroV2() {
  return (
    <>
        <div id='top__spacer'></div>
      <nav className="navbar">
        <div className="navbar__logo">RR</div>
        <ul className="navbar__links">
          <li>WORK</li>
          <li>WORK</li>
          <li>WORK</li>
        </ul>
        <div className="navbar__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__column">
          <div className="hero__row hero__row--design">
            <div className="hero__designBox">
              <h1 className="hero__design">DESIGN</h1>
              <p className="hero__sub">is meant not to organize chaos;</p>
            </div>
            <div className="hero__gridPlaceholder">
              <svg viewBox="0 0 365 200" xmlns="http://www.w3.org/2000/svg">
              </svg>
            </div>
          </div>

        <div className='hero__separator'></div>


          <div className="hero__row hero__row--navigate">
            <div className="hero__chevrons">
                <svg viewBox="0 0 284 156" xmlns="http://www.w3.org/2000/svg">
                    {/* Row 1 */}
                    <polygon points="0,0 41.25,0 95,72 53.75,72" fill="currentColor" />
                    <polygon points="94.67,0 135.92,0 189.67,72 148.42,72" fill="currentColor" />
                    <polygon points="189.33,0 230.58,0 284.33,72 243.08,72" fill="currentColor" />
                    {/* Row 2 */}
                    <polygon points="53.75,84 95,84 41.25,156 0,156" fill="currentColor" />
                    <polygon points="148.42,84 189.67,84 135.92,156 94.67,156" fill="currentColor" />
                    <polygon points="243.08,84 284.33,84 230.58,156 189.33,156" fill="currentColor" />
                </svg>
            </div>
            <div className="hero__navigateText">
              <p className="hero__but">but to</p>
              <h2 className="hero__navigate">NAVIGATE</h2>
              <p className="hero__it">it</p>
            </div>
            <div className="hero__hatch">
              <svg viewBox="0 0 110 175" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(-45)">
                    <line x1="8" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="10" />
                  </pattern>
                </defs>
                <rect width="110" height="175" fill="url(#hatch)" />
              </svg>
            </div>
          </div>

          <div className="hero__blackBox">
            <h3 className="hero__name">RAYMOND RAINSBERGER</h3>
            <div className="hero__row hero__row--title">
              <div className="hero__chain">
                <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="20" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="50" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="80" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="110" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="140" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="170" cy="20" rx="16" ry="12" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <p className="hero__role">&gt;&gt;product design&lt;&lt;</p>
            </div>
            <p className="hero__quote">
              the act of creation touches on the sublime. somewhere between the acts of thought and action, real magic happens.
            </p>
            <div className="hero__bottomRow">
              <div className="hero__globe">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="12" cy="12" rx="4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="hero__ring">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="hero__hatchBar">
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hatchBar" patternUnits="userSpaceOnUse" width="8" height="20" patternTransform="rotate(-45)">
                      <line x1="0" y1="0" x2="0" y2="20" stroke="currentColor" strokeWidth="4" />
                    </pattern>
                  </defs>
                  <rect width="300" height="20" fill="url(#hatchBar)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Dial navState={0} />
      </section>
    </>
  )
}