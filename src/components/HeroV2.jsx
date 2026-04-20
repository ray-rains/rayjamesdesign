import Dial from './Dial.jsx'
import Scanner from './Scanner.jsx'
import OscillatingHalftone from './OscillatingHalftone.jsx'
import Chain from './Chain.jsx'
import ChaosText from './ChaosText.jsx'

// inside JSX, replace <div id="subjectScan"><pre></pre></div> with:
<Scanner objUrl="./uwak.obj" />

export default function HeroV2() {
  return (
    <>
        <div id='top__spacer'></div>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="/logo.svg" alt="logo" width="44" height="48" />
        </div>
        <div className="navbar_right">
          <ul className="navbar__links">
            <li>WORKS</li>
            <li>CREATIVE EXPLORATIONS</li>
            <li>MANIFESTO</li>
          </ul>
        </div>
        <div className="navbar__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__column">
          <Dial navState={0} />
          <div id="hero__borderElements">
            <div id="hero__borderElementsTopCorner"></div>
            <div id="hero__borderElementsBottomBoxes">
              <div id="hero_borderElementsBarCode">
                <div id="scan1"></div>
                <div id="scan2"></div>
                <div id="scan3"></div>
                <div id="scan4"></div>
              </div>
              <div id="hero_borderElementsBottomTallBar">
                <div id="hero_borderElementsTallBarTop"></div>
                <div id="hero_borderElementsTallBarMiddle"></div>
                <div id="hero_borderElementsTallBarBottom"></div>
              </div>
            </div>
          </div>
          <div className="hero__row hero__row--design">
            <div className="hero__designBox">
              <h1 className="hero__design">DESIGN</h1>
              <p className="hero__sub">is meant not to organize <ChaosText /></p>
            </div>
            <div className="hero__gridPlaceholder">
              <OscillatingHalftone />
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
              <div className="hero__navigate">
                NAVIGATE
                <div className="hero__navigateCard">
                    <div className="hero__navigateCircle">
                    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                </div>
                </div>
              </div>
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
                <Chain />
              </div>
              <div className="hero__title-text">
               <p className="hero__role">&gt;&gt;product design&lt;&lt;</p>
               <p className="hero__quote">
                 the act of creation touches on the sublime. somewhere between the moments of thought and action, real magic happens.
               </p>
              </div>
            </div>
          </div>
          <div className="hero__bottomRow">
              <div className="hero__globe">
                <svg viewBox="0 0 48  48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="24" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="24" cy="24" rx="9" ry="24" fill="none" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="24" cy="24" rx="18" ry="24" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="0" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="2" />
                  <line x1="24" y1="0" x2="24" y2="48" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="hero__ring">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="23" fill="none" stroke="currentColor" strokeWidth="1." />
                </svg>
              </div>
              <div className="hero__hatchBar">
                <img src="/hazardBar.svg" alt="hazard lines" width="624" height="48" />              
              </div>
            </div>
{/* 
          <div id="subjectScan">
            <Scanner objUrl="/uwak.obj" />
          </div> 
*/}
        </div>
      </section>
    </>
  )
}