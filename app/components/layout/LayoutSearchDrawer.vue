<script setup lang="ts">
import {
  trendingAll as getTrendingAll,
  trendingPeople as getTrendingPeople,
  searchMulti
} from '~/api/generated/endpoints'
import { DEFAULT_LANGUAGE } from '~/constants/localization'
import { watchDebounced } from '@vueuse/core'
import type { SearchMulti200ResultsItem, TrendingPeople200ResultsItem } from '~/api/generated/model'

enum SEARCH_STATUSES {
  IDLE = 'idle',
  LOADING = 'loading',
  DONE = 'done'
}

const isOpen = defineModel<boolean>('open', { default: false })

const searchQuery = ref('')
const isQueryActive = computed(() => searchQuery.value.trim().length > 0)
const searchStatus = ref<SEARCH_STATUSES>(SEARCH_STATUSES.IDLE)
const searchResults = ref<SearchMulti200ResultsItem[] | TrendingPeople200ResultsItem[]>([])

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  searchStatus.value = SEARCH_STATUSES.IDLE
}

const { data: trendingAll } = useAsyncData('trending-all', async () => {
  return (await getTrendingAll({ language: DEFAULT_LANGUAGE })).data.results?.toSpliced(6) ?? []
})

const { data: trendingPeople } = useAsyncData('trending-people', async () => {
  return (await getTrendingPeople({ language: DEFAULT_LANGUAGE })).data.results?.toSpliced(6)
})

const searchedMedia = computed<SearchMulti200ResultsItem[]>(() =>
  searchResults.value
    .filter((item) => isMovie(item.media_type) || isTVShow(item.media_type))
    .toSpliced(6)
)

const searchedPeople = computed<TrendingPeople200ResultsItem[]>(() =>
  searchResults.value.filter((item) => isPerson(item.media_type)).toSpliced(6)
)

const showSearchResults = computed(() => isQueryActive.value && searchStatus.value === 'done')

const displayedMedia = computed(() =>
  isQueryActive.value ? searchedMedia.value : trendingAll.value
)

const displayedPeople = computed(() =>
  isQueryActive.value ? searchedPeople.value : trendingPeople.value
)

const getPersonRole = (department?: string) => {
  if (!department) return 'Неизвестно'
  return isActor(department) ? 'Актёр' : 'Режиссёр'
}

watch(isOpen, (open) => {
  if (!open) clearSearch()
})

watch(searchQuery, (val) => {
  if (!val.trim()) {
    clearSearch()
  } else {
    searchStatus.value = SEARCH_STATUSES.LOADING
  }
})

watchDebounced(
  searchQuery,
  async (val) => {
    const query = val.trim()
    if (!query) return

    try {
      const res = await searchMulti({
        language: DEFAULT_LANGUAGE,
        query
      })
      searchResults.value = res.data.results ?? []
      searchStatus.value = SEARCH_STATUSES.DONE
    } catch {
      searchStatus.value = SEARCH_STATUSES.IDLE
    }
  },
  { debounce: 400 }
)
</script>

<template>
  <UDrawer
    v-model:open="isOpen"
    direction="top"
    :handle="false"
    handle-only
    :ui="{
      container: 'px-25 pt-13 pb-8 gap-8 select-text min-h-[570px]',
      content: 'bg-black',
      header: 'justify-between gap-4',
      overlay: 'bg-black/70'
    }"
  >
    <template #header>
      <UiAppLogo />

      <UInput
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
          <UButton
            v-if="isQueryActive"
            color="white-50"
            variant="link"
            size="xs"
            icon="i-lucide-x"
            @click="clearSearch"
          />
        </template>
      </UInput>

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

    <template #body>
      <div class="mx-auto max-w-[1100px]">
        <div v-if="searchStatus === SEARCH_STATUSES.LOADING" class="flex flex-col gap-6">
          <USkeleton class="h-10 w-[180px]" />

          <div class="mt-2 grid grid-cols-3 gap-4">
            <div v-for="i in 6" class="flex gap-2">
              <USkeleton class="h-[75px] w-[154px] rounded-md" />
              <USkeleton class="h-4 w-[100px]" />
            </div>
          </div>

          <USkeleton class="mt-6 h-4 w-[150px]" />

          <div class="grid grid-cols-3 gap-6">
            <div v-for="i in 6" class="flex flex-col gap-1">
              <USkeleton class="h-4 w-[130px]" />
              <USkeleton class="h-3 w-10" />
            </div>
          </div>
        </div>

        <p
          v-else-if="showSearchResults && !displayedMedia?.length && !displayedPeople?.length"
          class="text-white-50 m-auto w-fit text-sm"
        >
          По запросу «{{ searchQuery }}» ничего не найдено
        </p>

        <template v-else>
          <h2 class="flex items-center gap-3 text-[32px] font-bold">
            <NuxtLink v-if="isQueryActive" class="cursor-pointer">
              Все результаты

              <UIcon name="i-lucide-chevron-right" class="size-6" />
            </NuxtLink>

            <template v-else>Часто ищут</template>
          </h2>

          <div
            v-if="displayedMedia?.length"
            class="mt-6 grid grid-cols-3 gap-x-16 gap-y-6 max-lg:gap-x-8 max-md:grid-cols-2 max-md:gap-x-4"
          >
            <div v-for="media in displayedMedia" :key="media.id" class="flex min-w-0 gap-2.5">
              <NuxtLink
                :to="getMediaRoute(media)"
                class="flex-none cursor-pointer"
                @click="isOpen = false"
              >
                <img
                  :src="getImageUrl(media.backdrop_path || media.poster_path)"
                  :alt="media.title || media.name"
                  class="pointer-events-none h-[75px] w-[154px] shrink-0 rounded-md bg-white/10 object-cover"
                />
              </NuxtLink>

              <span class="text-sm text-white/80">{{ media.title || media.name }}</span>
            </div>
          </div>

          <template v-if="displayedPeople?.length">
            <h3 class="text-white-50 mt-10 text-sm font-semibold uppercase">Актёры и режиссёры</h3>

            <div
              class="mt-4 grid grid-cols-3 gap-x-15 gap-y-4 max-lg:gap-x-8 max-md:grid-cols-2 max-md:gap-x-4"
            >
              <div v-for="person in displayedPeople" :key="person.id" class="flex flex-col">
                <span class="text-sm">
                  {{ person.name }}
                </span>

                <span class="text-white-50 text-[10px]">
                  {{ getPersonRole(person.known_for_department) }}
                </span>
              </div>
            </div>
          </template>
        </template>
      </div>
    </template>
  </UDrawer>
</template>
