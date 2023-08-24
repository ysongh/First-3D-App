import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import Box from './components/Box';
import MoveBox from './components/MoveBox';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Box position={[-1.2, -1, 0]} />
        <Box position={[1, 1.5, 0]} />
        <MoveBox />
      </Canvas>
    </div>
  )
}

export default App;
