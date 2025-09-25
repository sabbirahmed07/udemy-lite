import type { FieldHook } from 'payload'

const formatSlug: FieldHook = ({ value, originalDoc, data }) => {
  // Prefer existing value if user sets slug manually
  if (value)
    return value
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')

  // Use title field
  const title = data?.title || originalDoc?.title
  if (title) {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }

  return value
}

export default formatSlug
