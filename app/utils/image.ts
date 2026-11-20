import { TMDB_IMAGE_SIZES, TMDB_IMAGE_PATH } from '~/constants/tmdb'

export const getImageUrl = (path?: string, size: TMDB_IMAGE_SIZES = TMDB_IMAGE_SIZES.POSTER) => {
  if (!path) return ''
  return `${TMDB_IMAGE_PATH}${size}${path}`
}
