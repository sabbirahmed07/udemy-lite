import formatSlug from '@/formatSlug'
import type { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses', // The API endpoint and URL in admin panel
  admin: {
    useAsTitle: 'title', // The main field displayed in admin lists
  },
  access: {
    read: () => true, // Everyone can see courses
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'instructor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'instructor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [formatSlug],
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload', // Upload an image
      relationTo: 'media', // Use Payload's media collection
      required: false,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'published',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle course visibility',
      },
    },
    {
      name: 'lessonCount',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
  ],
}
