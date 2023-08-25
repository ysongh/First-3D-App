import { useRef, useState } from 'react';

function Sphere(props) {
  const myMesh = useRef();
  const [position, setPosition] = useState([0, 0, 0]);

  const handleMove = () => {
    setPosition(prevPosition => [prevPosition[0], prevPosition[1] - 0.1, prevPosition[2]]);
  };

  return (
    <mesh
      {...props}
      ref={myMesh}
      position={position}
      onClick={handleMove}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

export default Sphere;