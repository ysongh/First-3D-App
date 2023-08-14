import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './App.css';

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App;
