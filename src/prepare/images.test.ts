import { it, expect } from 'vitest'
import { getImages } from './links'

const TEST_CONTENT = `
Here is the photo of my dog, foo foo.

![[air chief marshal foo foo.jpg]]

he is very cute!

![here's him at the pool, what a cute dog!](./foo foo at the pool.heic)

here is another image

![[celestial dragons@3x.png|500]]

oh ok

![My soft shork plushie friends.](plushies-2024-01-01.jpeg)
`

it('should parse the markdown images correctly', () => {
  expect(getImages(TEST_CONTENT)).toEqual([
    'air chief marshal foo foo.jpg',
    './foo foo at the pool.heic',
    'celestial dragons@3x.png',
    'plushies-2024-01-01.jpeg',
  ])
})
