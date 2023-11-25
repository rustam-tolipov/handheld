import React, { useRef } from 'react';
import { Html, useGLTF, useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

import url from '../assets/video.mp4';
import imgUrl from '../assets/screenshot.png';

export function Handheld(props) {
  const { nodes, materials } = useGLTF('models/handheld_controller.glb');

  const video = useVideoTexture(url);
  const imageTexture = useTexture(imgUrl);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen001.geometry}
        material={materials.display}
        position={[0.031, 0.239, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        material={materials.Material}
        position={[0.032, 0.239, 0.003]}
      >
        <meshBasicMaterial
          map={imageTexture}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
          rotation={[0, 0, Math.PI/2]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        material={materials.handheld}
        position={[0.014, 0.183, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button001.geometry}
        material={materials.button}
        position={[0.034, 0.13, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button002.geometry}
        material={materials.button}
        position={[0.034, 0.112, -0.032]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button003.geometry}
        material={materials.button}
        position={[0.034, 0.112, -0.068]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button.geometry}
        material={materials.button}
        position={[0.034, 0.094, -0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.controller.geometry}
        material={materials.button}
        position={[0.032, 0.11, 0.049]}
      />
    </group>
  );
}

useGLTF.preload('models/handheld_controller.glb');
