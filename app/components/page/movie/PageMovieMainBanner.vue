<script setup lang="ts">
import type { MovieDetails200 } from '~/api/generated/model'

const props = defineProps<{
  movie: MovieDetails200
}>()

const genresStore = useGenresStore()

const movieGenres = computed(() => genresStore.getGenresNamesFromArr(props.movie.genres ?? []))
</script>

<template>
  <section class="relative z-5 min-h-[700px] pt-80 pb-11">
    <div class="relative z-5 flex flex-col gap-4">
      <h1 class="text-7xl font-extrabold">
        {{ movie.title }}
      </h1>

      <ul class="flex gap-1">
        <li class="text-accent">
          {{ movie.vote_average }}
        </li>

        <li class="text-white">
          {{ movieGenres }}
        </li>
      </ul>

      <div class="flex gap-4">
        <UButton
          label="Смотреть фильм"
          trailing-icon="i-lucide-play"
          color="accent"
          size="2xl"
          :ui="{
            trailingIcon: 'ml-2'
          }"
        />

        <UButton label="Трейлер" color="white" variant="outline" size="2xl" />

        <UButton
          color="white"
          icon="i-lucide-file-plus"
          variant="outline"
          size="2xl"
          :ui="{
            leadingIcon: 'size-6'
          }"
        />

        <UButton
          color="white"
          icon="i-lucide-heart"
          variant="outline"
          size="2xl"
          :ui="{
            leadingIcon: 'size-6'
          }"
        />
      </div>
    </div>
  </section>

  <div class="pointer-events-none absolute top-0 left-0 z-1 h-[700px] w-full">
    <!-- <img
      alt="Фоновое изображение"
      class="absolute inset-0 h-full w-full object-cover"
    /> -->

    <img
      src="/images/blurred-bg-horizontal.png"
      alt="Фоновое изображение"
      class="absolute -bottom-45 left-0 h-100 w-full"
    />
  </div>
</template>
