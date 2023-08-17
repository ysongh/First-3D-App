import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh onClick={() => alert('It a box')} ref={myMesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box;