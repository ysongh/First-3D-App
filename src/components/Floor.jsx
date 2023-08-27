
const angleFormat = (deg) => (Math.PI / 180) * deg;

function Floor() {
  return (
    <mesh rotation={[(angleFormat(90)), 0, 0]} >
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

export default Floor;