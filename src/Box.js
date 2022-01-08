import React from 'react'

export default function Box() {
  return (
    <mesh scale={3}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  )
}
