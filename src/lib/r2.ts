import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3'

const { CLOUDFLARE_ACCOUNT_ID, R2_KEY_ID, R2_KEY_SECRET } = process.env

if (!CLOUDFLARE_ACCOUNT_ID) throw new Error('Missing CLOUDFLARE_ACCOUNT_ID')
if (!R2_KEY_ID) throw new Error('Missing R2_KEY_ID')
if (!R2_KEY_SECRET) throw new Error('Missing R2_KEY_SECRET')

export const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_KEY_ID ?? '',
    secretAccessKey: R2_KEY_SECRET ?? '',
  },
})

export const PUBLIC_IMAGE_BUCKET_KEY = 'poom-images'

/**
 * Upload image files to the public bucket.
 * Make sure there is no sensitive information in the image.
 **/
export function uploadPublicImageFile(
  key: string,
  body: Buffer | Uint8Array | Blob | string,
) {
  const command = new PutObjectCommand({
    Bucket: PUBLIC_IMAGE_BUCKET_KEY,
    Key: key,
    Body: body,
  })

  return r2.send(command)
}

export async function getPublicImageMeta(key: string) {
  try {
    const command = new HeadObjectCommand({
      Bucket: PUBLIC_IMAGE_BUCKET_KEY,
      Key: key,
    })

    return await r2.send(command)
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === 'NotFound') return null
    }

    throw err
  }
}
