import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, friendId } from '~/sanity/env'

const imageBuilder = createImageUrlBuilder({
  friendId: friendId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
