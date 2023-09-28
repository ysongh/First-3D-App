import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from "three";

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
      <PerspectiveCamera makeDefault position={[10, -5, 8]}/>
      <OrbitControls ref={orbitControlsRef} minPolarAngle={angleFormat(60)} maxPolarAngle={angleFormat(90)} />
      
      <directionalLight color="white" position={[0, 0, 5]} />
      <Box position={[4, 1, 0]} />
      <Sphere position={[0, 0, 0]} />
      {/* <MoveBox /> */}
      <Floor position={[0, -1, 0]}/>

      <ambientLight args={["#ffffff", .25]} />
      <spotLight args={["#ffffff", 10, 7, angleFormat(45), 0.4]} position={[-3, 1, 0]} castShadow />

      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          <meshBasicMaterial side={THREE.BackSide} color="#2376ad"/>
        </mesh>       
      </Environment>
    </>
  )
}

export default Main;
