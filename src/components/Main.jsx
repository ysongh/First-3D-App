import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Box from './Box';
import MoveBox from './MoveBox';
import Sphere from './Sphere';
import Floor from './Floor';

const angleFormat = (deg) => (Math.PI / 180) * deg;

function Main() {
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if(!!orbitControlsRef.current){
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current])
  

  useFrame((state) => {
    if(!!orbitControlsRef.current){
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleFormat(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleFormat(90 - 30));
      orbitControlsRef.current.update();
    }
  })

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, -1, 8]}/>
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleFormat(60)} maxPolarAngle={angleFormat(90)} />
      
      <directionalLight color="white" position={[0, 0, 5]} />
      <Box position={[-2.5, 1, 0]} />
      <Sphere position={[0, -1, 0]} />
      <MoveBox />
      <Floor position={[0, 1, 0]}/>

      <ambientLight args={["#ffffff", .5]} />
      <directionalLight args={["#ffffff", 1]} position={[-4, 1, 0]} />
    </>
  )
}

export default Main;
