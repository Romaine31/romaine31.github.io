import React, { useRef } from 'react'
import { Environment, MeshTransmissionMaterial, useGLTF } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
// import { useControls } from 'leva'

export default function Cube() {

    const cube = useRef();
    const { nodes } = useGLTF('/Portfolio/src/assets/cube.glb')
    const { viewport } = useThree();

  useFrame( () => {
    cube.current.rotation.z += 0.0006
    cube.current.rotation.x += 0.001
  })

  const materialProps = {
    
  }

  return (
    <group scale={viewport.width / 16}>
        <mesh ref={cube} {...nodes.Cube}>
            <MeshTransmissionMaterial toneMapped = {true} 
            samples={15}
            thickness={30}
            roughness={0}
            transmission={1}
            ior={0.9}
            clearcoat={0.2}
            anisotropy={0.4}
            chromaticAberration={0.4}
            backsideThickness={40}
            color='white'
            backside
            />


        </mesh>
    </group>
  )
}
