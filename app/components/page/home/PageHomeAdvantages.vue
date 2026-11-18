<script setup lang="ts">
const advantages = [
  {
    icon: '/images/icon-avatar.png',
    title: 'Большой выбор',
    description: '10 000 фильмов и сериалов уже в библиотеке.Ежедневное пополнение новинками кино'
  },
  {
    icon: '/images/icon-iron-man.png',
    title: 'Список рекомендаций',
    description: 'Персонализированный список рекомендаций, подобранных на основе ваших интересов'
  },
  {
    icon: '/images/icon-yoda.png',
    title: 'Лучшее мировое кино',
    description:
      'Кино, сериалы со всего мира, включая Европу и Азию.А также достойное российское кино'
  },
  {
    icon: '/images/icon-man.png',
    title: 'Месяц бесплатно',
    description:
      'Весь каталог КиноДома и все новинки кино и сериалов - бесплатно целый месяц после регистрации'
  }
]
</script>

<template>
  <section class="mt-7 flex flex-col gap-8">
    <h2 class="text-[32px] font-bold">Преимущества КиноДома</h2>

    <div class="flex justify-between gap-5">
      <div v-for="advantage in advantages" :key="advantage.title" class="flex flex-col gap-4">
        <div class="flex flex-col">
          <div class="gradient w-fit rounded-full p-6">
            <div class="bg-primary w-fit rounded-full p-4">
              <img :src="advantage.icon" :alt="advantage.title" class="size-10" />
            </div>
          </div>
          <h3 class="text-2xl font-semibold">
            {{ advantage.title }}
          </h3>
        </div>

        <p class="text-white-50">
          {{ advantage.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.gradient {
  background: radial-gradient(ellipse at center, #422f90 0%, transparent 70%);
}
</style>
