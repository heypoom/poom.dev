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

interface Config {
  verbose: boolean
}

export async function uploadImages(notes: Note[], config?: Config) {
  const { verbose = true } = config ?? {}

  const queue = new PQueue({ concurrency: 20 })

  const linkedImages = _.uniq(notes.flatMap((note) => note.images))

  if (verbose) {
    console.log(`found ${linkedImages.length} linked images`)
  }

  // 1 - resolve path to images
  for (const imageName of linkedImages) {
    const imagePath = path.resolve(ASSETS_PATH, imageName)
    const hasImage = await exists(imagePath)

    if (!hasImage && verbose) {
      console.warn(`[!!] image "${imageName}" not found in assets path.`)
    }

    queue.add(async () => {
      const objectMeta = await getPublicImageMeta(imageName)

      // image with the same name has been uploaded before
      if (objectMeta) {
        // console.log(`[-] "${imageName}" already uploaded`, objectMeta)
        return
      }

      const buffer = await readFile(imagePath)
      let out = buffer

      // const image = sharp(buffer)
      // const meta = await image.metadata()
      // const { format } = meta

      // if (verbose) {
      //   console.log(`[+] compressing "${imageName}"`)
      // }

      // let out = buffer

      // if (format === 'jpg' || format === 'jpeg') {
      //   out = await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
      // } else if (format === 'png') {
      //   out = await image.png({ compressionLevel: 9 }).toBuffer()
      // }

      await uploadPublicImageFile(imageName, out)

      if (verbose) {
        console.log(`[+] uploaded "${imageName}" to Cloudflare R2`)
      }
    })
  }

  await queue.onIdle()

  if (verbose) {
    console.log('[+] done uploading all images!')
  }
}
