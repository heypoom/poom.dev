import React, { Suspense, useRef, useState } from "react"
import { Mesh } from "three"
import { Canvas, Vector3, useFrame } from "@react-three/fiber"
import { useSpring, a } from "@react-spring/three"
import { ErrorBoundary } from "react-error-boundary"
import { OrbitControls } from "@react-three/drei"

import tw from "twin.macro"

import Bookcase from "./models/Bookcase"

const Backdrop = tw.div`
 bg-gray-50 min-h-screen w-full
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

  const values = useSpring({
    scale: hovering ? 1.5 : 1,
    color: hovering ? hoverColor : color,
  })

  useFrame(() => {
    if (!meshRef.current) return

    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.z += 0.01
  })

  return (
    <a.mesh
      ref={meshRef}
      position={position}
      scale={values.scale}
      onPointerOver={() => hover(true)}
      onPointerLeave={() => hover(false)}
    >
      <icosahedronGeometry args={[1.25, 0]} />
      <a.meshStandardMaterial color={values.color} />
    </a.mesh>
  )
}

const BookshelfView = () => {
  return (
    <Backdrop>
      <ErrorBoundary
        fallback={<div>ok</div>}
        onError={(error) => console.log(error)}
      >
        <Suspense fallback={<div>ok</div>}>
          <Canvas
            tw="w-full min-h-screen"
            dpr={[1, 2]}
            gl={{ powerPreference: "high-performance" }}
          >
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />

            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            <Bookcase
              position={[0, -2, 0]}
              scale={2}
              rotation={[0.3, -0.4, 0]}
            />

            {/* <Box position={[-2.7, 0, 0]} color="#ff4757" hoverColor="#5352ed" />
        <Box position={[2.7, 0, 0]} color="#ff6348" hoverColor="#2ed573" /> */}
          </Canvas>
        </Suspense>
      </ErrorBoundary>
    </Backdrop>
  )
}

export default BookshelfView
