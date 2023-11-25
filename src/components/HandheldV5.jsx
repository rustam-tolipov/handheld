import React, { useRef, useState } from 'react';
import { Html, useGLTF, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';
import YouTube from 'react-youtube';

import url from '../assets/video.mp4';
import imgUrl from '../assets/screenshot.png';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import clickSound from '../assets/button.mp3';

export function HandheldV5(props) {
  const { nodes, materials } = useGLTF('models/handheld_v5.glb');

  const video = useVideoTexture(url);
  const videoId = '2mWZlNOzdv8';
  // 2mWZlNOzdv8
  // 2EF-O-fF8Hw

  const [clickedX, setClickedX] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const buttonX = useRef();
  const playerRef = useRef(null);

  const onReady = (event) => {
    // Access to player in all event handlers via event.target
    playerRef.current = event.target;
  };

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  useFrame(() => {
    // go back to original position after 1 second animation
    if (buttonX.current) {
      if (clickedX && buttonX.current.position.z >= 0.02) {
        buttonX.current.position.z -= 0.001;
        console.log(buttonX.current.position.z);

        setTimeout(() => {
          setClickedX(!clickedX);
        }, 50);
      }
      if (!clickedX && buttonX.current.position.z <= 0.024) {
        buttonX.current.position.z += 0.001;
        console.log(buttonX.current.position.z);
      }
    }

    // play sound
  });

  if (clickedX) {
    const audio = new Audio(clickSound);
    audio.play();
  }

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
        // material={materials.glass}
        position={[-0.004, 0.299, 0.023]}
      >
        <meshPhysicalMaterial
          color='black'
          metalness={0.1}
          roughness={0.1}
          transmission={0.5}
          opacity={0.5}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inside.geometry}
        material={materials.inside}
        position={[-0.005, 0.113, 0.015]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base001.geometry}
        material={materials.base}
        position={[-0.004, 0.199, -0.002]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sceen001.geometry}
        // material={materials.display}
        position={[-0.004, 0.299, 0.022]}
      >
        {/* <planeBufferGeometry args={[0.27, 0.186]} /> */}
        {/* <meshStandardMaterial side={THREE.DoubleSide}>
          <primitive attach='map' object={video} />
        </meshStandardMaterial> */}
        <Html
          className='content youtube-container'
          // rotation-y={-Math.PI}
          position={[0, 0, 0.002]}
          transform
          // occlude
          scale={0.006}
        >
          {/* <iframe
            width='100%'
            height='100%'
            // only autoplay and don't show controls and title and do not mute
            src={`https://www.youtube.com/embed/${videoId}?${
              playVideo ? 'autoplay=1' : ''
            }&controls=0&showinfo=0&rel=0frameborder="0"`}
            title='Contra: Hard Corps (Genesis) Playthrough - NintendoComplete'
            allowfullscreen
            allow='autoplay; encrypted-media'
          ></iframe> */}
          <YouTube
            videoId={videoId} // defaults -> ''
            id='youtube-player' // defaults -> ''
            opts={{
              playerVars: {
                autoplay: 0, // Autoplay is off initially
                controls: 0,
                showinfo: 0,
                rel: 0,
              },
            }}
            onReady={onReady}
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select001.geometry}
        material={materials.button}
        position={[-0.087, 0.113, 0.021]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select002.geometry}
        material={materials.button}
        position={[-0.015, 0.088, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select003.geometry}
        material={materials.button}
        position={[0.016, 0.088, 0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select006.geometry}
        material={materials.button}
        position={[-0.087, 0.113, 0.02]}
        rotation={[0, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer002.geometry}
        material={materials.button}
        position={[0.099, 0.213, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer003.geometry}
        material={materials.button}
        position={[0.054, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer004.geometry}
        material={materials.button}
        position={[-0.065, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.speacer005.geometry}
        material={materials.button}
        position={[-0.11, 0.213, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button001.geometry}
        material={materials.button}
        position={[0.079, 0.143, 0.024]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        onClick={() => {
          setClickedX(!clickedX);
          if (!isPlaying) {
            playVideo();
            setIsPlaying(true);
          } else {
            pauseVideo();
            setIsPlaying(false);
          }
        }}
        ref={buttonX}
      />
    </group>
  );
}

useGLTF.preload('models/handheld_v5.glb');
