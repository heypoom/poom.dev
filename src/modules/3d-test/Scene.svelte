<script lang="ts">
  import { T, TransformableObject, useFrame } from '@threlte/core'
  import { GLTF } from '@threlte/extras'
  import { DEG2RAD } from 'three/src/math/MathUtils'

  const modelUrl =
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/headphones/model.gltf'

  let rotation = 0

  useFrame(() => {
    rotation += 0.008
  })
</script>

<T.Group rotation.y={rotation}>
  <T.OrthographicCamera
    zoom={130}
    let:ref={cam}
    position={[0, 6, 10]}
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
  position={{ x: 0, y: 1.5, z: 3 }}
/>

<T.Mesh receiveShadow rotation.x={DEG2RAD * -90}>
  <T.CircleGeometry args={[8, 90]} />
  <T.MeshStandardMaterial />
</T.Mesh>

<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.4} />
<T.AmbientLight intensity={0.8} />
