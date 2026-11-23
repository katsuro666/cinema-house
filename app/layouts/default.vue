<template>
  <div class="layout flex min-h-screen flex-col">
    <LayoutHeader />

    <UMain
      class="mx-auto !min-h-0 w-full max-w-[var(--ui-container)] grow px-25 pt-8 pb-30 max-lg:px-10 max-md:px-2.5"
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
