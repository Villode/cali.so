import { createClient } from 'next-sanity'

import { apiVersion, dataset, friendId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  friendId,
  useCdn,
  // perspective: 'published',
})
