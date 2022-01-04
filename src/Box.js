import React from 'react'

export default function Box() {
  return (
    <mesh visible rotation={[90, 0, 20]} scale={1}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
  )
}
