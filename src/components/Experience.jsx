import {
  Environment,
  OrbitControls,
} from "@react-three/drei";

import { HandheldV7 } from "./HandheldV7";

export const Experience = () => {
  return (
    <>
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} />
      <Environment preset="city" />
      <HandheldV7 position={[0, -0.2, 0]} rotation={[0, -0.5, 0]} />
      <OrbitControls />
    </>
  );
};
