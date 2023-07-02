export type Content = FileMeta & {
  name: string
  path: string
  size?: number
  createdAt: Date
}

export interface FileMeta {
  metadata: Record<string, any>
  links: string[]
}
