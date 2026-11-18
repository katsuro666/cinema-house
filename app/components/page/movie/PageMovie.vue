<script setup lang="ts">
import { MOVIE_MOCK } from '~/mocks/movies'

defineProps<{
  pageId: string
}>()

// TODO: добавить апи запрос на все секции по id фильма
</script>

<template>
  <PageMovieMainBanner :movie="MOVIE_MOCK" />
</template>
