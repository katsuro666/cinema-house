<template>
  <div class="layout flex min-h-screen flex-col">
    <LayoutHeader />

    <UMain
      class="grow !min-h-0 max-w-[var(--ui-container)] px-25 max-lg:px-10 max-md:px-2.5 pb-30 pt-8"
    >
      <slot />
    </UMain>

    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.layout {
  background-image: url('/images/ellipses.png');
  background-size: cover;
}
</style>
