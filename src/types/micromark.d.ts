declare module 'micromark-extension-wiki-link' {
  const syntax: () => any
  const html: () => any
}

declare module 'micromark-extension-frontmatter' {
  const frontmatter: () => any
  const frontmatterHtml: () => any
}
