import { useRef, useEffect, useState } from 'react';
import gsap from "gsap";

function Sphere(props) {
  const myMesh = useRef(null);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    if (!!myMesh.current) {
      gsap.to(myMesh.current.position, {
        duration: 5,
        x: 3,
        ease: "power2.out"
      });

      gsap.from(myMesh.current.position, {
        x: -5
      });
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