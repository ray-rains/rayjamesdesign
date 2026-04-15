import Dial from './Dial.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <Dial navState={0} />
      <div className="hero__text">
        <img src="/arrowLargeEmboss.svg" className="hero__arrow" alt="" />
        <h1 className="hero__headline">
          DESIGN IS NOT MEANT TO ORGANIZE CHAOS; BUT TO NAVIGATE IT.
        </h1>
        <div className="hero__subtitle">
                <h4>&gt;&gt;&gt;RAYMOND RAINSBERGER&lt;&lt;&lt;</h4>
                <div className="hero__role">
                    <h5>&gt;&gt;&gt;PRODUCT DESIGN&lt;&lt;&lt;</h5>
                </div>
        </div>
      </div>
    </section>
  )
}