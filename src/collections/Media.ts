import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'mediaCategory',
      type: 'select',
      options: [
        { label: 'Course Thumbnail', value: 'thumbnail' },
        { label: 'Lesson Video', value: 'video' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
