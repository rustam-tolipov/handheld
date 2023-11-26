import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  ContactShadows,
  OrbitControls,
  Html,
} from '@react-three/drei';

import { Experience } from './components/Experience';
import { Suspense } from 'react';
import LoadingFallback from './components/LoadingFallback';

export default function App() {
  const mobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  console.log(mobile);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={({ position: [0, 0, 0] }, { fov: mobile ? 7 : 6 })}
      gl={{ antialias: true }}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color('black'));
      }}
      // frameskip={false}
    >
      <Suspense fallback={<LoadingFallback/>}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}
