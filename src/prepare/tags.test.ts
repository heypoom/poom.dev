import { it, expect } from 'vitest'

import { getTags } from './tags'

const TEST_CONTENT = `
# Hello #world

My name is #poom

#foo #Creatorsgarten
`.trim()

it('should parse the hashtags correctly', () => {
  expect(getTags(TEST_CONTENT)).toEqual([
    '#world',
    '#poom',
    '#foo',
    '#Creatorsgarten',
  ])
})
