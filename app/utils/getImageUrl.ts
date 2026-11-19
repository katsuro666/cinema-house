export enum IMAGE_SIZE {
  POSTER = 'w500',
  BACKDROP = 'w1280',
  ORIGINAL = 'original'
}

export const getImageUrl = (path?: string, size: IMAGE_SIZE = IMAGE_SIZE.POSTER) => {
  if (!path) return ''
  return `https://image.tmdb.org/t/p/${size}${path}`
}
