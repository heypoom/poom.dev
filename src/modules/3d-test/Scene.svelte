<script lang="ts">
  import { T, TransformableObject, useFrame } from '@threlte/core'
  import { GLTF } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils'

  const modelUrl =
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/hatchback/model.gltf'

  export let x = 0
  export let z = 0
  export let r = 0
</script>

<T.Group>
  <T.OrthographicCamera
    zoom={130}
    let:ref={cam}
    position={[0, 8, 10]}
    makeDefault
  >
    <TransformableObject object={cam} lookAt={{ y: 2 }} />
  </T.OrthographicCamera>
</T.Group>

<GLTF
  castShadow
  receiveShadow
  url={modelUrl}
  interactive
  useDraco
  scale={1}
  rotation={{ x: 0, y: r, z: 0 }}
  position={{ x, y: 0, z }}
/>

<T.Mesh receiveShadow rotation.x={DEG2RAD * -90}>
  <T.CircleGeometry args={[8, 90]} />
  <T.MeshStandardMaterial />
</T.Mesh>

<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.5} />
<T.AmbientLight intensity={0.5} />
