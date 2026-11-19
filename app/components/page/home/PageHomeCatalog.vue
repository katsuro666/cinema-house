<script setup lang="ts">
import MoviesSlider from '~/components/ui/MoviesSlider.vue'
import { ROUTES } from '~/constants/routes'
import { GENRES_MOCK, MOVIES_MOCK } from '~/mocks/movies'

const router = useRouter()

const moviesByGenre = computed(() => {
  return GENRES_MOCK.map((genre) => {
    return {
      genre: genre.name,
      movies: MOVIES_MOCK.filter((movie) => movie.genre_ids.includes(genre.id))
    }
  })
})

const goToMovie = (id: string) => {
  router.push(`/${ROUTES.MOVIE}/${id}`)
}

// TODO: добавить api запрос и заменить моки
</script>

<template>
  <section class="mt-25 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">Каталог фильмов и сериалов</h2>

    <div class="flex flex-col gap-12.5">
      <div v-for="movie in moviesByGenre" :key="movie.genre" class="flex flex-col gap-5">
        <h3 class="text-2xl font-semibold">
          {{ movie.genre }}
        </h3>

        <MoviesSlider :slides="movie.movies" @slide-click="goToMovie($event)" />
      </div>
    </div>

    <UButton
      label="Посмотреть всё"
      color="white"
      variant="outline"
      size="2xl"
      class="w-fit font-semibold"
    />
  </section>
</template>
