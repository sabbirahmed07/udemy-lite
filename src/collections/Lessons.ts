// collections/Lessons.ts
import formatSlug from '@/formatSlug'
import type { CollectionConfig } from 'payload'
import { getPayloadClient } from '@/lib/payoad-api/payload'

const Lessons: CollectionConfig = {
  slug: 'lessons',
  labels: {
    singular: 'Lesson',
    plural: 'Lessons',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'course', 'createdAt'],
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
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [formatSlug],
      },
    },
    {
      name: 'course',
      type: 'relationship',
      relationTo: 'courses',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'duration',
      type: 'number',
      admin: { step: 1, description: 'Duration in minutes' },
    },
  ],
  hooks: {
    afterChange: [
      async ({ data, originalDoc, operation }) => {
        const payload = await getPayloadClient()
        const courseId = data.course

        const { totalDocs } = await payload.find({
          collection: 'lessons',
          where: { course: { equals: courseId } },
          limit: 0,
        })

        await payload.update({
          collection: 'courses',
          id: courseId,
          data: { lessonCount: totalDocs },
        })
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        const payload = await getPayloadClient()
        const courseId = doc.course

        const { totalDocs } = await payload.find({
          collection: 'lessons',
          where: { course: { equals: courseId } },
          limit: 0,
        })

        await payload.update({
          collection: 'courses',
          id: courseId,
          data: { lessonCount: totalDocs },
        })
      },
    ],
  },
}

export default Lessons
