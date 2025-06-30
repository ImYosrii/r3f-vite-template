import {Canvas} from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'

function App() {

  const camera = {
    position: [0, 0, 5],
    fov: 50,
    near: 0.1,
    far: 1000
  }
  return (
    <>
      <Canvas
        camera={camera}
      >
        <OrbitControls />
        <Experience />
      </Canvas>

    </>
  )
}

export default App
