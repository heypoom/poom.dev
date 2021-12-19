import { useRef, useState } from "react"
import { Mesh, Vector3 } from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { useSpring, animated } from "@react-spring/three"

import tw from "twin.macro"

const Backdrop = tw.div`
 bg-gray-900 min-h-screen w-full
`

interface BoxProps {
  color?: string
  hoverColor?: string
  position: Vector3
}

function Box(props: BoxProps) {
  const { color = "orange", hoverColor = "hotpink", position } = props

  const meshRef = useRef<Mesh>()

  const [hovering, hover] = useState(false)
  const [clicked, click] = useState(false)

  const { scale } = useSpring({ scale: hovering ? 1.5 : 1 })

  useFrame((state, delta) => {
    if (!meshRef.current) return

    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.z += 0.01
  })

  return (
    <animated.mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerLeave={() => hover(false)}
    >
      <icosahedronGeometry args={[1.25, 0]} />
      <meshStandardMaterial color={hovering ? hoverColor : color} />
    </animated.mesh>
  )
}

const ThreeView = () => {
  return (
    <Backdrop>
      <Canvas
        tw="w-full min-h-screen"
        dpr={[1, 2]}
        gl={{ powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Box position={[-2.7, 0, 0]} color="#ff4757" hoverColor="#5352ed" />
        <Box position={[2.7, 0, 0]} color="#ff6348" hoverColor="#2ed573" />
      </Canvas>
    </Backdrop>
  )
}

export default ThreeView
