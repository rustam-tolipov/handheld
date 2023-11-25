import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  ContactShadows,
  OrbitControls,
} from '@react-three/drei';
import { Handheld } from './components/Handheld';
import { HandheldOld } from './components/Handheld_old';
import { HandheldMetal } from './components/HandheldMetal';
import { HandheldV4 } from './components/HandheldV4';
import { HandheldV5 } from './components/HandheldV5';

export default function App() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={({ position: [0, 0, 0] }, { fov: 6 })}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('skyblue'));
      }}
      frameskip={false}
    >
      <OrbitControls />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} />
      <Environment preset='city' />
      <HandheldV5 position={[0, -0.2, 0]} />
      {/* <Handheld position={[0, -0.2, 0]} rotation={[-0.1, -0.5, 0]} /> */}
      {/* <HandheldV4 position={[0, -0.2, 0]} rotation={[-0.1, -0.5, 0]} /> */}
      {/* <HandheldMetal position={[0, -0.2, 0]} rotation={[-0.1, -0.5, 0]} /> */}
      {/* <HandheldOld position={[0, -0.2, 0]} rotation={[-0.1, -2.1, 0]} /> */}
    </Canvas>
  );
}
