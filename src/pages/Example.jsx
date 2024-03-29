import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import Main from "../components/Main"

function Example() {
  return (
    <Canvas id="canvas-container" shadows>
      <Main />
    </Canvas>
  )
}

export default Example;