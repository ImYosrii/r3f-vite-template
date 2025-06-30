import { DoubleSide } from "three";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

export default function Experience() {
  return (
    <>
        <mesh>
            <planeGeometry args={[1, 1, 1, 1]} />
            <shaderMaterial 
                vertexShader={vertex}
                fragmentShader={fragment}
                side={DoubleSide} />
        </mesh>

    </>
  )
}