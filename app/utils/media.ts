import type { TrendingAll200ResultsItem, SearchMulti200ResultsItem } from '~/api/generated/model'
import { ROUTES } from '~/constants/routes'

export const isTVShow = (type?: string) => type?.toLowerCase() === 'tv'
export const isMovie = (type?: string) => type?.toLowerCase() === 'movie'

export const getMediaRoute = (item: TrendingAll200ResultsItem | SearchMulti200ResultsItem) => {
  return isTVShow(item.media_type) ? `${ROUTES.TV}/${item.id}` : `${ROUTES.MOVIE}/${item.id}`
}

export const getProductionCountries = (countries?: { iso_3166_1?: string; name?: string }[]) => {
  return countries?.length ? countries.map((country) => country.name).join(', ') : ''
}
