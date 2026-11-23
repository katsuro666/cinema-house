<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import type { MovieReviews200ResultsItem } from '~/api/generated/model'

const props = defineProps<{
  review?: MovieReviews200ResultsItem
}>()

const [isCommentsOpened, toggleOpenComments] = useToggle()
</script>

<template>
  <div class="flex flex-col gap-4">
    <PageMovieReviewsAuthor :author="review?.author_details" :created-at="review?.created_at" />

    <span v-if="review?.author_details?.rating" class="text-accent">
      {{ review?.author_details?.rating }}
    </span>

    <p class="text-white-50 whitespace-pre-line">{{ review?.content }}</p>

    <PageMovieReviewsActions class="ml-auto" @open-comments="toggleOpenComments()" />

    <PageMovieReviewsComments v-if="isCommentsOpened" />
  </div>
</template>
