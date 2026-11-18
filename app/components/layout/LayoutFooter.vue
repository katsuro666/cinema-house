<script setup lang="ts">
import { LOCAL_ICONS } from '~/constants/local-icons'

const footerMenu = [
  {
    groups: [
      {
        title: 'Меню',
        links: [
          { title: 'Фильмы', link: '/' },
          { title: 'Сериалы', link: '/' },
          { title: 'Подборки', link: '/' }
        ]
      },
      {
        title: 'Подписка',
        links: [
          { title: 'Тарифный план', link: '/' },
          { title: 'Акции', link: '/' },
          { title: 'Подписка за баллы', link: '/' }
        ]
      }
    ]
  },
  {
    groups: [
      {
        title: 'Кино и сериалы',
        links: [
          { title: 'Весь каталог', link: '/' },
          { title: 'Комедии', link: '/' },
          { title: 'Драмы', link: '/' },
          { title: 'Фэнтези', link: '/' },
          { title: 'Триллеры', link: '/' },
          { title: 'Детективы', link: '/' }
        ]
      }
    ]
  },
  {
    groups: [
      {
        title: 'Сотрудничество',
        links: [
          { title: 'Размещение рекламы', link: '/' },
          { title: 'Партнерам', link: '/' },
          { title: 'Партнерская программа', link: '/' },
          { title: 'Пользовательское соглашение', link: '/' },
          { title: 'Политика конфиденциальности', link: '/' }
        ]
      },
      {
        title: 'Вопросы и ответы',
        links: []
      }
    ]
  }
]

const technicalSupportLinks = [
  {
    icon: 'i-lucide-phone',
    text: '8 800 800 80 80'
  },
  {
    icon: 'i-lucide-mail',
    text: 'support@mail.ru'
  }
]

const socialMediaLinks = [
  {
    icon: LOCAL_ICONS.facebook,
    link: '/'
  },
  {
    icon: LOCAL_ICONS.vk,
    link: '/'
  },
  {
    icon: LOCAL_ICONS.instagram,
    link: '/'
  }
]
</script>

<template>
  <UFooter
    :ui="{
      root: 'bg-transparent',
      container:
        '!px-25 max-lg:!px-10 max-md:!px-2.5 !pt-13 !pb-9 border-t border-white/15 !items-start',
      left: 'self-stretch flex-col items-start !justify-between'
    }"
  >
    <template #left>
      <span class="text-[32px] uppercase font-extrabold">
        Кино<span class="text-accent">Дом</span>
      </span>

      <span class="text-white/20"> © КиноДом {{ new Date().getFullYear() }} </span>
    </template>

    <div class="grid grid-cols-3 gap-20">
      <div
        v-for="(column, idx) in footerMenu"
        :key="`${column.groups[idx]?.title}-${idx}`"
        class="flex flex-col gap-9"
      >
        <div
          v-for="group in column.groups"
          :key="group.title"
          class="flex flex-col gap-4"
        >
          <h4 class="font-semibold">
            {{ group.title }}
          </h4>

          <nav v-if="group.links?.length">
            <ul class="flex flex-col gap-2.5">
              <li
                v-for="item in group.links"
                :key="item.link + item.title"
              >
                <NuxtLink
                  class="cursor-pointer text-white/35"
                  :to="item.link"
                >
                  <ULink class="cursor-pointer text-white/35">
                    {{ item.title }}
                  </ULink>
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <template #right>
      <div class="flex flex-col gap-9">
        <div class="flex flex-col gap-4">
          <span class="font-semibold">Техническая поддержка</span>

          <div class="flex flex-col gap-2.5 text-white/35">
            <div
              v-for="item in technicalSupportLinks"
              :key="item.text"
              class="flex items-center gap-2.5"
            >
              <UIcon
                :name="item.icon"
                class="size-5"
              />
              {{ item.text }}
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <span class="font-semibold">Подписывайтесь на нас</span>

          <div class="flex items-center gap-4">
            <NuxtLink
              v-for="item in socialMediaLinks"
              :key="item.link"
              :to="item.link"
            >
              <UIcon
                :name="item.icon"
                class="size-6 text-white/20"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </template>
  </UFooter>
</template>
