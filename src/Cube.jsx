import React, { useRef } from 'react'
import { Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import modelSrc from '/src/assets/cube.glb?url';
// import { useControls } from 'leva'

export default function Cube() {

    const cube = useRef();
    const { nodes } = useGLTF(modelSrc);
    const { viewport } = useThree();

  useFrame( () => {
    cube.current.rotation.z += 0.002
    cube.current.rotation.x += 0.004
  })

  const materialProps = {
    
  }

  return (
    <group scale={viewport.width / 16}>
        <mesh ref={cube} {...nodes.Cube}>
            <MeshTransmissionMaterial toneMapped = {true} 
            samples={6}
            thickness={6}
            roughness={0}
            transmission={1}
            ior={0.9}
            clearcoat={0.2}
            anisotropy={0.4}
            chromaticAberration={0.4}
            backsideThickness={6}
            color='white'
            backside
            />


        </mesh>
    </group>
  )
}
