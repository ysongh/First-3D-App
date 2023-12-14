import { Canvas } from '@react-three/fiber';

const Rain = () => {
  return (
    <Canvas id="canvas-container" shadows>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
};

export default Rain;
