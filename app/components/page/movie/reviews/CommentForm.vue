<script setup lang="ts">
const emit = defineEmits(['publish'])
const comment = ref('')

const publishComment = () => {
  emit('publish', comment.value)
  comment.value = ''
}
</script>

<template>
  <div class="flex gap-3">
    <UAvatar icon="i-lucide-user" size="3xl" color="white" loading="lazy" />

    <div class="flex flex-col gap-1">
      <UTextarea
        v-model="comment"
        placeholder="Написать комментарий..."
        class="w-[316px]"
        variant="outline"
        :maxrows="3"
        autoresize
        :ui="{
          base: 'bg-transparent ring-white/25 placeholder:text-white-50 focus:!ring-white-50'
        }"
      />

      <UButton
        label="Опубликовать"
        variant="link"
        :ui="{ label: 'text-accent text-xs' }"
        @click="publishComment"
      />
    </div>
  </div>
</template>
