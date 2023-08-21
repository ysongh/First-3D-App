import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box() {
  const myMesh = useRef();
  const [isRotate, setRotate] = useState(true);
  const [hovered, setHover] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if(isRotate) myMesh.current.rotation.y = a;
  });

  return (
    <mesh
      onClick={() => setRotate(!isRotate)}
      ref={myMesh}
      scale={hovered ? 1.5 : 1}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;