export interface FileMeta {
  size: number
  timestamp: Date
}

export type Snapshot = { [path: string]: FileMeta }

export interface Note extends FileMeta, NoteMeta {
  source: string
  path: string
  name: string
}

export interface NoteMeta {
  links: string[]
  metadata: Record<string, any>
}
