<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const emit = defineEmits(['open-comments'])

const [isCommentsOpened, toggleOpenComments] = useToggle()
const [isLiked, toggleLike] = useToggle()
const [isDisliked, toggleDislike] = useToggle()

const likesCount = ref(20)
const dislikesCount = ref(5)

const emitOpenComments = () => {
  toggleOpenComments()
  emit('open-comments')
}

const like = () => {
  isLiked.value ? likesCount.value-- : likesCount.value++
  toggleLike()
}

const dislike = () => {
  isDisliked.value ? dislikesCount.value-- : dislikesCount.value++
  toggleDislike()
}
</script>

<template>
  <div class="flex w-fit gap-5">
    <div
      class="flex items-center gap-2.5"
      :class="isCommentsOpened ? 'text-white' : 'text-white-50'"
    >
      <UIcon
        name="i-lucide-message-circle"
        class="size-5 cursor-pointer"
        @click="emitOpenComments"
      />
      <span>1</span>
    </div>

    <div class="flex items-center gap-2.5" :class="isLiked ? 'text-white' : 'text-white-50'">
      <UIcon name="i-lucide-thumbs-up" class="size-5 cursor-pointer" @click="like()" />
      <span>{{ likesCount }}</span>
    </div>

    <div class="flex items-center gap-2.5" :class="isDisliked ? 'text-white' : 'text-white-50'">
      <UIcon name="i-lucide-thumbs-down" class="size-5 cursor-pointer" @click="dislike()" />
      <span>{{ dislikesCount }}</span>
    </div>
  </div>
</template>
