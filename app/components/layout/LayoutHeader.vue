<template>
  <UHeader
    :ui="{
      root: 'bg-transparent'
    }"
  >
    <template #left>
      <NuxtLink
        to="/"
        aria-label="Главная"
        class="text-[32px] uppercase font-extrabold text-white"
      >
        <span>Кино</span>
        <span class="text-accent">Дом</span>
      </NuxtLink>
    </template>
  </UHeader>
</template>
