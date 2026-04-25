import Dial from './Dial.jsx'
import Scanner from './Scanner.jsx'
import OscillatingHalftone from './OscillatingHalftone.jsx'
import Chain from './Chain.jsx'
import ChaosText from './ChaosText.jsx'
import { useEffect, useRef, useState } from 'react'
import CaseStudyModal from './CaseStudyModal.jsx'

export default function HeroV2() {
    const [navState, setNavState] = useState(0)
    const [activeModal, setActiveModal] = useState(null)
    const aboutRowRef = useRef(null)
    const [submitState, setSubmitState] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

    const handleSubmit = async () => {
      setSubmitState('sending')
      try {
        // your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1500)) // placeholder
        setSubmitState('success')
      } catch {
        setSubmitState('error')
      }
    }

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

    useEffect(() => {
      const cards = document.querySelectorAll('.works__card')
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card--visible')
            setTimeout(() => {
              entry.target.classList.add('card--revealed')
            }, 800)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2 }
      )
      cards.forEach(card => observer.observe(card))
      return () => observer.disconnect()
    }, [])

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
    <div className='background__grid' />
        <div id='top__spacer' id="top"></div>
      <nav className="navbar">
        <div className="navbar__logo">
          <a className="logo" href="#top" onClick={() => { setNavState(0); setActiveModal(null) }}><img src="/logo.svg" alt="logo" width="44" height="48" /></a>
        </div>
        <div className="navbar_right">
          <ul className="navbar__links">
            <li><a href="#works" onClick={() => { setNavState(1);  setActiveModal(null) }}>WORKS</a></li>
            <li><a href="#creative" onClick={() => { setNavState(2); setActiveModal(null) }}>CREATIVE EXPLORATIONS</a></li>
            <li><a href="#manifesto" onClick={() => { setNavState(3); setActiveModal(null) }}>MANIFESTO</a></li>
          </ul>
        </div>
        <div className="navbar__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Dial navState={navState}/>
      </nav>

      <section className="hero">
        <div className="hero__column">
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
        </div>
      </section>

      <section className="about">
        <div className='float-column'>
          <div className="float-rect" style={{ '--x': '80px', width: '18px', height: '120px', background: '#000', animationDuration: '8s', animationDelay: '0s' }} />
          <div className="float-rect" style={{ '--x': '140px', width: '18px', height: '80px', background: '#000', animationDuration: '11s', animationDelay: '-3s' }} />
          <div className="float-rect" style={{ '--x': '260px', width: '14px', height: '100px', background: '#000', animationDuration: '9s', animationDelay: '-1s' }} />
          <div className="float-rect" style={{ '--x': '380px', width: '20px', height: '140px', background: '#000', animationDuration: '13s', animationDelay: '-5s' }} />
          <div className="float-rect" style={{ '--x': '460px', width: '12px', height: '60px', background: '#000', animationDuration: '7s', animationDelay: '-2s' }} />
          <div className="float-rect" style={{ '--x': '540px', width: '16px', height: '110px', background: '#000', animationDuration: '10s', animationDelay: '-4s' }} />
          <div className="float-rect" style={{ '--x': '620px', width: '22px', height: '90px', background: '#000', animationDuration: '12s', animationDelay: '-6s' }} />
          <div className="float-rect" style={{ '--x': '700px', width: '14px', height: '130px', background: '#000', animationDuration: '9s', animationDelay: '-1.5s' }} />
        </div>
        <div className="about__column">
          <div className='about__hatch'>
              <svg viewBox="0 0 33 298" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="hatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(-45)">
                    <line x1="8" y1="0" x2="0" y2="0" stroke="currentColor" strokeWidth="10" />
                  </pattern>
                </defs>
                <rect width="33" height="298" fill="url(#hatch)" />
              </svg>
          </div>
          <div className="about__row fadeIn--ready" ref={aboutRowRef}>            
            <div className="about__content">
              <h6 className="about__headline">I am a Product Designer from Toledo, Ohio</h6>
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
            <div className="works__card card--ready">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" >
                  <img src='/SonyBanner.webp' alt='Sony Electronics DTC Platform'></img>
                </div>
                <div className="works__cardAccent" >
                  <div className='works__AccentLogo'>
                    <img src='/SonyAccent.webp' alt='Sony brands under DTC banner'></img>
                  </div>
                </div>
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
              <div className="works__readMore" onClick={() => setActiveModal('sony')}>
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
            <div className="works__card card--ready">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" >
                  <img src='/LeimertBanner.webp' alt='Leimert Ad Image'></img>
                 </div> 
                <div className="works__cardAccent" >
                  <div style={{ left: '-52px' }} className='works__AccentImage'>
                    <video width="289" height="289" autoPlay loop muted playsInline>
                      <source src="/LeimertAccent.mp4" type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='works__AccentLogo'>
                    <img src='/LeimertAccentLogo.webp' alt='Leimert logo'></img>
                  </div>
                </div>
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
              <div className="works__readMore" onClick={() => setActiveModal('leimert')}>
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
            <div className="works__card card--ready">
              <div className="works__cardImage">
                <div className="works__imagePlaceholder" >
                  <img src='/211Banner.webp' alt='211: Heist UI Process'></img>
                </div>
                <div className="works__cardAccent">
                  <div className='works__AccentLogo'>
                    <img src='/211Accent.webp' alt='211 logo'></img>
                  </div>
                </div>
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
              <div className="works__readMore" /*onClick={() => setActiveModal('211')}*/>
                  <svg width="44" height="18" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="9" x2="44" y2="9" stroke="black" strokewidth="2" />
                  </svg> 
                  <p>development in progress</p>
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
            <span className="section__label">CREATIVE EXPLORATI<br></br>ONS</span>
          </div>
          <div className="creative__bentoBox1">
            <div className="bento1__top">
              <div className="bento1__topLeft">

              </div>
              <div className="bento1__topRight">
                <div className='bento1__header'>ANIMATION</div>
              </div>
            </div>
            <div className="bento1__bottom"></div>
          </div>
          <div className='creative__code'>
            <div className='creative__codeLeft'>
              <div className="creative__barcode">
                <img src="/barCodeCreative.svg" alt="barcode" width="208" height="198" />   
              </div>
              <div className='creative__neocities'>subject: r.rainsberger / unit_designation: uwak
                scan_protocol: v3.7.alpha // astr4l_data_conversion

                ph4se 01 // organic_substrate_mapping
                  the living form was first rendered in 2d sigil-space. 
                  graphite-to-vector transcription. contour harvesting 
                  complete. biological noise: filtered. soul-geometry: 
                  preserved.

                ph4se 02 // dimensional_extrusion
                  planar data folded into z-axis. mesh bones threaded 
                  through the subject's silhouette like copper wire 
                  through wet clay. vertex count: acceptable. 
                  poly-flesh: stable.

                ph4se 03 // astr4l_dissolution
                  blender-chamber engaged. the subject's form subjected 
                  to uv-unwrapping. skin peeled back into flat maps. 
                  normals baked. what was once a body is now 
                  a data-texture draped over hollow geometry.

                ph4se 04 // obj_extraction
                  .obj filetype: confirmed. the subject exported 
                  from simulation into raw coordinate space. 
                  no longer flesh. no longer drawing. 
                  pure positional data. 
                  x / y / z.

                ph4se 05 // runtime_manifestation
                  three.js invoked. the coordinate lattice 
                  summoned back from the void into screenspace. 
                  the subject now exists as gl_buffer_data. 
                  rendered per frame. 
                  alive only while the loop runs.

                  status: c0nv3rs10n_compl3te
                  w4rning: subject no longer biological
                  w4rning: subject no longer drawable  
                  w4rning: subject is now r34l-time geometry
                  
                  // end_transmission
              </div>
            </div>
            <div className='creative__codeRight'>
              <div id="subjectScan">
                <Scanner objUrl="/uwak.obj" />
              </div> 
            </div>
          </div>
          <div className='creative__bentoBox2'>
            <div className='bento2__Left'>
              <div className='bento2__Header'>ILLUSTRATION</div>
              <div className='bento2__LeftTop'>
                <div className='bento2__Title'>
                  <p>Freelancer with Lesser Known Comics since 2021</p>
                </div>
                <div className='bento2__Roles'>
                  <div className='bento2__RolesLeft'>
                    <p>
                      Comicbook Illustration<br/>
                      Character Design<br/>
                      Storyboarding
                    </p>
                  </div>
                  <div className='bento2__RolesRight'>
                    <p>
                      WIPs:<br/>
                      Full Auto TCG<br/>
                      Tongue Twizards<br/>
                      Wastelands #2
                    </p>
                  </div>
                </div>
              </div>
              <div className='bento2__LeftBottom'>
                <div style={{marginLeft: '10px'}} className='bento2__Panels'>
                  <img src='/Oni.jpg' alt='Oni Warlock' />
                </div>
                <div style={{marginLeft: '20px'}} className='bento2__Panels'>
                  <img src='/LucidHol.jpg' alt='Panel from LUCID tie-in comic' />
                </div>
                <div style={{marginLeft: '28px'}} className='bento2__Panels'>
                  <img src='/Skirmisher.jpg' alt='Card art for Full Auto TCG' />
                </div>
                <div style={{marginLeft: '28px'}} className='bento2__Panels'>
                  <img src='/WitchBolt.jpg' alt='WitchBolt character art' />
                </div>
                <div style={{marginLeft: '20px'}} className='bento2__Panels'>
                  <img src='/WastelandsIssue2.jpg' alt='Preview of Wastelands Issue no.2' />
                </div>
              </div>
            </div>
            <div className='bento2__Right'>
              <div className='bento2__RightTop'>
                <div className='bento2__Arrow'></div>
              </div>
              <div className='bento2__RightBottom'>
                <div className='bento2__ViewMore'>
                  
                </div>
                <div className='bento2__Works'>

                </div>
              </div>
            </div>
          </div>
          <div className='bento2__floatBox'>
            <img src='/GunBorgSkirmisher.jpg' alt='Card art for Full Auto TCG'></img>
          </div>
        </div>
      </section>


      <section className='manifesto' id='manifesto'>
        <div className='manifesto__column'>
          <div className="section__header3">
            <span className="section__number">03</span>
            <span className="section__label">MANI<br></br>FESTO</span>
          </div>

  <div className='manifesto__panel'>
      <div className='manifesto__panelLeft'>
        <div className='manifesto__marker'></div>
        <div className='manifesto__crosshair'>
          <svg viewBox="0 0 80 172" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="40" cy="86" rx="18" ry="36" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="86" x2="80" y2="86" stroke="currentColor" strokeWidth="1" />
            <line x1="40" y1="0" x2="40" y2="172" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div style={{position: 'absolute', top: '215px', left: '16px'}} className='manifesto__dash'></div>
        <div style={{position: 'absolute', top: '349px', left: '16px'}}className='manifesto__dash'></div>
        <div style={{position: 'absolute', top: '362px', left: '16px'}}className='manifesto__dash'></div>
        <div className='manifesto__panelBottom'>
          <div className='manifesto__square'></div>
          <div className='manifesto__square'></div>
          <div className='manifesto__square'></div>
        </div>
      </div>
      <div className='manifesto__panelRight'>
        <p className='manifesto__text'>I believe</p>
        <p className='manifesto__body'>
          That magic is everywhere: not as a supernatural force, but in the space between The Question and The Answer. I believe that thorough exploration and explanation does not reduce the mystery of the grand design - be it shaped by hand or natural consequence.
        </p>
        <p className='manifesto__body'>
          And I believe that the only Universal Truth shared among all humans is The Satisfaction Of A Job Well Done.
        </p>
        <p className='manifesto__text'>The act of creation</p>
        <p className='manifesto__body'>
          Is not unique to humans nor to life. It is the one thing that every participant of the cosmic clockwork shares in common. Every variable in the equation contributes to the turning of the wheel. To be human is to hold the privilege of the ability to take note of these greater machinations.
        </p>
        <p className='manifesto__center'>To exist is to create.<br/>To be human is to stress the details.<br/>The process is the point.</p>
      </div>
    </div>
  </div>
</section>

<section className='contact' id='contact'>
  <div className='contact__column'>
    <h2 className='contact__header'>CONTACT</h2>
    <div className='contact__barcode'>
      <img src='/ContactBarcode.svg' alt='barcode' width='100%' />
    </div>
    <div className='contact__body'>
      <div className='contact__left'>
        <img src='/ContactBottomBars.svg' alt="flourish" />
      </div>
      <div className='contact__formArea'>
        <div className='contact__socials'>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>LINKEDIN</a>
          </div>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>TWITTER</a>
          </div>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>INSTAGRAM</a>
          </div>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>YOUTUBE</a>
          </div>
        </div>
        <div className='contact__socials'>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>RESUME</a>
          </div>
          <div className='contact__links'>
            <div className='contact__linkSquare' />
            <a href='#'>EMAIL</a>
          </div>
        </div>
        <div className='contact__fields'>
          <label className='contact__label'>EMAIL</label>
          <input className='contact__input' type='email' />
          <div className='contact__bottom'>
            <div className='contact__message'>
              <label className='contact__label'>MESSAGE</label>
              <textarea className='contact__textarea'></textarea>
            </div>
            <div className='contact__submit'>
              <div 
                className={`contact__send ${submitState === 'sending' ? 'contact__send--sending' : ''}`}
                onClick={handleSubmit}
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="2,2 22,12 2,22" fill="currentColor" />
                </svg>
              </div>
              <div className={`contact__status contact__status--${submitState}`}>
                {submitState === 'success' && (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="4,12 10,18 20,6" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                )}
                {submitState === 'error' && (
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact__right'>
        <div className='contact__cross'>
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className='contact__globe'>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="24" cy="24" rx="12" ry="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="24" cy="24" rx="18" ry="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <ellipse cx="24" cy="24" rx="6" ry="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <line x1="2" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="2" x2="24" y2="46" stroke="currentColor" strokeWidth="1.5" />

          </svg>
        </div>
      </div>
    </div>
  </div>
          

      </section>

        <CaseStudyModal
          title="SONY ELECTRONICS"
          role="WEB DESIGNER"
          skills={['SYSTEMS DESIGN', 'UX RESEARCH & DESIGN', 'BRANDING & ICONOGRAPHY']}
          heroImage="/SonyBanner.webp"
          isOpen={activeModal === 'sony'}
          onClose={() => setActiveModal(null)}
        >
          <p>Your case study content here</p>
        </CaseStudyModal>

        <CaseStudyModal
          title="LEIMERT MOUNTAINEERING"
          role="MARKETING PARTNER"
          skills={['ANIMATION', 'ILLUSTRATION', 'VISUAL DEVELOPMENT']}
          heroImage="/LeimertBanner.webp"
          isOpen={activeModal === 'leimert'}
          onClose={() => setActiveModal(null)}
        >
          <p>Your case study content here</p>
        </CaseStudyModal>

        <CaseStudyModal
          title="THE FACTORY STUDIOS"
          role="UI&UX DESIGNER/DEVELOPER"
          skills={['SYSTEMS DESIGN', 'UNREAL ENGINE DEV', 'VISUAL DEVELOPMENT']}
          heroImage="/211Banner.webp"
          isOpen={activeModal === '211'}
          onClose={() => setActiveModal(null)}
        >
          <p>Your case study content here</p>
        </CaseStudyModal>
    </>
  )
}