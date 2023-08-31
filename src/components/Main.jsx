import { useState } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Box from './Box';
import MoveBox from './MoveBox';
import Sphere from './Sphere';
import Floor from './Floor';

function Main() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1, 8]}/>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Box position={[-2.5, 1, 0]} />
      <Sphere position={[2, -1, 0]} />
      <MoveBox />
      <Floor position={[0, -.8, 0]}/>
    </>
  )
}

export default Main;
