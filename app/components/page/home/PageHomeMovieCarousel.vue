<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'
import { moviePopularList } from '~/api/generated/endpoints'
import { DEFAULT_LANGUAGE } from '~/constants/localization'

const emit = defineEmits(['slide-click'])

const swiper = ref<SwiperInstance | null>(null)
const swiperModules = [Autoplay, EffectCreative]

const setSwiper = (instance: SwiperInstance) => (swiper.value = instance)

const { data: movies, status } = await useAsyncData('popular-movies', async () => {
  return (await moviePopularList({ language: DEFAULT_LANGUAGE })).data.results
})

const isLoading = computed(() => status.value === 'pending' || !swiper.value?.mounted)
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
      :class="{ 'opacity-0': isLoading }"
      @swiper="setSwiper"
    >
      <SwiperSlide v-for="movie in movies" :key="movie.id" class="movie-slide">
        <div>
          <img
            class="h-[490px] w-[380px] cursor-pointer rounded-xl object-cover"
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
            @click="emit('slide-click', movie.id?.toString())"
          />

          <div class="mt-2.5 flex flex-col gap-1.5">
            <span>{{ movie.title }}</span>

            <div v-if="movie.release_date" class="text-accent flex items-center gap-5 text-xs">
              <span
                v-if="isPremiere(movie.release_date)"
                class="border-accent rounded-md border px-2"
              >
                Премьера
              </span>

              <span>{{ formattedReleaseDate(movie.release_date) }}</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div v-if="isLoading" class="absolute top-0 flex">
      <div class="flex flex-col gap-2">
        <USkeleton class="h-[490px] w-[380px] rounded-xl" />
        <USkeleton class="h-5 w-1/2" />
        <USkeleton class="h-5 w-1/3" />
      </div>
      <USkeleton class="-ml-5 h-[340px] w-[220px] translate-y-20 rounded-xl" />
      <USkeleton class="-ml-2 h-[200px] w-[150px] translate-y-40 rounded-xl" />
    </div>

    <template v-if="!isLoading">
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
