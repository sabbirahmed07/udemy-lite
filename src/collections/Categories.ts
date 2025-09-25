import formatSlug from '@/formatSlug'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Everyone can read categories
    create: ({ req: { user } }) => user?.role === 'admin', // Only admin can create
    update: ({ req: { user } }) => user?.role === 'admin', // Only admin can update
    delete: ({ req: { user } }) => user?.role === 'admin', // Only admin can delete
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
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
