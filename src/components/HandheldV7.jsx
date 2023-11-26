import React, { Suspense, useRef, useState } from 'react';
import { Html, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import YouTube from 'react-youtube';

import clickSound from '../assets/button.mp3';
import { gamesList } from '../data/gameList';

const Menu = React.lazy(() => import('./Menu'));

export function HandheldV7(props) {
  const { nodes, materials } = useGLTF('models/handheld_v9.glb');

  const [clicked, setClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGame, setCurrentGame] = useState(gamesList[0]);
  const [selected, setSelected] = useState(false);

  const buttonUp = useRef();
  const buttonDown = useRef();
  const buttonLeft = useRef();
  const buttonRight = useRef();
  const buttonStart = useRef();
  const buttonSelect = useRef();
  const buttonX = useRef();
  const buttonY = useRef();
  const buttonA = useRef();
  const buttonB = useRef();
  const buttonVolumeUp = useRef();
  const buttonVolumeDown = useRef();
  const buttonPower = useRef();
  const playerRef = useRef(null);

  const handleGameChange = (game) => {
    setCurrentGame(game);
  };

  const handleNextGame = () => {
    if (currentGame.id < gamesList.length) {
      setCurrentGame(
        gamesList[gamesList.findIndex((game) => game.id === currentGame.id) + 1]
      );
    }
  };

  const handlePrevGame = () => {
    if (currentGame.id > 1) {
      setCurrentGame(
        gamesList[gamesList.findIndex((game) => game.id === currentGame.id) - 1]
      );
    }
  };

  const onReady = (event) => {
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

  const muteVideo = () => {
    if (playerRef.current) {
      if (playerRef.current.isMuted()) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
    }
  };

  const handleVolumeUp = () => {
    if (playerRef.current) {
      playerRef.current.setVolume(playerRef.current.getVolume() + 10);
    }
  };

  const handleVolumeDown = () => {
    if (playerRef.current) {
      playerRef.current.setVolume(playerRef.current.getVolume() - 10);
    }
  };

  const handleSeek = (length) => {
    if (playerRef.current) {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + length);
    }
  };

  const handleClickAnimation = (button, type) => {
    if (button.current) {
      if (clicked == type && button.current.position.z >= 0.02) {
        button.current.position.z -= 0.001;
        setTimeout(() => {
          setClicked(false);
        }, 50);
      }
      if (clicked !== type && button.current.position.z <= 0.023) {
        button.current.position.z += 0.001;
      }
    }
  };

  const handleVolumeAnimation = (button, type) => {
    if (button.current) {
      if (clicked == type && button.current.position.x >= 0.138) {
        button.current.position.x -= 0.001;
        setTimeout(() => {
          setClicked(false);
        }, 50);
      }
      if (clicked !== type && button.current.position.x <= 0.141) {
        button.current.position.x += 0.001;
      }
    }
  };

  useFrame(() => {
    handleClickAnimation(buttonSelect, 'select');
    handleClickAnimation(buttonStart, 'start');

    handleClickAnimation(buttonUp, 'up');
    handleClickAnimation(buttonDown, 'down');
    handleClickAnimation(buttonLeft, 'left');
    handleClickAnimation(buttonRight, 'right');

    handleClickAnimation(buttonX, 'x');
    handleClickAnimation(buttonY, 'y');
    handleClickAnimation(buttonA, 'a');
    handleClickAnimation(buttonB, 'b');

    handleVolumeAnimation(buttonVolumeUp, 'volUp');

    handleVolumeAnimation(buttonVolumeDown, 'volDown');
  });

  if (clicked !== false) {
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
        position={[-0.004, 0.199, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base001.geometry}
        material={materials.base}
        position={[-0.004, 0.199, -0.0166]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inside.geometry}
        material={materials.inside}
        position={[-0.005, 0.113, 0.021]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.inside001.geometry}
        material={materials.base}
        position={[-0.004, 0.199, -0.017]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.983, 0.992, 0.983]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen001.geometry}
        position={[-0.004, 0.299, 0.021]}
      >
        <Html
          className='content youtube-container'
          position={[-0.002, 0, 0.0036]}
          transform
          occlude
          scale={0.006}
        >
          {selected ? (
            <YouTube
              videoId={currentGame.videoId}
              id='youtube-player'
              className='youtube-player'
              opts={{
                playerVars: {
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                  rel: 0,
                },
              }}
              onReady={onReady}
              loading='Loading...'
            />
          ) : (
            <Menu
              gamesList={gamesList}
              currentGame={currentGame}
              handleGameChange={handleGameChange}
            />
          )}
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials.logo}
        position={[0.13, 0.009, 0.024]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.012}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select002.geometry}
        material={materials.button}
        position={[-0.015, 0.088, 0.023]}
        onClick={() => {
          setClicked('select');
          setSelected(false);
        }}
        ref={buttonSelect}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select003.geometry}
        material={materials.button}
        position={[0.016, 0.088, 0.023]}
        onClick={() => {
          setClicked('start');
          setSelected(true);
        }}
        ref={buttonStart}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoulder001.geometry}
        material={materials.button}
        position={[0.099, 0.213, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoulder002.geometry}
        material={materials.button}
        position={[0.054, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoulder003.geometry}
        material={materials.button}
        position={[-0.065, 0.174, -0.023]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoulder.geometry}
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
          setClicked('y');
        }}
        ref={buttonY}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button002.geometry}
        material={materials.button}
        position={[0.108, 0.114, 0.024]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        onClick={() => {
          setClicked('b');
          muteVideo();
        }}
        ref={buttonB}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button003.geometry}
        material={materials.button}
        position={[0.079, 0.086, 0.024]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        onClick={() => {
          setClicked('a');
          setIsPlaying(!isPlaying);
          isPlaying ? pauseVideo() : playVideo();
        }}
        ref={buttonA}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.button004.geometry}
        material={materials.button}
        position={[0.051, 0.114, 0.024]}
        rotation={[-Math.PI / 2, Math.PI / 4, 0]}
        onClick={() => {
          setClicked('x');
        }}
        ref={buttonX}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.analogstics003.geometry}
        material={materials.button}
        position={[-0.087, 0.137, 0.02]}
        scale={0.769}
        onClick={() => {
          setClicked('up');
          selected && handleNextGame();
        }}
        ref={buttonUp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.analogstics001.geometry}
        material={materials.button}
        position={[-0.112, 0.113, 0.02]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.769}
        onClick={() => {
          setClicked('left');
          selected ? handleSeek(-10) : handlePrevGame();
        }}
        ref={buttonLeft}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.analogstics005.geometry}
        material={materials.button}
        position={[-0.063, 0.113, 0.02]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.769}
        onClick={() => {
          setClicked('right');
          selected ? handleSeek(10) : handleNextGame();
        }}
        ref={buttonRight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.analogstics006.geometry}
        material={materials.button}
        position={[-0.087, 0.088, 0.02]}
        scale={0.769}
        onClick={() => {
          setClicked('down');
          selected && handlePrevGame();
        }}
        ref={buttonDown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select001.geometry}
        material={materials.button}
        position={[0.141, 0.339, -0.002]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        onClick={() => {
          setClicked('volUp');
          handleVolumeUp();
        }}
        ref={buttonVolumeUp}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select004.geometry}
        material={materials.button}
        position={[0.141, 0.311, -0.002]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        onClick={() => {
          setClicked('volDown');
          handleVolumeDown();
        }}
        ref={buttonVolumeDown}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.select005.geometry}
        material={materials.button}
        position={[0.141, 0.259, -0.002]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload('models/handheld_v9.glb');
