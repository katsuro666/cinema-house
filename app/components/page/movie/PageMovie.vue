<script setup lang="ts">
import { movieDetails } from '~/api/generated/endpoints'
import { DEFAULT_LANGUAGE } from '~/constants/localization'

const props = defineProps<{
  movieId: number
  tv?: boolean
}>()

const isTv = computed(() => props.tv)

const { data: movie } = await useAsyncData(`movie-${props.movieId}`, async () => {
  return (await movieDetails(props.movieId, { language: DEFAULT_LANGUAGE })).data
})
</script>

<template>
  <PageMovieMainBanner :movie="movie" />
</template>
