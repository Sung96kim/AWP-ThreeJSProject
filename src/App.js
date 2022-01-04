import './App.css';
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styled from 'styled-components'
import Box from './Box';


const Wrapper = styled.div`
position: relative;

canvas{
  height: 100%;
  width: 100%;
}
`;

export default function App() {
  return (
    <Wrapper >
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
    </Wrapper>
  )
}

//Three things required to start using three.js: Scene, Camera, and Renderer
//Creating new scene instance
// const scene = new Scene();

// const camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)
// The first attribute is the field of view. FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.

// The second one is the "aspect ratio". You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.

// The next two attributes are the near and far clipping plane. What that means, is that objects further away from the camera than the value of far or closer than near won't be rendered. May want to use other values in apps to get better performance.

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

// function App() {
  //   const fov = 50;
//   const aspect = window.innerWidth/window.innerHeight;
//   const near = 0.1;
//   const far = 1000;
//   const scene = new Scene();
//   const camera = new PerspectiveCamera( fov, aspect, near, far );
//   camera.position.z = 2;

//   const renderer = new WebGLRenderer();
//   renderer.setSize( window.innerWidth, window.innerHeight );
//   document.body.appendChild( renderer.domElement );

//   //BoxGeometry params (width, height, depth) all default to 1 if empty
//   const geometry = new BoxGeometry();

//   //LIGHTS
//   {
//     const color = 0xFFFFFF;
//     const intensity = 1;
//     const light = new DirectionalLight(color, intensity);
//     light.position.set(-1, 2, 4);
//     scene.add(light);
//   }

//   const material = new MeshPhongMaterial( { color: '#2053FF' } );
//   const cube = new Mesh( geometry, material );
//   scene.add( cube );

//   camera.position.z = 5;

//   function animate() {
//     requestAnimationFrame( animate );

//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     renderer.render( scene, camera );
//   };

//   animate();
// }

