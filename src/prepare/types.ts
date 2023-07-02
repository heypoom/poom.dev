export interface FileMeta {
  size: number
  timestamp: Date
}

export interface Note extends FileMeta, NoteMeta {
  source: string
  path: string
  name: string
}

export interface NoteMeta {
  links: string[]
  metadata: Record<string, any>
}

export interface Snapshot {
  [path: string]: FileMeta
}

export interface SnapshotDiff {
  added: string[]
  updated: string[]
  removed: string[]
}

export interface SnapshotRecord {
  updatedAt: Date
  snapshot: Snapshot
  latest: boolean
}
