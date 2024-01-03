import _ from 'lodash'
import { stat, readFile } from 'fs/promises'
import PQueue from 'p-queue'

import type { Note } from './types'
import { homedir } from 'os'
import path from 'path'
import sharp from 'sharp'
import { getPublicImageMeta, uploadPublicImageFile } from '../lib/r2'

const NOTES_PATH = path.resolve(homedir(), 'notes')
const ASSETS_PATH = path.resolve(NOTES_PATH, 'Resources/Assets')

const exists = async (path: string) => {
  try {
    await stat(path)
    return true
  } catch (err) {
    return false
  }
}

export async function uploadImages(notes: Note[]) {
  const queue = new PQueue({ concurrency: 20 })

  const linkedImages = _.uniq(notes.flatMap((note) => note.images))
  console.log(`found ${linkedImages.length} linked images`)

  // 1 - resolve path to images
  for (const imageName of linkedImages) {
    const imagePath = path.resolve(ASSETS_PATH, imageName)
    const hasImage = await exists(imagePath)

    if (!hasImage) {
      console.warn(`[!!] image "${imageName}" not found in assets path.`)
    }

    queue.add(async () => {
      const objectMeta = await getPublicImageMeta(imageName)

      // image with the same name has been uploaded before
      if (objectMeta) {
        // console.log(`[-] "${imageName}" already uploaded`, objectMeta)
        return
      }

      console.log(`[+] reading "${imageName}"`)

      const buffer = await readFile(imagePath)

      const image = sharp(buffer)
      const meta = await image.metadata()
      const { format } = meta

      console.log(`[+] compressing "${imageName}"`)

      let out = buffer

      if (format === 'jpg' || format === 'jpeg') {
        out = await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
      } else if (format === 'png') {
        out = await image.png({ compressionLevel: 9 }).toBuffer()
      }

      console.log(`[+] uploading "${imageName}"`)

      await uploadPublicImageFile(imageName, out)

      console.log(`[+] uploaded "${imageName}" to Cloudflare R2`)
    })
  }

  await queue.onIdle()

  console.log('[+] done uploading all images!')
}
