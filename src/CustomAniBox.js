import React, { useState } from "react";
import { useFrame } from '@react-three/fiber';

export default function CustomAniBox() {
  const myMesh = React.useRef();

  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if(active){
      myMesh.current.rotation.x = a;
    }else{
      myMesh.current.rotation.x = Math.sin(a);
    }
  });

  return (
    <mesh ref={myMesh} scale={3} onClick={() => {setActive(!active)}}>
      <boxBufferGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}













// useFrame(({ clock }) => {
//   const a = clock.getElapsedTime();
//   const b = clock.getElapsedTime();
//   const c = clock.getElapsedTime();
//   if(active){
//     myMesh.current.rotation.x = a;
//     myMesh.current.rotation.y = b;
//     myMesh.current.rotation.z = c;
//   }else{
//     myMesh.current.rotation.x = Math.sin(a);
//     myMesh.current.rotation.y = Math.sin(b);
//     myMesh.current.rotation.z = Math.sin(c);
//   }
// });
