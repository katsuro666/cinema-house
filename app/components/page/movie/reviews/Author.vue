<script setup lang="ts">
import type { MovieReviews200ResultsItemAuthorDetails } from '~/api/generated/model'

const props = defineProps<{
  author?: MovieReviews200ResultsItemAuthorDetails
  createdAt?: string
  additionalText?: string
}>()
</script>

<template>
  <div class="flex gap-3">
    <UAvatar
      :src="getImageUrl(author?.avatar_path)"
      icon="i-lucide-user"
      size="3xl"
      color="white"
      loading="lazy"
    />

    <div class="flex flex-col gap-1">
      <span class="font-semibold">{{ author?.name || author?.username || 'Пользователь' }}</span>

      <span v-if="additionalText" class="text-white-50 text-xs">
        {{ additionalText }}
      </span>

      <span v-if="createdAt" class="text-sm text-white/25">
        {{ formattedReleaseDate(createdAt, true) }}
      </span>
    </div>
  </div>
</template>
