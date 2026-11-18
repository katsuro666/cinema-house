<script setup lang="ts">
import MoviesSlider from '~/components/ui/MoviesSlider.vue'
import { GENRES_MOCK, MOVIES_MOCK } from '~/mocks/movies'

const moviesByGenre = computed(() => {
  return GENRES_MOCK.map((genre) => {
    return {
      genre: genre.name,
      movies: MOVIES_MOCK.filter((movie) => movie.genre_ids.includes(genre.id))
    }
  })
})
</script>

<template>
  <section class="mt-25 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">Каталог фильмов и сериалов</h2>

    <div class="flex flex-col gap-12.5">
      <div v-for="movie in moviesByGenre" :key="movie.genre" class="flex flex-col gap-5">
        <h3 class="text-2xl font-semibold">
          {{ movie.genre }}
        </h3>

        <MoviesSlider :slides="movie.movies" />
      </div>
    </div>

    <UButton
      label="Посмотреть всё"
      color="white"
      variant="outline"
      size="xl"
      class="w-fit px-6 py-4.5 font-semibold"
    />
  </section>
</template>
