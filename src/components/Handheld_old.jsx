import React, { useRef } from 'react';
import { Html, useGLTF, useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

import url from '../assets/video.mp4';
import imgUrl from '../assets/screenshot.png';

export function HandheldOld(props) {
  const { nodes, materials } = useGLTF('models/handheld.glb');

  const video = useVideoTexture(url);
  const imageTexture = useTexture(imgUrl);

  return (
    // <group {...props} dispose={null}>
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cube.geometry}
    //     material={materials.handheld}
    //   />
    //   {/* <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Plane.geometry}
    //     material={materials.scene}
    //     position={[0.078, 1.471, 0.003]}
    //     rotation={[0, 0, -Math.PI / 2]}
    //     scale={1.444}
    //   /> */}
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder.geometry}
    //     material={materials.button}
    //     position={[0.135, 1.192, 0.051]}
    //     rotation={[0, 0, Math.PI / 2]}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder002.geometry}
    //     material={materials.button}
    //     position={[0.135, 1.192, -0.025]}
    //     rotation={[0, 0, Math.PI / 2]}
    //     scale={0.268}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder003.geometry}
    //     material={materials.button}
    //     position={[0.135, 1.192, -0.069]}
    //     rotation={[0, 0, Math.PI / 2]}
    //     scale={0.268}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder004.geometry}
    //     material={materials.button}
    //     position={[0.135, 1.17, -0.048]}
    //     rotation={[0, 0, Math.PI / 2]}
    //     scale={0.268}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.Cylinder005.geometry}
    //     material={materials.button}
    //     position={[0.135, 1.215, -0.048]}
    //     rotation={[0, 0, Math.PI / 2]}
    //     scale={0.268}
    //   />
    //   <mesh
    //     castShadow
    //     receiveShadow
    //     geometry={nodes.screen.geometry}
    //     // material={materials.handheld}
    //   >
    //     {/* generate glass material */}
    //     <meshPhysicalMaterial
    //       color='black'
    //       metalness={0.1}
    //       roughness={0.1}
    //       transmission={0.9}
    //       opacity={0.9}
    //       transparent
    //       side={THREE.DoubleSide}
    //     />

    //     <Html
    //       distanceFactor={1}
    //       transform
    //       rotation={[0, Math.PI / 2, 0]}
    //       position={[0.1298, 1.321, 0.003]}
    //       scale={[0.0359, 0.0465, 0.1]}
    //       // castShadow
    //       // receiveShadow
    //     >
    //       <div className='container'>
    //         <iframe
    //           src='https://www.rustam-tolipov.com/'
    //           width='100%'
    //           height='100%'
    //           frameBorder='0'
    //           class='giphy-embed'
    //           allowFullScreen
    //           style={{ scale: 2 }}
    //         ></iframe>
    //       </div>
    //     </Html>
    //   </mesh>
    // </group>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.handheld}
        position={[0.014, 0.183, 0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.button}
        position={[0.034, 0.109, 0.051]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.button}
        position={[0.033, 0.109, -0.025]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.button}
        position={[0.033, 0.109, -0.069]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.button}
        position={[0.033, 0.087, -0.048]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.button}
        position={[0.033, 0.131, -0.048]}
        rotation={[0, 0, Math.PI / 2]}
        scale={0.268}
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
          
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen001.geometry}
        material={materials.display}
        position={[0.031, 0.239, 0.003]}
      >
        <meshPhysicalMaterial
          color='black'
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          opacity={0.9}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('models/handheld.glb');
