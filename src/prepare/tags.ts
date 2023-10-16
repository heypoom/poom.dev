export const getTags = (source: string): string[] =>
  [...source.matchAll(/#(\w+)/g)]
    .map((x) => x[0])
    .map((x) => x.replace('#', ''))
