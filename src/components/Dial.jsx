import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

export default function Dial({ navState }) {
  const { RiveComponent, rive } = useRive({
    src: '/tumbler.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const navInput = useStateMachineInput(rive, 'NavDial', 'nav')

  if (navInput) {
    navInput.value = navState
  }

  return (
    <div className="dial">
      <RiveComponent />
    </div>
  )
}