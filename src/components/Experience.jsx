import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from '@react-three/drei';

import { Handheld } from './Handheld';

export const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 0]} fov={15} />
      <Environment preset='warehouse' />
      <OrbitControls />
      <Handheld />
    </>
  );
};
