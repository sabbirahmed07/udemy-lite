import { getPayload } from 'payload'
import configPromise from '@payload-config'

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null

export async function getPayloadClient() {
  if (cachedPayload) return cachedPayload

  // ✅ Creates a single Payload instance
  cachedPayload = await getPayload({ config: await configPromise })
  return cachedPayload
}
