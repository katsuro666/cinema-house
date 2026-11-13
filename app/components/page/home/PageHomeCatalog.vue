<script setup lang="ts">
import MoviesSlider from '~/components/ui/MoviesSlider.vue'
import { GENRES_MOCK, MOVIES_MOCK } from '~/mocks/movies'

const moviesByGenre = computed(() => {
  return GENRES_MOCK.map((genre) => {
    return {
      genre: genre.name,
      movies: MOVIES_MOCK.filter(movie => movie.genre_ids.includes(genre.id))
    }
  })
})
</script>

<template>
  <section class="mt-25 flex flex-col gap-15">
    <h2 class="font-bold text-[32px]">
      Каталог фильмов и сериалов
    </h2>

    <div class="flex flex-col gap-12.5">
      <div
        v-for="movie in moviesByGenre"
        :key="movie.genre"
        class="flex flex-col gap-5"
      >
        <h3 class="font-semibold text-2xl">
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
      class="w-fit py-4.5 px-6 font-semibold"
    />
  </section>
</template>
