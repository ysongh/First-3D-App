import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";

function Sphere(props) {
  const myMesh = useRef(null);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    if (!!myMesh.current) {
      const timeline = gsap.timeline({ paused: true });

      timeline.to(myMesh.current.position, {
        duration: 3,
        x: 3,
        ease: "power2.out"
      });

      timeline.to(myMesh.current.position, {
        duration: 1,
        y: 2,
        ease: "power2.in"
      }, ">+=2");

      timeline.play();
    }
  }, [myMesh.current])
  

  const handleMove = () => {
    setPosition(prevPosition => [prevPosition[0], prevPosition[1] - 0.1, prevPosition[2]]);
  };

  return (
    <mesh
      {...props}
      ref={myMesh}
      position={position}
      onClick={handleMove}
      castShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  )
}

export default Sphere;