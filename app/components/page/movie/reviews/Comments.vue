<script setup lang="ts">
const comments = ref([
  {
    id: 1,
    createdAt: '2026-09-19T15:19:30Z',
    text: 'Да, согласна с вами - гениальная работа режиссёра',
    author: {
      name: 'Пользователь'
    }
  }
])
const addComment = (text: string) => {
  const trimmed = text.trim()
  if (!trimmed) return

  comments.value.push({
    id: Date.now(),
    createdAt: new Date().toISOString(),
    text: trimmed,
    author: {
      name: 'Вы'
    }
  })
}
</script>

<template>
  <div class="border-white-50 flex flex-col items-end gap-5 border-t pt-6">
    <div class="max-w-100 break-all">
      <PageMovieReviewsAuthor
        v-for="comment in comments"
        :key="comment.id"
        :author="comment.author"
        :created-at="comment.createdAt"
        :additional-text="comment.text"
        class="mb-4"
      />

      <PageMovieReviewsCommentForm @publish="addComment($event)" />
    </div>
  </div>
</template>
