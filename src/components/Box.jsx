import React from 'react';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box;