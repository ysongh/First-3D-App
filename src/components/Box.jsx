import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const myMesh = useRef();
  const [isRotate, setRotate] = useState(true);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if(isRotate) myMesh.current.rotation.y = a;
  });

  return (
    <mesh onClick={() => setRotate(!isRotate)} ref={myMesh} scale={2}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

export default Box;