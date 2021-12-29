import './App.css';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
} from 'three';

//Three things required to start using three.js: Scene, Camera, and Renderer
//Creating new scene instance
// const scene = new Scene();

// const camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000)
// The first attribute is the field of view. FOV is the extent of the scene that is seen on the display at any given moment. The value is in degrees.

// The second one is the "aspect ratio". You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.

// The next two attributes are the near and far clipping plane. What that means, is that objects further away from the camera than the value of far or closer than near won't be rendered. May want to use other values in apps to get better performance.

// const renderer = new WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);

function App() {
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const renderer = new WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
}

export default App;
