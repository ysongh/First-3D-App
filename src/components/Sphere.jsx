import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";

function Sphere(props) {
  const myMesh = useRef(null);

  useEffect(() => {
    if (!!myMesh.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(myMesh.current.position, {
        duration: 2,
        x: 1,
        ease: "power2.out"
      });

      timeline.to(myMesh.current.position, {
        duration: 1.5,
        y: 0.5,
        ease: "bounce.out"
      }, "<");

      timeline.play();
    }
  }, [myMesh.current])

  return (
    <mesh
      {...props}
      ref={myMesh}
      castShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

export default Sphere;