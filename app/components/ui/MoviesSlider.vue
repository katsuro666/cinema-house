<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'
import type { SwiperModule } from 'swiper/types'

const props = defineProps<{
  slides: Partial<{
    id: number | string
    title: string
    vote_average: number
    genre_ids: number[]
    poster_path: string
  }>[]
  slidesPerView?: number
  looped?: boolean
  titleInside?: boolean
  tintedImage?: boolean
  square?: boolean
  modules?: SwiperModule[]
}>()

const emit = defineEmits(['slide-click'])

const genresStore = useGenresStore()

const swiper = ref<SwiperInstance | null>(null)
const swiperModules = computed(() => (props.modules?.length ? props.modules : [Autoplay]))

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

const imageSizeClasses = computed(() => {
  return props.square ? 'w-[335px] h-[335px]' : 'w-[335px] h-[225px]'
})

const imgClick = (id?: number | string) => {
  if (id) emit('slide-click', id.toString())
}

const slidesPerView = computed(() => props.slidesPerView || 4)
</script>

<template>
  <div class="relative">
    <Swiper
      :modules="swiperModules"
      :slides-per-view="slidesPerView"
      :space-between="20"
      :loop="looped"
      :speed="700"
      :grab-cursor="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      class="movie-swiper"
      :class="{ 'h-0 opacity-0': !swiper?.mounted }"
      @swiper="setSwiper"
      @slide-change="updateNavState"
      @slides-length-change="updateNavState"
    >
      <SwiperSlide v-for="(slide, idx) in slides" :key="slide.id" class="movie-slide">
        <div class="flex flex-col gap-2.5">
          <img
            class="relative cursor-pointer rounded-xl object-cover"
            :src="getImageUrl(slide.poster_path)"
            :alt="slide.title"
            :class="[{ 'opacity-50': tintedImage }, imageSizeClasses]"
            :loading="idx < slidesPerView ? 'eager' : 'lazy'"
            @click="imgClick(slide.id)"
          />

          <ul class="flex gap-1">
            <li v-if="slide.vote_average" class="text-accent">
              {{ Number(slide.vote_average).toFixed(1) }}
            </li>

            <li v-if="slide.genre_ids" class="text-white-50 truncate">
              {{ genresStore.getGenresNames(slide.genre_ids) }}
            </li>
          </ul>

          <span
            class="truncate text-xl font-semibold"
            :class="{
              'absolute bottom-[25px] left-[25px] max-w-[50%] text-clip whitespace-normal':
                titleInside
            }"
          >
            {{ slide.title }}
          </span>
        </div>
      </SwiperSlide>
    </Swiper>

    <div v-if="!swiper?.mounted" class="flex justify-between">
      <div v-for="item in 4" :key="item" class="flex flex-col gap-2.5">
        <USkeleton :class="imageSizeClasses" />

        <template v-if="!titleInside">
          <USkeleton class="h-4 w-[30%]" />
          <USkeleton class="h-4 w-[60%]" />
        </template>
      </div>
    </div>

    <template v-if="swiper?.mounted">
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
