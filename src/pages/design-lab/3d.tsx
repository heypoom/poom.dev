import { useRef, useState } from "react"
import { Mesh } from "three"
import { motion } from "framer-motion/three"
import { Canvas, useFrame, Vector3 } from "@react-three/fiber"

import tw from "twin.macro"
import { useMotionValue } from "framer-motion"

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

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  const rotation = useMotionValue(0)

  useFrame((state, delta) => {
    rotation.set(rotation.get() + 0.01)
  })

  return (
    <motion.mesh
      position={position}
      rotation={[rotation, 1, rotation]}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerLeave={() => hover(false)}
      whileHover={{ scale: 2.5 }}
    >
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={hovered ? hoverColor : color} />
    </motion.mesh>
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
