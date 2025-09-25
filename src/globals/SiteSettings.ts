import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'footerText',
      type: 'textarea',
    },
    {
      name: 'defaultCourseThumbnail',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
