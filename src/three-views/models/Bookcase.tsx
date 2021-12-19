import React, { useRef } from "react"

import { useGLTF } from "@react-three/drei"
import { GLTF } from "three-stdlib"
import { GroupProps } from "@react-three/fiber"

const modelUrl =
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase-wide-broken/model.gltf"

interface GLTFModel extends GLTF {
  nodes: {
    Cube034: THREE.Mesh
    Cube034_1: THREE.Mesh
    Cube034_2: THREE.Mesh
    Cube034_3: THREE.Mesh
    Cube034_4: THREE.Mesh
    Cube034_5: THREE.Mesh
    Cube034_6: THREE.Mesh
    Cube034_7: THREE.Mesh
  }

  materials: {
    ["BrownDark.050"]: THREE.MeshStandardMaterial
    ["PurpleDark.004"]: THREE.MeshStandardMaterial
    ["White.035"]: THREE.MeshStandardMaterial
    ["Metal.081"]: THREE.MeshStandardMaterial
    ["BlueDark.004"]: THREE.MeshStandardMaterial
    ["GreenDark.008"]: THREE.MeshStandardMaterial
    ["WoodDark.006"]: THREE.MeshStandardMaterial
    ["Black.031"]: THREE.MeshStandardMaterial
  }
}

export default function Bookcase(props: GroupProps) {
  const group = useRef()

  const model = useGLTF(modelUrl)
  const { nodes, materials } = model as GLTFModel

  return (
    <group ref={group} dispose={null} {...props}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Cube034.geometry}
          material={materials["BrownDark.050"]}
        />

        <mesh
          geometry={nodes.Cube034_1.geometry}
          material={materials["PurpleDark.004"]}
        />

        <mesh
          geometry={nodes.Cube034_2.geometry}
          material={materials["White.035"]}
        />

        <mesh
          geometry={nodes.Cube034_3.geometry}
          material={materials["Metal.081"]}
        />

        <mesh
          geometry={nodes.Cube034_4.geometry}
          material={materials["BlueDark.004"]}
        />

        <mesh
          geometry={nodes.Cube034_5.geometry}
          material={materials["GreenDark.008"]}
        />

        <mesh
          geometry={nodes.Cube034_6.geometry}
          material={materials["WoodDark.006"]}
        />

        <mesh
          geometry={nodes.Cube034_7.geometry}
          material={materials["Black.031"]}
        />
      </group>
    </group>
  )
}

useGLTF.preload(modelUrl)
