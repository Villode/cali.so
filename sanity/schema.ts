import { type SchemaTypeDefinition } from 'sanity'

import { readingTimeType } from '~/sanity/schemas/types/readingTime'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import friend from './schemas/friend'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [readingTimeType, post, category, blockContent, friend, settings],
}
