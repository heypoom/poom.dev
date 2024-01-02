import _ from 'lodash'
import { stat, readFile } from 'fs/promises'
import PQueue from 'p-queue'

import type { Note } from './types'
import { homedir } from 'os'
import path from 'path'
import sharp from 'sharp'

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
  const queue = new PQueue({ concurrency: 30 })

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
      const buffer = await readFile(imagePath)
      console.log(`[+] uploading image "${imageName}" (${buffer.length} bytes)`)
      //
      // const image = sharp(buffer)
      // const meta = await image.metadata()
      // const { format } = meta
      //
      // if (format === 'jpg' || format === 'jpeg') {
      //   const out = await image.jpeg({ quality: 80, mozjpeg: true }).toBuffer()
      // }

      // 2 - compress the images with Proton
      // 3 - upload the images to R2
    })
  }

  await queue.onIdle()
}
