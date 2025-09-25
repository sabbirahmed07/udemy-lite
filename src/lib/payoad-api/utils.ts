import { Media } from '@/payload-types'

export function isMedia(thumb: string | null | Media): thumb is Media {
  return typeof thumb === 'object' && thumb !== null && 'url' in thumb
}
