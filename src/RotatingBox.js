import React from "react";
import { useFrame } from '@react-three/fiber';

export default function RotatingBox() {
  const myMesh = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    const b = clock.getElapsedTime();
    const c = clock.getElapsedTime();

    myMesh.current.rotation.x = a;
    myMesh.current.rotation.y = b;
    myMesh.current.rotation.z = c;
  });

  return (
    <mesh ref={myMesh} scale={3}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}
