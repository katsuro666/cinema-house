<script setup lang="ts">
import { useScrollLock, useToggle } from '@vueuse/core'

import { SEARCH_MOVIES_MOCKS, SEARCH_PEOPLE_MOCKS } from '~/mocks/header/search'

const links = [
  {
    to: '/',
    label: 'Фильмы'
  },
  {
    to: '/',
    label: 'Сериалы'
  },
  {
    to: '/',
    label: 'Подборки'
  }
]

const searchQuery = ref('')
const [isSearchOpened, toggleSearchOpen] = useToggle()
const isScrollLocked = useScrollLock(import.meta.client ? document : null)

const clearSearch = () => {
  searchQuery.value = ''
}

const closeSearch = () => {
  clearSearch()
  toggleSearchOpen()
}

watch(isSearchOpened, (isOpened) => {
  isScrollLocked.value = isOpened
})
</script>

<template>
  <UHeader
    :ui="{
      root: `sticky top-0 z-[10000] py-7.5 h-fit transition-colors duration-300 ${isSearchOpened ? 'bg-black border-none' : 'bg-transparent border-white/15'}`,
      container: '!px-25 max-lg:!px-10 max-md:!px-2.5',
      center: 'w-full justify-center items-center'
    }"
  >
    <template #left>
      <div class="flex items-center gap-15">
        <NuxtLink to="/" aria-label="Главная" class="text-[32px] font-extrabold uppercase">
          <span>Кино</span>
          <span class="text-accent">Дом</span>
        </NuxtLink>

        <div v-if="!isSearchOpened" class="flex gap-7.5">
          <NuxtLink v-for="link in links" :key="`${link.to}-${link.label}`" :to="link.to">
            <ULink class="cursor-pointer font-semibold text-white/50">
              {{ link.label }}
            </ULink>
          </NuxtLink>

          <UButton
            icon="i-lucide-search"
            size="xl"
            color="white-50"
            variant="ghost"
            :ui="{
              base: 'group p-0 hover:bg-transparent',
              leadingIcon: 'group-hover:text-white transition-colors'
            }"
            @click="toggleSearchOpen()"
          />
        </div>
      </div>
    </template>

    <UInput
      v-if="isSearchOpened"
      v-model="searchQuery"
      icon="i-lucide-search"
      size="xs"
      variant="none"
      placeholder="Название фильма, сериала, или имя актёра, режиссёра"
      class="w-full max-w-[540px]"
      :ui="{
        base: 'text-white placeholder:text-white-50 ps-9',
        leadingIcon: 'text-white size-5'
      }"
    >
      <template #trailing>
        <UButton color="white-50" variant="link" size="xs" icon="i-lucide-x" @click="clearSearch" />
      </template>
    </UInput>

    <template #right>
      <UAvatar
        icon="i-lucide-user"
        size="3xl"
        color="white-50"
        :ui="{
          root: 'group cursor-pointer hover:bg-white/10',
          icon: 'group-hover:text-white transition-colors'
        }"
      />
    </template>
  </UHeader>

  <div
    class="fixed inset-x-0 top-0 z-[9999] overflow-hidden bg-black transition-[max-height] duration-300 ease-in-out"
    :class="isSearchOpened ? 'pointer-events-auto max-h-[100vh]' : 'pointer-events-none max-h-0'"
  >
    <div class="max-h-[100vh] overflow-y-auto px-25 pt-34 pb-8 max-lg:px-10 max-md:px-2.5">
      <div class="mx-auto max-w-[1100px]">
        <h2 class="text-[32px] font-bold">Часто ищут</h2>

        <div
          class="mt-6 grid grid-cols-3 gap-x-16 gap-y-6 max-lg:gap-x-8 max-md:grid-cols-2 max-md:gap-x-4"
        >
          <div v-for="movie in SEARCH_MOVIES_MOCKS" :key="movie.id" class="flex min-w-0 gap-2.5">
            <img
              :src="movie.image"
              :alt="movie.title"
              class="pointer-events-none h-[75px] w-[154px] shrink-0 rounded-md object-cover"
            />
            <span class="text-sm text-white/80">{{ movie.title }}</span>
          </div>
        </div>

        <h3 class="text-white-50 mt-10 text-sm font-semibold uppercase">Актёры и режиссёры</h3>

        <div
          class="mt-4 grid grid-cols-3 gap-x-15 gap-y-4 max-lg:gap-x-8 max-md:grid-cols-2 max-md:gap-x-4"
        >
          <div v-for="person in SEARCH_PEOPLE_MOCKS" :key="person.id" class="flex flex-col">
            <span class="text-sm">
              {{ person.title }}
            </span>

            <span class="text-white-50 text-[10px]">
              {{ person.role }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="isSearchOpened" class="fixed inset-0 z-[9998] bg-black/70" @click="closeSearch" />
</template>
