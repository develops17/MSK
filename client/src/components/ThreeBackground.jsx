import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PlaneGeometry, MeshBasicMaterial } from 'three'

const ThreeBackground = () => {
  const meshRef = useRef()

  useFrame(({ mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mouse.y * 0.5
      meshRef.current.rotation.y = mouse.x * 0.5
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color="#D80074" />
    </mesh>
  )
}

const Background = () => {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <ambientLight intensity={0.5} />
      <ThreeBackground />
    </Canvas>
  )
}

export default Background