<script setup lang="ts">
import { useToggle } from '@vueuse/core'

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

const [isSearchOpened, toggleSearchOpen] = useToggle()
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
        <UiAppLogo />

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

  <LayoutSearchDrawer v-model:open="isSearchOpened" />
</template>
