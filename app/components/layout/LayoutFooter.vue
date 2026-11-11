<template>
  <UFooter
    :ui="{
      root: 'bg-transparent',
      container: '!px-25 max-lg:!px-10 max-md:!px-2.5'
    }"
  >
    <template #left>
      <p class="text-sm text-gray">
        © КиноДом {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>
