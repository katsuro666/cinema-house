<script setup lang="ts">
import { movieCredits, movieDetails } from '~/api/generated/endpoints'
import { DEFAULT_LANGUAGE } from '~/constants/localization'

const props = defineProps<{
  movieId: number
  tv?: boolean
}>()

const isTv = computed(() => props.tv)

const { data: movie } = await useAsyncData(`movie-${props.movieId}`, async () => {
  return (await movieDetails(props.movieId, { language: DEFAULT_LANGUAGE })).data
})

const { data: credits } = await useAsyncData(`movie-credits-${props.movieId}`, async () => {
  return (await movieCredits(props.movieId, { language: DEFAULT_LANGUAGE })).data
})
</script>

<template>
  <PageMovieMainBanner :movie="movie" />
  <div class="flex justify-between gap-25">
    <div class="flex flex-col gap-20">
      <PageMovieAbout :is-tv="isTv" :description="movie?.overview" />

      <span>Рецензии</span>
    </div>

    <PageMovieMeta class="min-w-1/4 shrink-0" :movie="movie" :credits="credits" />
  </div>
</template>
