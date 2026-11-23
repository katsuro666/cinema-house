import type { DiscoverMovieParams } from '~/api/generated/model'
import { discoverMovie } from '~/api/generated/endpoints'
import { DEFAULT_LANGUAGE } from '~/constants/localization'

export const useDiscoverMovies = (params: DiscoverMovieParams) => {
  const query = computed(() => ({
    language: DEFAULT_LANGUAGE,
    ...params
  }))

  const key = computed(() => `discover-movies-${JSON.stringify(query.value)}`)

  const { data, status, error, refresh } = useAsyncData(key, async () => {
    const res = await discoverMovie(query.value)

    return res.data.results ?? []
  })

  return {
    movies: data,
    status,
    error,
    refresh
  }
}
