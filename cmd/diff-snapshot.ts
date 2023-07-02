import fs from 'fs'

import { diffSnapshot } from '../src/prepare'

const open = (path: string) => JSON.parse(fs.readFileSync(path, 'utf-8'))

const A = open('./snapshot.a.json')
const B = open('./snapshot.b.json')

console.log(await diffSnapshot(A, B))
