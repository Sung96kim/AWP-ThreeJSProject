/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: MariaDiazLabella (https://sketchfab.com/ItsMira)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/cute-christmas-frog-064849621a37427da7b8f83a6abb699e
title: Cute Christmas Frog
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cuteFrog.gltf')

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    group.current.rotation.y = a;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={0.1}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert6SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/cuteFrog.gltf')