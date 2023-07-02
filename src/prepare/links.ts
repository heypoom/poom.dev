const linkRegex = /\[\[(?:.+?\|)?(.+?)\]\]|\[.+?\]\((.+?)\.md\)/g

export function getLinks(source: string): string[] {
  const links: string[] = []

  const matches = source.matchAll(linkRegex)
  if (!matches) return []

  for (const m of matches) {
    let name = m[1] || m[2]
    if (!name) continue

    links.push(name.replace(/\.md$/, ''))
  }

  return links
}
