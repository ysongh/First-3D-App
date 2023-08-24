import { useState } from 'react';

function MoveBox() {
  const [position, setPosition] = useState([0, 0, 0]);

  const handleMove = () => {
    setPosition(prevPosition => [prevPosition[0], prevPosition[1] + 0.1, prevPosition[2]]);
  };

  return (
    <mesh
      position={position}
      onClick={handleMove}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

export default MoveBox;