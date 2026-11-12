<script setup lang="ts"></script>

<template>
  <section class="banner flex py-15 pb-23">
    <div class="flex flex-col gap-5 max-w-[425px]">
      <h1 class="text-5xl leading-[125%] font-extrabold">
        Самые сочные премьеры кино — у вас дома
      </h1>

      <p class="text-white-50">
        Ежедневно пополняемая библиотека <br />
        с лучшими фильмами и сериалами — в дубляже <br />
        и оригинале. Целый месяц бесплатно!
      </p>

      <UButton
        label="Смотреть бесплатно"
        color="accent"
        size="xl"
        class="w-fit h-[55px]"
        :ui="{
          base: 'font-extrabold'
        }"
      />
    </div>

    carousel
  </section>
</template>

<style scoped lang="scss">
.banner {
  background-image: url('/images/banner-bg.png');
  background-size: cover;
}
</style>
