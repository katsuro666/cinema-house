<script setup lang="ts">
import MoviesSlider from '~/components/ui/MoviesSlider.vue'
import { COLLECTIONS_MOCK } from '~/mocks/movies'
</script>

<template>
  <section class="mt-30 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">
      Тематические подборки
    </h2>

    <MoviesSlider
      :slides="COLLECTIONS_MOCK"
      title-inside
      tinted-image
      square
    />
  </section>
</template>
