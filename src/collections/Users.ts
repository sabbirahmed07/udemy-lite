import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  access: {
    read: () => true, // Anyone can read user info (you can restrict later)
    create: () => true, // New users can sign up
    update: ({ req }) => !!req.user, // Users can update themselves
    delete: ({ req }) => !!req.user, // Users can delete themselves
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true, // Each user must have a unique email
    },
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'Student',
          value: 'student',
        },
        {
          label: 'Instructor',
          value: 'instructor',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
      defaultValue: 'student',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
    },
    {
      name: 'expertise',
      type: 'text',
      label: 'Areas of Expertise',
      admin: {
        condition: (data) => data.role === 'instructor',
      },
    },
  ],
}
