import 'dotenv/config'

import { uploadImages } from '../src/prepare/upload-images'

await uploadImages([
  {
    images: ['history-v4-fast.mp4'],
    source: '',
    path: '',
    name: '',
    slug: '',
    size: 0,
    timestamp: new Date(),
    tags: [],
    links: [],
    metadata: {},
  },
])

console.log('done')
