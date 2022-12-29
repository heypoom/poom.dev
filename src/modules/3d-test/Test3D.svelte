<script lang="ts">
  import { Canvas } from '@threlte/core'
  import { dir, rp } from './rotation'

  import Scene from './Scene.svelte'

  let x = 0
  let z = 0
  let r = 0

  document.addEventListener('keypress', (e) => {
    const d = dir(r)

    if (e.key === 'w') {
      if (d === 'D') {
        z += 0.1
      }

      if (d === 'DR') {
        z += 0.1
        x += 0.1
      }

      if (d === 'UR') {
        z -= 0.1
        x += 0.1
      }

      if (d === 'UL') {
        z -= 0.1
        x -= 0.1
      }

      if (d === 'DL') {
        z += 0.1
        x -= 0.1
      }
    }

    if (e.key === 's') {
      if (d === 'D') {
        z -= 0.1
      }

      if (d === 'DR') {
        z -= 0.1
        x -= 0.1
      }

      if (d === 'UR') {
        z += 0.1
        x -= 0.1
      }

      if (d === 'UL') {
        z += 0.1
        x += 0.1
      }

      if (d === 'DL') {
        z -= 0.1
        x += 0.1
      }
    }

    if (e.key === 'a') {
      r -= 0.1
    }

    if (e.key === 'd') {
      r += 0.1
    }
  })
</script>

<div class="min-h-[100vh] bg-gray-200">
  <div>
    {x.toFixed(2)}, {z.toFixed(2)}, {r.toFixed(2)}, rp = {rp(r)}%, dir = {dir(
      r
    )}
  </div>

  <Canvas>
    <Scene {x} {z} {r} />
  </Canvas>
</div>
