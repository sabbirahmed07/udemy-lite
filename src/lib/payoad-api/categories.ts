import { Category } from '@/payload-types'
import { getPayloadClient } from '@/lib/payoad-api/payload'

export async function getCategories(limit = 5): Promise<Category[]> {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'categories',
    limit,
    depth: 1, // ensures thumbnail relation is populated
  })

  return docs as Category[]
}
