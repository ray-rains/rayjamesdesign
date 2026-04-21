import Dial from './Dial.jsx'
import Scanner from './Scanner.jsx'
import OscillatingHalftone from './OscillatingHalftone.jsx'
import Chain from './Chain.jsx'
import ChaosText from './ChaosText.jsx'
import { useEffect, useRef, useState } from 'react'

// inside JSX, replace <div id="subjectScan"><pre></pre></div> with:
<Scanner objUrl="./uwak.obj" />

export default function HeroV2() {
    const [navState, setNavState] = useState(0)
    const aboutRowRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn--active')
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (aboutRowRef.current) observer.observe(aboutRowRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
        <div id='top__spacer' id="top"></div>
      <nav className="navbar">
        <div className="navbar__logo">
          <a className="logo" href="#top" onClick={() => setNavState(0)}><img src="/logo.svg" alt="logo" width="44" height="48" /></a>
        </div>
        <div className="navbar_right">
          <ul className="navbar__links">
            <li><a href="#works" onClick={() => setNavState(1)}>WORKS</a></li>
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
          <Dial navState={navState} />
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

      <section className="about">
        <div className="about__column">
          <div className="about__row fadeIn--ready" ref={aboutRowRef}>            <div className="about__content">
              <h2 className="about__headline">I am a Product Designer from Toledo, Ohio</h2>
              <p className="about__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="about__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="about__imageFrame">
              <div className="about_imageBracketLeft"></div>
              <img className="about_portrait" src="/portrait.webp" alt="An inverted pixelated image of a climber ascending the North Couloir of Mt. Thunderbolt"></img>
              <div className="about_imageBracketRight"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="works" id="works">
        <div className="works__column">

        <div className="section__header">
          <span className="section__number">01</span>
          <span className="section__label">WORKS</span>
        </div>

        {/*-- sony --*/}
            <div className="works__card">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" />
                <div className="works__cardAccent" />
              </div>
              <div className="works__cardInfo">
                <div className="works__role">
                  <svg width="575" height="6" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="5" x2="575" y2="5" stroke="black" strokewidth="2" />
                  </svg>         
                  WEB DESIGNER
                </div>
                <div className="works__bottomRow">
                  <div className="works__company">
                    <img src="/Sony_logo.png" alt="Sony Logo"></img>
                  </div>
                  <div className="works__meta">
                    <p className="works__skill">SYSTEMS DESIGN</p>
                    <p className="works__skill">UX RESEARCH & DESIGN</p>
                    <p className="works__skill">BRANDING & ICONOGRAPHY</p>
                </div>
                </div>
              </div>
              <div className="works__readMore">
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
                  <p>open project details</p>
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
              </div>
            </div>

        {/*-- leimert --*/}
            <div className="works__card">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" />
                <div className="works__cardAccent" />
              </div>
              <div className="works__cardInfo">
                <div className="works__role">
                  <svg width="519" height="6" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="5" x2="575" y2="5" stroke="black" strokewidth="2" />
                  </svg>         
                  MARKETING PARTNER
                </div>
                <div className="works__bottomRow">
                  <div className="works__company">
                    <img src="/Leimert_logo.png" alt="Leimert Mountaineering Logo"></img>
                  </div>
                  <div className="works__meta">
                    <p className="works__skill">ANIMATION</p>
                    <p className="works__skill">ILLUSTRATION</p>
                    <p className="works__skill">VISUAL DEVELOPMENT</p>
                </div>
                </div>
              </div>
              <div className="works__readMore">
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
                  <p>open project details</p>
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
              </div>
            </div>

        {/*-- 211 --*/}
            <div className="works__card">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" />
                <div className="works__cardAccent" />
              </div>
              <div className="works__cardInfo">
                <div className="works__role">
                  <svg width="440" height="6" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="5" x2="575" y2="5" stroke="black" strokewidth="2" />
                  </svg>         
                  UI&UX DESIGNER/DEVELOPER
                </div>
                <div className="works__bottomRow">
                  <div className="works__company">
                    <img src="/TheFactory_logo.png" alt="The Factory Studios Logo"></img>
                  </div>
                  <div className="works__meta">
                    <p className="works__skill">SYSTEMS DESIGN</p>
                    <p className="works__skill">UNREAL ENGINE DEV</p>
                    <p className="works__skill">VISUAL DEVELOPMENT</p>
                </div>
                </div>
              </div>
              <div className="works__readMore">
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
                  <p>open project details</p>
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
              </div>
            </div>

        </div>
      </section>

      <section className="creative" id="creative">
        <div className="creative__column">
          <div className="section__header2">
            <span className="section__number">02</span>
            <span className="section__label">WORKS</span>
          </div>
        </div>
      </section>
    </>
  )
}