import type { GenreMovieList200GenresItem } from '~/api/generated/model'
import { sentenceCase } from 'change-case'

export const useMoviesByGenres = (genres: MaybeRefOrGetter<GenreMovieList200GenresItem[]>) => {
  const genresList = computed(() => toValue(genres))

  const queries = genresList.value.map((genre) => {
    return useDiscoverMovies({
      with_genres: String(genre.id),
      sort_by: 'vote_average.desc',
      'vote_count.gte': 100
    })
  })

  const moviesByGenre = computed(() => {
    return genresList.value.map((genre, index) => ({
      genre: genre.name ? sentenceCase(genre.name) : 'Без жанра',
      genreId: genre.id,
      movies: queries[index]?.movies.value ?? [],
      status: queries[index]?.status.value ?? 'idle'
    }))
  })

  return {
    moviesByGenre
  }
}
