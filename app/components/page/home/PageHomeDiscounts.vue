<script setup lang="ts">
const discounts = [
  {
    icon: '/images/icon-rick.png',
    title: 'Скидка 50% на активность в сервисе',
    description: [
      'Смотри кино, принимай участие в развитие сервиса: пиши рецензии, собирай подборки из фильмов и сериалов, проходи квизы.',
      'Копи баллы, и получай скидку 50% на любой тариф при следующей оплате подписки на КиноДом'
    ],
    btn: {
      label: 'Подробнее',
      variant: 'outline',
      color: 'white'
    } as const
  },
  {
    icon: '/images/icon-gin.png',
    title: 'Скидка для студентов 50%',
    description: [
      'Просто приложи фото действующего студенческого билета при оформлении подписки и наслаждайся кино!',
      'Важно! Скидка действует до конца текущего года. Студенческая скидка не суммируется с другими скидками и акциями сервиса'
    ],
    btn: {
      label: 'Я студент,я хочу скидку!',
      variant: 'solid',
      color: 'accent'
    } as const
  }
]
</script>

<template>
  <section class="mt-30 flex flex-col gap-9">
    <h2 class="font-bold text-[32px]">
      Скидки на кино
    </h2>

    <div class="flex justify-between gap-5">
      <div
        v-for="discount in discounts"
        :key="discount.title"
        class="flex flex-col gap-4 max-w-[421px]"
      >
        <div class="flex flex-col">
          <div class="rounded-full p-6 w-fit gradient">
            <div class="rounded-full bg-primary w-fit p-4">
              <img
                :src="discount.icon"
                :alt="discount.title"
                class="size-10"
              >
            </div>
          </div>

          <h3 class="font-semibold text-2xl">
            {{ discount.title }}
          </h3>
        </div>

        <div class="flex flex-col gap-4">
          <p
            v-for="(desc, idx) in discount.description"
            :key="idx"
            class="text-white-50"
          >
            {{ desc }}
          </p>
        </div>

        <UButton
          :label="discount.btn.label"
          :color="discount.btn.color"
          :variant="discount.btn.variant"
          size="xl"
          class="w-fit py-4.5 px-6 mt-4"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gradient {
  background: radial-gradient(ellipse at center, #422f90 0%, transparent 70%);
}
</style>
