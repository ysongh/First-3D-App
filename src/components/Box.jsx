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
    <mesh onClick={() => setRotate(!isRotate)} ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box;