<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'
import { GENRES_MOCK } from '~/mocks/movies'

const props = defineProps<{
  movies: {
    title: string
    vote_average: number
    genre_ids: number[]
  }[]
  slidesPerView?: number
  isLooped?: boolean
}>()

const swiper = ref<SwiperInstance | null>(null)
const swiperModules = [Autoplay]

const isReady = ref(false)
const isBeginning = ref(true)
const isEnd = ref(false)

const updateNavState = (instance: SwiperInstance) => {
  isBeginning.value = instance.isBeginning
  isEnd.value = instance.isEnd
}

const setSwiper = (instance: SwiperInstance) => {
  swiper.value = instance
  updateNavState(instance)
}

const getMovieGenres = (genres: number[]) => {
  return GENRES_MOCK.filter(genre => genres.includes(genre.id))
    .map(genre => genre.name)
    .join(', ')
}

onMounted(() => {
  isReady.value = true
})
</script>

<template>
  <div class="relative">
    <Swiper
      v-if="isReady"
      :modules="swiperModules"
      :slides-per-view="props.slidesPerView || 4"
      :space-between="20"
      :loop="isLooped"
      :speed="700"
      :grab-cursor="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="movie-swiper"
      @swiper="setSwiper"
      @slide-change="updateNavState"
      @slides-length-change="updateNavState"
    >
      <SwiperSlide
        v-for="movie in movies"
        :key="movie.title"
        class="movie-slide"
      >
        <div class="flex flex-col gap-2.5">
          <img
            class="rounded-xl object-cover w-[335px] h-[225px]"
            :src="`/images/mocks/movie-${Math.floor(Math.random() * 3) + 1}.png`"
            :alt="movie.title"
          >

          <ul>
            <li class="text-accent">
              {{ movie.vote_average }}
            </li>
            <li class="text-white-50">
              {{ getMovieGenres(movie.genre_ids) }}
            </li>
          </ul>

          <span class="text-xl font-semibold">{{ movie.title }}</span>
        </div>
      </SwiperSlide>
    </Swiper>

    <template v-if="isReady">
      <UButton
        v-if="!isBeginning"
        icon="i-lucide-move-left"
        class="carousel-arrow absolute top-25 -left-15 hover:[&>span]:text-white"
        aria-label="Предыдущий фильм"
        variant="link"
        :ui="{
          leadingIcon: 'size-9 text-gray/50'
        }"
        @click="swiper?.slidePrev()"
      />

      <UButton
        v-if="!isEnd"
        icon="i-lucide-move-right"
        class="carousel-arrow absolute top-25 -right-15 hover:[&>span]:text-white"
        aria-label="Следующий фильм"
        variant="link"
        :ui="{
          leadingIcon: 'size-9 text-gray/50'
        }"
        @click="swiper?.slideNext()"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .movie-carousel,
  .movie-swiper {
    min-height: 390px;
  }

  :deep(.movie-slide) {
    width: min(62vw, 280px);
  }
}
</style>
