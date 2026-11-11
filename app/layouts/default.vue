<template>
  <div>
    <LayoutHeader />

    <UMain class="max-w-[var(--ui-container)] mx-auto px-25 max-lg:px-10 max-md:px-2.5">
      <slot />
    </UMain>

    <LayoutFooter />
  </div>
</template>
