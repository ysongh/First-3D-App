import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

const RainDrop = ({ position }) => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Box ref={ref} args={[0.1, 0.1, 0.1]} position={position}>
      <meshStandardMaterial color="white" />
    </Box>
  );
};

const Rain = () => {
  const rainDrops = useMemo(() => {
    const drops = [];
    for (let i = 0; i < 100; i++) {
      drops.push(
        <RainDrop
          key={i}
          position={[Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5]}
        />
      );
    }
    return drops;
  }, []);

  return (
    <Canvas id="canvas-container">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {rainDrops}
    </Canvas>
  );
};

export default Rain;
