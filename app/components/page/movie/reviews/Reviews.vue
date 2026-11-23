<script setup lang="ts">
import type { MovieReviews200ResultsItem } from '~/api/generated/model'

const props = defineProps<{
  reviews?: MovieReviews200ResultsItem[]
}>()

const visibleReviewsCount = ref(2)
const visibleReviews = computed(() => props.reviews?.toSpliced(visibleReviewsCount.value))

const showAllReviews = () => (visibleReviewsCount.value = 100)
</script>

<template>
  <section class="mt-20 flex flex-col gap-15">
    <div class="flex gap-4">
      <h4 class="text-[32px] font-bold">Рецензии</h4>

      <UButton label="Написать рецензию" variant="link" :ui="{ label: 'text-accent' }" />
    </div>

    <div v-if="visibleReviews?.length" class="flex flex-col gap-10">
      <PageMovieReviewsItem v-for="review in visibleReviews" :key="review.id" :review="review" />

      <UButton
        v-if="visibleReviews.length > visibleReviewsCount"
        label="Посмотреть всё"
        size="2xl"
        variant="outline"
        color="white"
        class="w-fit"
        @click="showAllReviews()"
      />
    </div>

    <p v-else>Нет рецензий</p>
  </section>
</template>
