import { sentenceCase } from 'change-case'
import { defineStore } from 'pinia'
import { genreMovieList } from '~/api/generated/endpoints'
import type { GenreMovieList200GenresItem } from '~/api/generated/model'
import { DEFAULT_LANGUAGE } from '~/constants/localization'

export const useGenresStore = defineStore('genres-store', () => {
  const genres = ref<GenreMovieList200GenresItem[]>([])
  const isGenresLoaded = ref(false)

  const fetchGenres = async () => {
    if (isGenresLoaded.value) return

    const res = await genreMovieList({ language: DEFAULT_LANGUAGE })

    genres.value = res.data.genres ?? []
    isGenresLoaded.value = true
  }

  const genresMap = computed(() => {
    return new Map(genres.value.map(({ id, name }) => [id, sentenceCase(name!)]))
  })

  const getGenreName = (id: number) => {
    return genresMap.value.get(id)
  }

  const getGenresNames = (ids: number[]) => {
    return ids.map(getGenreName).join(', ')
  }

  return {
    genres,
    isGenresLoaded,
    fetchGenres,
    genresMap,
    getGenreName,
    getGenresNames
  }
})
