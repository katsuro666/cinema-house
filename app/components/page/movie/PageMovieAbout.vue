<script setup lang="ts">
const { isTv, description } = defineProps<{
  isTv: boolean
  description?: string
}>()

const title = computed(() => (isTv ? 'О сериале' : 'О фильме'))
</script>

<template>
  <section class="flex flex-col gap-15">
    <h4 class="text-[32px] font-bold">{{ title }}</h4>

    <p class="text-white-50">{{ description ?? 'Нет описания' }}</p>
  </section>
</template>
