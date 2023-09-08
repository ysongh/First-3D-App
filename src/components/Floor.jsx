
const angleFormat = (deg) => (Math.PI / 180) * deg;

function Floor(props) {
  return (
    <mesh {...props} rotation={[-(angleFormat(90)), 0, 0]} >
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  )
}

export default Floor;