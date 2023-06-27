import { it, expect } from 'vitest'
import { getLinks } from './links'

const TEST_CONTENT = `
My name is [[Poom]]. I'm an [[Indie Hacker]] working at [Creatorsgarten](https://creatorsgarten.org).
I like to eat [[soup|Delicious Soups]] and [Corn](Favourite Corn.md).
My contact info is at [Contact](Private/Contact.md) or [[Awesome/Contact]]
`

it('should parse the markdown links correctly', () => {
  expect(getLinks(TEST_CONTENT)).toEqual([
    'Poom',
    'Indie Hacker',
    'Delicious Soups',
    'Favourite Corn',
    'Private/Contact',
    'Awesome/Contact',
  ])
})
