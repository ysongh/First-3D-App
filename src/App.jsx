import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import Box from './components/Box';
import MoveBox from './components/MoveBox';
import Sphere from './components/Sphere';
import Floor from './components/Floor';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Box position={[-1.2, -1, 0]} />
        <Box position={[1, 1.5, 0]} />
        <Sphere position={[2, -1, 0]}  />
        <MoveBox />
        <Floor />
      </Canvas>
    </div>
  )
}

export default App;
