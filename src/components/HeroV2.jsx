import Dial from './Dial.jsx'
import Scanner from './Scanner.jsx'
import OscillatingHalftone from './OscillatingHalftone.jsx'
import Chain from './Chain.jsx'
import ChaosText from './ChaosText.jsx'
import { useEffect, useRef, useState } from 'react'
import CaseStudyModal from './CaseStudyModal.jsx'
import IllustrationModal from './IllustrationModal.jsx'

export default function HeroV2() {
    const [navState, setNavState] = useState(0)
    const [activeModal, setActiveModal] = useState(null)
    const aboutRowRef = useRef(null)
    const [submitState, setSubmitState] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
    const [illustrationModalOpen, setIllustrationModalOpen] = useState(false)
const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/mdabndwd', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitState('success');
        e.target.reset();

        // optional: reset back to idle after a delay
        setTimeout(() => setSubmitState('idle'), 3000);
      } else {
        setSubmitState('error');
      }
    } catch (err) {
      setSubmitState('error');
    }
  };


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
                I craft systems that carry a strong sense of narrative and cohesion.</p>
              <p className="about__body">
                I spent 4 years at <b>Sony</b> elevating the user experience of the 
                DTC platform and have worked with other brands to integrate storytelling
                into their design.
              </p>
              <p className="about__body">
                I have been educated by the passions that I have gathered throughout my life.
                When I am not with my family, I am as deep into the alpine and as high
                on a wall as my hands and feet will allow. Any time left over is either spent
                studying anatomy and animation, or UX and front-end development. I live for the pursuit
                of craft, and the self-understanding that the process of improvement brings.
              </p>
              <p className="about__body">
                I am open to both <b>full-time</b> and <b>contract</b> roles.
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
                <video autoPlay loop muted playsInline>
                  <source width='217px' height='100%' src="/WiWiWiShroom.mp4" type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="bento1__topRight">
                <div className='bento1__header'>ANIMATION</div>
                  <video autoPlay loop muted playsInline>
                  <source width='551px' height='252px' src="/Wastelands.mp4" type="video/mp4"></source>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="bento1__bottom">
              <img src='/Manphibian.gif' alt='Official Mellow, Manphibian 5.14d Daniel Woods video' width='100%'/>
            </div>
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
                <div className='bento2__Arrow'>
                  <img src='/arrow.svg' alt='open arrow'/>
                </div>
              </div>
              <div className='bento2__RightBottom'>
                <div className='bento2__ViewMore' onClick={() => setIllustrationModalOpen(true)}>
                  <p className='bento2__ViewMoreText'>VIEW MORE</p>
                </div>
                <div className='bento2__Works'>
                  <div className='works__textRight'>
                    <p><u>SDCC 2024</u><br/>
                      Panelist</p>
                  </div>
                  <div className='works__textLeft'>
                    <p><u>Wastelands</u><br/>
                    Writer<br/>
                    Illustrator</p>
                  </div>
                  <div className='works__textRight'>
                    <p><u>Darkness<br/>
                      Anthology</u><br/>
                      Contributor</p>
                  </div>
                  <div className='works__textLeft'>
                    <p><u>Junior<br/>
                    Reporter</u><br/>
                    Storyboard<br/>
                    Artist</p>
                  </div>
                  <div style={{position: 'absolute', left: '8px', bottom: '8px'}}>
                    <p>...</p>
                  </div>
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
          <a href='https://www.linkedin.com/in/rayjamesdesign/' className='contact__links'>
            <div className='contact__linkSquare' />
            LINKEDIN
          </a>
          <a href='https://x.com/bundokbreezy' className='contact__links'>
            <div className='contact__linkSquare' />
            TWITTER
          </a>
          <a href='https://www.instagram.com/bundok_breezy/' className='contact__links'>
            <div className='contact__linkSquare' />
            INSTAGRAM
          </a>
          <a href='https://www.youtube.com/@Bundok_Breezy' className='contact__links'>
            <div className='contact__linkSquare' />
            YOUTUBE
          </a>
        </div>
        <div className='contact__socials'>
          <a href='/RaymondRainsbergerResume.pdf' className='contact__links'>
            <div className='contact__linkSquare' />
            RESUME
          </a>
          <a href='mailto:raymond.rainsberger@gmail.com' className='contact__links'>
            <div className='contact__linkSquare' />
            EMAIL
          </a>
        </div>
          <form className='contact__fields' onSubmit={handleSubmit}>
                <label className='contact__label'>EMAIL</label>
      <input
        className='contact__input'
        type='email'
        name='email'
        placeholder='sender identification'
        required
      />

      <div className='contact__bottom'>
        <div className='contact__message'>
          <label className='contact__label'>MESSAGE</label>
          <textarea
            className='contact__textarea'
            name='message'
            placeholder='inquire within'
            required
          />
        </div>

        <div className='contact__submit'>
          <button
            type="submit"
            disabled={submitState === 'sending'}
            className={`contact__send ${
              submitState === 'sending' ? 'contact__send--sending' : ''
            }`}
          >
            <svg viewBox="0 0 24 24">
              <polygon points="2,2 22,12 2,22" fill="currentColor" />
            </svg>
          </button>

          <div className={`contact__status contact__status--${submitState}`}>
            {submitState === 'success' && (
              <svg viewBox="0 0 24 24">
                <polyline
                  points="4,12 10,18 20,6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
              </svg>
            )}

            {submitState === 'error' && (
              <svg viewBox="0 0 24 24">
                <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2.5" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            )}
          </div>
        </div>
      </div>
        </form>
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
          heroImage="/SonyCaseStudyBanner.png"
          isOpen={activeModal === 'sony'}
          onClose={() => setActiveModal(null)}

><div className='modal__caseStudy'>

  <div className='modal__caseMeta'>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>ROLE</p>
      <p className='modal__caseMetaItem'>Web Designer</p>
      <p className='modal__caseMetaItem'>Systems Design</p>
      <p className='modal__caseMetaItem'>UX Research</p>
      <p className='modal__caseMetaItem'>Iconography</p>
    </div>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>TOOLS</p>
      <p className='modal__caseMetaItem'>Figma</p>
      <p className='modal__caseMetaItem'>Google Analytics</p>
      <p className='modal__caseMetaItem'>Adobe Creative Suite</p>
      <p className='modal__caseMetaItem'>Jira</p>
    </div>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>DETAILS</p>
      <p className='modal__caseMetaItem'>Duration: 4 years '22-'26</p>
      <p className='modal__caseMetaItem'>Company: Sony Electronics</p>
    </div>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLead'>Building the design conditions for a platform to find its own voice.</p>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>CONTEXT</p>
    <p className='modal__caseBody'>
      Created and launched in 2021, electronics.sony.com was conceived as Sony Electronics' first flagship attempt at owning the digital commercial interactions with their own community. All years of operation prior, that relationship had lived solely in third-party hands: retailers who were trusted to treat the brand with taste, but ultimately could not afford to apply the same love and care that an in-house team could provide. The DTC platform was the answer to that. A place where Sony could find its own voice and build direct relationships with customers.
    </p>
    <p className='modal__caseBody'>
      At my time of joining, the site had not yet come into its own.
    </p>
    <p className='modal__caseBody'>
      Running as a lean startup style venture within Sony, the site was launched with bare functionality in mind with the expectation for live and rapid iteration. Starting with a stack of full-width banners, a top navigation bar, a series of image-led promotional blocks, and search-based product listing pages, there was nothing tying the user journey together as a cohesive shopping experience. My arrival allowed the now-6-person team (2 Designers // 1 PM // 3 Devs) more breathing room to take on the task of establishing a foundation built on true User Experience principles.
    </p>
    <p className='modal__caseBody'>
      The breathing room led directly to more (tentative) trust being placed in the Design Team as a task force and allowed for a stronger sense of creative direction and cohesiveness across Sony's entire online presence. We now had the internal credibility to lend our skills to other branches of the e-commerce ecosystem.
    </p>
  </div>

  <div className='modal__caseBeforeAfter'>
    <div className='modal__caseImgFrame'>
      <p className='modal__caseImgLabel'>BEFORE</p>
      <div className='modal__caseImgInner'>
        <img src='/SonyBefore.webp' alt='Sony DTC homepage before redesign' />
      </div>
    </div>
    <div className='modal__caseImgFrame'>
      <p className='modal__caseImgLabel'>AFTER</p>
      <div className='modal__caseImgInner'>
        <video autoPlay muted loop playsInline width="370" height="728">
          <source src="/SonyAfter.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>THE SHIFT</p>
    <p className='modal__caseBody'>
      The first meaningful change came shortly after my onboarding: basic wayfinding through category tiles on the homepage, leading users into structured PLPs. Small in scope, significant in what it represented; Design was being given a seat at the table in brand strategy.
    </p>
    <p className='modal__caseBody'>
      What followed was four years of a specific kind of work. Not just designing a platform, but defending the conditions under which good design could happen. Every major decision followed the same pattern: a strategic goal to achieve, the design team would ask the right questions — what data supports this, what are we optimizing for, what does this do to the metrics we've already moved — until a clear path forward was created that took all impacted parties into consideration.
    </p>
    <p className='modal__caseBody'>
      That negotiation never stopped, but it sharpened everything. Every design decision I made had to be defensible both aesthetically and strategically.
    </p>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>INSIGHTS</p>
    <p className='modal__caseBody'>
      One of the more clarifying data points came from device traffic analysis. An overwhelming majority of page visits came from mobile, while an overwhelming majority of purchases were made on desktop.
    </p>
    <p className='modal__caseBody'>
      The implication was that our users tended to take a longer amount of time to consider and really chew on the purchasing decisions. Higher engagement and lower bounce on the Desktop viewport for PDPs seemed to suggest that users would browse on their phones throughout the day and use the PC in their downtime to dig deeper into product details. All of these data dots lined up over time and helped us really understand our users, bridge that gap, and build a deeper connection.
    </p>
    <p className='modal__caseBody'>
      On mobile, the priority became engagement and momentum: The funnel from homepage to category to product, designed to keep users moving and interested, the way a well-designed retail environment like Apple guides you through a space without you realizing you're being guided. On desktop, the priority became information density and clarity: How a product page communicated everything a considered purchaser needed to feel confident before pulling the trigger on a significant purchase.
    </p>
    <p className='modal__caseBody'>
      It became clear that rather than defining ourselves as a "mobile-first" or "desktop-first" platform, we needed to take a holistic approach and consider the entire e-commerce sales funnel.
    </p>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>WHAT I BUILT</p>

    <div className='modal__caseBlock'>
      <p className='modal__caseBody'>
        The most visible piece of work was the funnel — but the funnel was really an argument about how people find things they didn't know they were looking for.
      </p>
      <p className='modal__caseBody'>
        Before it existed, the site dropped users at the top of a cliff and pointed at the nav bar. A navigation system managed by an external contractor team, slow to change and built for breadth rather than guidance. If you knew exactly what you wanted, you could find it. If you didn't, you were on your own.
      </p>
      <p className='modal__caseBody'>
        The answer was to build the guidance into the page itself. Under the hero on the homepage — before any product — a single row of product categories with corresponding imagery. Not a product grid. Not a promotional banner. A map. Each tile leads to a category page that follows the same logic: subcategories first, products second. The same fractal pattern repeating at every level of the hierarchy, so the user always knows where they are and where they can go. Homepage to category to subcategory PLP — a hand-holding experience embedded in the content itself, the way a well-designed retail space moves you through a store before you've made a decision.
      </p>
      <p className='modal__caseBody'>
        The fight on this front wasn't about structure. It was about restraint. The recurring pressure from one particular stakeholder was toward density — full-width banners photoshopped together, product on top of product, the visual language of a Macy's circular or a World Market spread. The counterargument was always the same: white space isn't emptiness, it's what lets a product make an impact. Sony's brand already knew how to be minimal. The job was to protect that instinct from the inside.
      </p>
    </div>

    <div className='modal__caseImgRow'>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>HOMEPAGE CATEGORY GRID</p>
        <div className='modal__caseImgInner'>
          <img src='/OldCategoryGrid.png' alt='Sony homepage category tile grid' />
        </div>
      </div>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>CATEGORY PAGE FUNNEL</p>
        <div className='modal__caseImgInner'>
          <img src='/SalesFunnel.png' alt='Sony category page subcategory funnel' />
        </div>
      </div>
    </div>

    <div className='modal__caseBlock'>
      <p className='modal__caseBody'>
        At the most minute level of hierarchy and visual landmarks, we built a design system for an icon library that gave users a quick, scannable summary of the features included in the PDP. Restricted to a handful of priority selling points, these icons gave us a way around the user pain point of any comprehensive features page: a wall of words. With flagship product pages coming in at upwards of 3,000 words, an 8-feature grid of icons was a simple but effective fix to one of the largest pain points without breaking Sony's global platform content convention.
      </p>
    </div>

    <div className='modal__caseImgRow modal__caseImgRow--single'>
      <div className='modal__caseImgFrame'>
        <p className='modal__caseImgLabel'>ICON SYSTEM</p>
        <div className='modal__caseImgInner'>
          <img src='/SonyIcons.webp' alt='Sony product feature icon system' />
        </div>
      </div>
    </div>

    <div className='modal__caseBlock'>
      <p className='modal__caseBody'>
        The design system underneath all of it was built to absorb pressure. New product lines every quarter, new campaigns, we needed a simple and flexible component library that could accommodate a wide variety of interactions and media without any one category feeling too siloed. After nearly a quarter of stakeholder reviews, revisions, and strategy meetings, we moved forward with an elegant answer that incorporates vivid imagery, striking headline typography, and — most importantly — considerable spacing and visual breathing room. The physical design of Sony products tends to do the speaking for the brand, so we just needed to give them room to do their thing.
      </p>
    </div>

    <div className='modal__caseImgRow'>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>MOBILE — ENGAGEMENT FUNNEL</p>
        <div className='modal__caseImgInner modal__caseImgInner--tall'>
          <img src='/SonyMobile.webp' alt='Sony mobile experience' />
        </div>
      </div>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>DESKTOP — PDP</p>
        <div className='modal__caseImgInner modal__caseImgInner--tall'>
          <img src='/SonyDesktop.webp' alt='Sony desktop product detail page' />
        </div>
      </div>
    </div>

  </div>

  <div className='modal__caseSection modal__caseSection--metrics'>
    <p className='modal__caseMetric'>+158.1% <span>engagement</span></p>
    <p className='modal__caseMetric'>+44.4% <span>conversions</span></p>
  </div>

</div>
        </CaseStudyModal>

        <CaseStudyModal
          title="LEIMERT MOUNTAINEERING"
          role="MARKETING PARTNER"
          skills={['ANIMATION', 'ILLUSTRATION', 'VISUAL DEVELOPMENT']}
          heroImage="/LeimertBanner.webp"
          isOpen={activeModal === 'leimert'}
          onClose={() => setActiveModal(null)}
        >
        <div className='modal__caseStudy'>

  <div className='modal__caseMeta'>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>ROLE</p>
      <p className='modal__caseMetaItem'>Marketing Partner</p>
      <p className='modal__caseMetaItem'>Animation</p>
      <p className='modal__caseMetaItem'>Illustration</p>
      <p className='modal__caseMetaItem'>Visual Development</p>
    </div>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>TOOLS</p>
      <p className='modal__caseMetaItem'>Adobe After Effects</p>
      <p className='modal__caseMetaItem'>Adobe Illustrator</p>
      <p className='modal__caseMetaItem'>Procreate</p>
    </div>
    <div className='modal__caseMetaCard'>
      <p className='modal__caseMetaLabel'>DETAILS</p>
      <p className='modal__caseMetaItem'>Client: Leimert Mountaineering</p>
      <p className='modal__caseMetaItem'>Campaign: REI Embark Program</p>
    </div>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLead'>Street culture and climbing have always belonged together. It just took the right people to say so out loud.</p>
  </div>

  <div className='modal__caseImgRow modal__caseImgRow--single'>
    <div className='modal__caseImgFrame'>
      <p className='modal__caseImgLabel'>LEIMERT MOUNTAINEERING × REI</p>
      <div className='modal__caseImgInner'>
        <img src='/LeimertBanner.webp' alt='Leimert Mountaineering campaign image' />
      </div>
    </div>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>CONTEXT</p>
    <p className='modal__caseBody'>
      Ron Meade built Leimert Mountaineering around something simple and true: the mountains were always for us too. The brand carries the full weight of that statement. The aesthetic of Leimert Park, the grit of urban climbing culture, the knowledge that access isn't something everyone is handed, and the people who have to fight for it bring something different to the wall.
    </p>
    <p className='modal__caseBody'>
      Ron found me through my animation work on Mellow's Manphibian video – a piece built around Daniel Woods' ascent of one of the hardest sport routes in the country, set to punk rock, designed to carry the same irreverent high-voltage energy that Daniel himself brings to climbing. Ron recognized something in that work. We got on a call and talked for a while. We’re two kids from different cities, Toledo & Leimert Park, who both had to claw their way into a sport that didn't exactly roll out the welcome mat.
    </p>
    <p className='modal__caseBody'>
      For me that meant leaving everything behind in Toledo, loading whatever fit into a Chevy Impala, and living the old school dirtbag life: truck stops, Walmart parking lots, REI parking lots, because Van Life money wasn't something I had. For Ron it meant building a brand from the ground up that reflected the culture he actually came from rather than the one climbing magazines had decided climbing was supposed to have.
    </p>
    <p className='modal__caseBody'>
      That shared understanding was the foundation of everything we made together.
    </p>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>THE BRIEF</p>
    <p className='modal__caseBody'>
      REI came to Leimert through a program designed to surface independent brands rather than defaulting exclusively to the established names. The ask was campaign creativity — content that could carry the brand's identity into a wider audience without sanding down what made it worth noticing in the first place.
    </p>
    <p className='modal__caseBody'>
      The challenge wasn't the concept. Ron is a man of vision and dogged intent. The challenge was execution: how do you translate a brand built on lived experience into visual assets that feel native to both the streets and the mountains, work as social advertising, and still put the product front and center?
    </p>
  </div>

  <div className='modal__caseSection'>
    <p className='modal__caseLabel'>THE WORK</p>

    <div className='modal__caseBlock'>
      <p className='modal__caseBody'>
        The answer was to work as genuinely as possible. Culture comes from a place of authenticity from the individuals that make it up. We showed up with a loud expressiveness that communicates confidence in who we are, and an intent to execute.
      </p>
      <p className='modal__caseBody'>
        I built overlay animations on top of lifestyle footage for social media ads, and developed illustrations layered over product imagery that enhanced the cultural narrative without burying the product. The visual language draws from the same well as the brand itself: graffiti letterforms, tactile rawness of street art, the physical directness of climbing culture. Not as decoration, but as context.
      </p>
    </div>

    <div className='modal__caseImgRow'>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>SOCIAL AD — ANIMATION OVERLAY</p>
        <div className='modal__caseImgInner'>
          <img src='/LeimertAd1.webp' alt='Leimert social ad animation overlay' />
        </div>
      </div>
      <div className='modal__caseImgFrame modal__caseImgFrame--wide'>
        <p className='modal__caseImgLabel'>LIFESTYLE ILLUSTRATION</p>
        <div className='modal__caseImgInner'>
          <img src='/LeimertAd2.webp' alt='Leimert lifestyle illustration overlay' />
        </div>
      </div>
    </div>

    <div className='modal__caseBlock'>
      <p className='modal__caseBody'>
        The illustration in the banner image is a direct expression of that approach. The Leimert Mountaineering wordmark rendered in bubble graffiti lettering, climbing mountains drawn in the same hand, a climber centered in front of it all holding a rack of gear like it belongs there because he does.
      </p>
      <p className='modal__caseBody'>
        For our in-store banner, we ran with what we were selling, for who we were selling, carrying his dreams and aspirations with him. SoCal might be the training grounds, but for my part Cerro Torres is an eventuality.
      </p>
      <p className='modal__caseBody'>
        The goal was never to make climbing look like street culture or street culture look like climbing. The goal was to show that for some of us, they were never separate to begin with.
      </p>
    </div>

    <div className='modal__caseImgRow modal__caseImgRow--single'>
      <div className='modal__caseImgFrame'>
        <p className='modal__caseImgLabel'>CAMPAIGN ANIMATION</p>
        <div style={{background: '#fff'}} className='modal__caseImgInner'>
          <video height='600px' autoPlay loop muted playsInline>
            <source src='/LeimertAccent.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>

  </div>

</div>
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

        <IllustrationModal
          isOpen={illustrationModalOpen}
          onClose={() => setIllustrationModalOpen(false)}
        />
    </>
  )
}
