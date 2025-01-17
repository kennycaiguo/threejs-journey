import { OrbitControls } from '@react-three/drei'
import { Debug, Physics } from '@react-three/rapier'
import Effects from './Effects.js'
import { Level } from './Level.js'
import Lights from './Lights.js'
import Player from './Player.js'
import useGame from './stores/useGame.js'

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)
  const ssr = useGame((state) => state.ssr)
  const depthField = useGame((state) => state.depthField)

  return (
    <>
      <color args={['#bdedfc']} attach="background" />

      <OrbitControls makeDefault />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>

      <Effects {...{ depthField, ssr }} />
    </>
  )
}
