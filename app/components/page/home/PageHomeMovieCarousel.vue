<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'

const movies = [
  {
    title: 'Бесстыжие',
    subtitle: '11 сезон. Финал',
    date: '12 декабря',
    badge: 'Премьера',
    image: '/images/mocks/movie-1.png'
  },
  {
    title: 'Остров надежды',
    subtitle: '1 сезон. 8 серий',
    date: '18 декабря',
    badge: 'Новинка',
    image: '/images/mocks/movie-2.png'
  },
  {
    title: 'По следу',
    subtitle: 'Фильм 2026 года',
    date: '21 декабря',
    badge: 'Скоро',
    image: '/images/mocks/movie-3.png'
  },
  {
    title: 'Последний рейс',
    subtitle: '2 сезон. 4 серии',
    date: '27 декабря',
    badge: 'Премьера',
    image: '/images/mocks/movie-1.png'
  }
]

const swiper = ref<SwiperInstance | null>(null)
const swiperModules = [Autoplay, EffectCreative]

const setSwiper = (instance: SwiperInstance) => (swiper.value = instance)
</script>

<template>
  <div class="movie-carousel">
    <Swiper
      :modules="swiperModules"
      :slides-per-view="'auto'"
      :space-between="-40"
      :loop="true"
      :speed="700"
      :grab-cursor="true"
      effect="creative"
      :creative-effect="{
        limitProgress: 3,
        prev: { translate: ['-82%', 0, -260], scale: 0.7, opacity: 0.45 },
        next: { translate: ['72%', 0, -260], scale: 0.78, opacity: 0.72 }
      }"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="movie-swiper relative"
      :class="{ 'opacity-0': !swiper?.mounted }"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="movie in movies" :key="movie.title" class="movie-slide">
        <div>
          <img
            class="h-[490px] w-[380px] rounded-xl object-cover"
            :src="movie.image"
            :alt="movie.title"
          />

          <div class="mt-2.5 flex flex-col gap-1.5">
            <span>{{ movie.title }}</span>
            <div class="text-accent flex items-center gap-5 text-xs">
              <span class="border-accent rounded-md border px-2">{{ movie.badge }}</span>
              <span>{{ movie.date }}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div v-if="!swiper?.mounted" class="absolute top-0 flex">
      <div class="flex flex-col gap-2">
        <USkeleton class="h-[490px] w-[380px] rounded-xl" />
        <USkeleton class="h-5 w-1/2" />
        <USkeleton class="h-5 w-1/3" />
      </div>
      <USkeleton class="-ml-5 h-[340px] w-[220px] translate-y-20 rounded-xl" />
      <USkeleton class="-ml-2 h-[200px] w-[150px] translate-y-40 rounded-xl" />
    </div>

    <template v-if="swiper?.mounted">
      <UButton
        icon="i-lucide-arrow-left"
        class="carousel-arrow left-0"
        aria-label="Предыдущий фильм"
        variant="link"
        @click="swiper?.slidePrev()"
      />

      <UButton
        icon="i-lucide-arrow-right"
        class="carousel-arrow right-0"
        aria-label="Следующий фильм"
        variant="link"
        @click="swiper?.slideNext()"
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.movie-carousel {
  position: relative;
  min-width: 0;
  min-height: 550px;
  flex: 1;
  overflow: hidden;
  padding: 0 36px;
}

:deep(.movie-slide) {
  width: clamp(220px, 25vw, 380px);
  transition:
    filter 700ms ease,
    opacity 700ms ease;
}

:deep(.movie-slide:not(.swiper-slide-active)) {
  filter: blur(5px);
  opacity: 0.65;
}

.carousel-arrow {
  position: absolute;
  top: 42%;
  z-index: 5;
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border-radius: 999px;
  color: rgb(255 255 255 / 70%);

  &:hover {
    color: white;
  }
}

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
