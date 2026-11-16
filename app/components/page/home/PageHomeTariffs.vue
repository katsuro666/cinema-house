<script setup lang="ts">
const allFeatures = [
  'Кино и сериалы на каждый день',
  'Суперхиты',
  'Всё для детей',
  'Образовательные передачи',
  'Amediateka и Start'
]

const tariffs = [
  {
    title: 'Лайт',
    openedSections: 1,
    price: 250,
    isHighlighted: false
  },
  {
    title: 'Оптимум',
    openedSections: 3,
    price: 300,
    isHighlighted: true
  },
  {
    title: 'Премиум',
    openedSections: 5,
    price: 400,
    isHighlighted: false
  }
]

const getAccessClass = (idx: number, openedSections: number, isIcon?: boolean) => {
  if (isIcon) {
    return idx + 1 <= openedSections ? 'i-lucide-check' : 'i-lucide-lock-keyhole'
  }
  return idx + 1 <= openedSections ? 'text-white' : 'text-white-50'
}
</script>

<template>
  <section class="mt-30 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">
      Тарифные планы
    </h2>

    <div class="flex justify-between gap-16">
      <div
        v-for="tariff in tariffs"
        :key="tariff.title"
        class="flex flex-1 flex-col justify-between gap-23 rounded-2xl p-7.5 max-w-[335px]"
        :class="tariff.isHighlighted ? 'bg-[#360470]/20 border border-primary/40' : 'bg-secondary'"
      >
        <div class="flex flex-col gap-5">
          <span class="font-bold text-[40px] uppercase">{{ tariff.title }}</span>

          <div class="flex flex-col gap-4">
            <div
              v-for="(feature, featureIdx) in allFeatures"
              :key="feature"
              class="flex items-center gap-2.5"
            >
              <UIcon
                :name="getAccessClass(featureIdx, tariff.openedSections, true)"
                class="size-5 shrink-0"
                :class="getAccessClass(featureIdx, tariff.openedSections)"
              />
              <span :class="getAccessClass(featureIdx, tariff.openedSections)">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4 border-t border-white-50 pt-7.5">
          <UButton
            color="accent"
            size="xl"
            class="cursor-pointer px-6 py-4.5 font-medium"
          >
            Оформить подписку
          </UButton>
          <span class="text-2xl font-bold text-white">{{ tariff.price }}₽</span>
        </div>
      </div>
    </div>
  </section>
</template>
