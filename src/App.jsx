
//import { useState } from 'react'
//import Hero from './components/Hero'
//import HoloInit from './components/HoloInit'

//export default function App() {
  //const [initialized, setInitialized] = useState(false)

//return (
  //  <main>
    //  {!initialized && <HoloInit onComplete={() => setInitialized(true)} />}
      //<Hero />
    //</main>
//  )
//} 

import HeroV2 from './components/HeroV2'

export default function App() {
  return (
    <main>
      <HeroV2 />
    </main>
  )
}