import { visit } from 'unist-util-visit'
import { whitespace } from 'hast-util-whitespace'
import { remove } from 'unist-util-remove'
import { h } from 'hastscript'

const hasOnlyImages = ({ children }: any) =>
  children.every((child) => child.tagName === 'img' || whitespace(child))

const isImageWithAlt = ({ tagName, properties }: any) =>
  tagName === 'img' && Boolean(properties.alt) && Boolean(properties.src)

const isImageWithCaption = ({ tagName, children }: any) =>
  (
    tagName === 'figure' &&
    children.some((child) => child.tagName === 'figcaption')
  )

const isImageLink = ({ tagName }: any) => tagName === 'a'

const imageRegex = /.*\.(jpg|jpeg|png|webp|heic)$/

const createFigure = ({ properties }: any, options: any) => {
  const props = options.className ? { class: options.className } : {}

  return h('figure', props, [
    h('img', { ...properties }),
    h('figcaption', properties.alt),
  ])
}

export const rehypeFigure = (options = {}) => (tree: any) => {
  // unwrap the images inside the paragraph
  visit(tree, { tagName: 'p' }, (node, index, parent) => {
    if (!hasOnlyImages(node)) return

    remove(node, 'text')

    parent.children.splice(index, 1, ...node.children)

    return index
  })

  // wrap images in figure
  visit(
    tree,
    (node) => isImageWithAlt(node),
    (node, index, parent) => {
      if (isImageWithCaption(parent) || isImageLink(parent)) return

      const alt = node.properties?.alt

      // do not wrap figures into non alt-texts
      if (alt && imageRegex.test(alt)) return

      const figure = createFigure(node, options)

      node.tagName = figure.tagName
      node.children = figure.children
      node.properties = figure.properties
    },
  ) }

