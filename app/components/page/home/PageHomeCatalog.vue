<script setup lang="ts">
import { ROUTES } from '~/constants/routes'

const router = useRouter()
const { genres } = storeToRefs(useGenresStore())

const { moviesByGenre } = useMoviesByGenres(computed(() => genres.value.slice(0, 5)))

const goToMovie = (id: string) => {
  router.push(`/${ROUTES.MOVIE}/${id}`)
}
</script>

<template>
  <section class="mt-25 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">Каталог фильмов и сериалов</h2>

    <div class="flex flex-col gap-12.5">
      <div v-for="movie in moviesByGenre" :key="movie.genreId" class="flex flex-col gap-5">
        <h3 class="text-2xl font-semibold">
          {{ movie.genre }}
        </h3>

        <UiMoviesSlider :slides="movie.movies" @slide-click="goToMovie($event)" />
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
