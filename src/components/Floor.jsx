
const angleFormat = (deg) => (Math.PI / 180) * deg;

function Floor(props) {
  return (
    <mesh {...props} rotation={[-(angleFormat(90)), 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#b0d1f4" />
    </mesh>
  )
}

export default Floor;