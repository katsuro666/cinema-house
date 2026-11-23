<script setup lang="ts">
import type { MovieCredits200, MovieDetails200 } from '~/api/generated/model'

const props = defineProps<{
  movie?: MovieDetails200
  credits?: MovieCredits200
}>()

const genresStore = useGenresStore()

const movieLanguages = computed(() =>
  props.movie?.spoken_languages?.map((lang) => lang.name).join(', ')
)

const director = computed(() =>
  props.credits?.crew
    ?.filter((person) => isDirector(person.job))
    .map((person) => person.name)
    .join(', ')
)

const meta = computed(() => [
  {
    title: 'Рейтинг IMDb:',
    text: `${Number(props.movie?.vote_average).toFixed(1)}`,
    class: 'text-accent'
  },
  {
    title: 'Рейтинг Кинопоиска:',
    text: `${Number(props.movie?.vote_average).toFixed(1)}`,
    class: 'text-accent'
  },
  {
    title: 'Жанр:',
    text: genresStore.getGenresNamesFromArr(props.movie?.genres ?? [])
  },
  {
    title: 'Режиссер:',
    text: director.value
  },
  {
    title: 'Актёрский состав:',
    text: props.credits?.cast
      ?.toSpliced(15)
      .map((actor) => actor.name)
      .join(', ')
  },
  {
    title: 'Страна:',
    text: getProductionCountries(props.movie?.production_countries)
  },
  {
    title: 'Время:',
    text: formattedRuntime(props.movie?.runtime)
  },
  {
    title: 'Аудиодорожки:',
    text: movieLanguages.value
  },
  {
    title: 'Субтитры:',
    text: movieLanguages.value
  }
])
</script>

<template>
  <section class="flex flex-col gap-5">
    <div v-for="field in meta" :key="field.title" class="grid grid-cols-[156px_256px] gap-12">
      <span class="w-[160px] shrink-0 text-white/25">{{ field.title }}</span>

      <span :class="field.class ?? 'text-white/75'">
        {{ field.text }}
      </span>
    </div>
  </section>
</template>
