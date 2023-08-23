import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function Box(props) {
  const myMesh = useRef();
  const [isRotate, setRotate] = useState(true);
  const [hovered, setHover] = useState(false)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if(isRotate) myMesh.current.rotation.y = a;
  });

  return (
    <mesh
      {...props}
      onClick={() => setRotate(!isRotate)}
      ref={myMesh}
      scale={hovered ? 1 : .8}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;