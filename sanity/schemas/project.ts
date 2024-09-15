import { defineField, defineType } from 'sanity'
import { z } from 'zod'

import { Layers3Icon } from '~/assets'

export const friends = z.object({
  _id: z.string(),
  name: z.string(),
  url: z.string().url(),
  description: z.string(),
  icon: z.object({
    _ref: z.string(),
    asset: z.any(),
  }),
})
export type friends = z.infer<typeof friends>

export default defineType({
  name: 'friends',
  title: '友链',
  type: 'document',
  icon: Layers3Icon,
  fields: [
    defineField({
      name: 'name',
      title: '名字',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: '链接',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: '简介',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: '图片',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
