import { useState } from 'react';
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './App.css';

function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="yellow" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App;
