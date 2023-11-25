import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Suspense } from 'react';

import { Leva } from 'leva';

function App() {
  return (
    <>
      <Canvas shadows colorManagement gl={{ antialias: true }}>
        <color attach='background' args={['gray']} />
        <Suspense>
          <Experience />
        </Suspense>
      </Canvas>
      <Leva collapsed />
    </>
  );
}

export default App;
