declare module 'micromark-extension-wiki-link' {
  const syntax: (options: { aliasDivider?: string }) => any

  const html: (options: {
    permalinks?: string[]
    pageResolver?(pageName: string): string[]
    hrefTemplate?(permalink: string): string
    wikiLinkClassName?: string
    newClassName?: string
  }) => any
}

declare module 'micromark-extension-frontmatter' {
  const frontmatter: () => any
  const frontmatterHtml: () => any
}
