export const matchText = (regex: RegExp, source: string): string[] => {
  const links: string[] = []

  const matches = source.matchAll(regex)
  if (!matches) return []

  for (const m of matches) {
    let name = m[1] || m[2]
    if (!name) continue

    links.push(name)
  }

  return links
}

const linkRegex = /\[\[(?:.+?\|)?(.+?)\]\]|\[.+?\]\((.+?)\.md\)/g

const imageRegex =
  /\!\[\[(.+?)(?:\|\d+)?\]\]|\!\[.+?\]\(((.+?)\.(png|jpg|jpeg|heic|webp))\)/g

const imageExtRegex = /.*\.(jpg|jpeg|png|webp|heic)$/

export const getLinks = (text: string) =>
  matchText(linkRegex, text)
    .map((link) => link.replace(/\.md$/, ''))
    .filter((image) => !imageExtRegex.test(image))

export const getImages = (text: string) => matchText(imageRegex, text)
