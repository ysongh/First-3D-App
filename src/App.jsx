import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import Main from './components/Main';

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Main />
      </Canvas>
    </div>
  )
}

export default App;
