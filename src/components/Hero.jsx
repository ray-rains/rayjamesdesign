import Dial from './Dial.jsx'
import FloatColumn from './FloatColumn.jsx'

export default function Hero() {
  return (
    <section className="hero">
      <Dial navState={0} />
      <FloatColumn />
      <img src="/arrowLargeEmboss.svg" className="hero__arrow" alt="" />
      <img src="/chassisCircleLarge.svg" className="hero__circle" alt="" />
      <div className="hero__text">
        <h1 className="hero__headline">
          DESIGN IS NOT MEANT TO ORGANIZE CHAOS; BUT TO NAVIGATE IT.
        </h1>
        <div className="hero__subtitle">
          <h4>&gt;&gt;&gt;RAYMOND RAINSBERGER&lt;&lt;&lt;</h4>
          <div className="hero__role">
            <h5>&gt;&gt;&gt;DESIGN&lt;&lt;&lt;</h5>
            <h5>&gt;&gt;&gt;PRODUCT&lt;&lt;&lt;</h5>
            <h5>&gt;&gt;&gt;MOTION&lt;&lt;&lt;</h5>
            <h5>&gt;&gt;&gt;UX&lt;&lt;&lt;</h5>
          </div>
        </div>
      </div>
    </section>
  )
}