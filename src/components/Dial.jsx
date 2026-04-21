import { useEffect } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Dial({ navState }) {
  const { RiveComponent, rive } = useRive({
    src: '/tumbler.riv',
    stateMachines: 'NavDial',
    autoplay: true,
  })

  const navInput = useStateMachineInput(rive, 'NavDial', 'nav')

  useEffect(() => {
    if (navInput) {
      navInput.value = navState
    }
  }, [navInput, navState])

  return (
    <div className="dial">
      <RiveComponent />
    </div>
  )
}