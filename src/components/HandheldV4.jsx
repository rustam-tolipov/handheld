import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function HandheldV4(props) {
  const { nodes, materials } = useGLTF('models/handheld_v4.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base.geometry}
        material={materials.base}
        position={[-0.004, 0.199, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sceen.geometry}
        material={nodes.sceen.material}
        position={[-0.004, 0.299, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select002.geometry}
        material={materials.base}
        position={[-0.015, 0.088, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select003.geometry}
        material={materials.base}
        position={[0.016, 0.088, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button001.geometry}
        material={materials.base}
        position={[0.079, 0.143, 0.024]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select006.geometry}
        material={materials.base}
        position={[-0.087, 0.113, 0.02]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select001.geometry}
        material={materials.base}
        position={[-0.087, 0.113, 0.021]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer002.geometry}
        material={materials.base}
        position={[0.099, 0.213, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer003.geometry}
        material={materials.base}
        position={[0.054, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer004.geometry}
        material={materials.base}
        position={[-0.065, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer005.geometry}
        material={materials.base}
        position={[-0.11, 0.213, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inside.geometry}
        material={materials.inside}
        position={[-0.005, 0.113, 0.015]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.131, 0.161, 0.047]}
      />
    </group>
  );
}

useGLTF.preload('models/handheld_v4.glb');
