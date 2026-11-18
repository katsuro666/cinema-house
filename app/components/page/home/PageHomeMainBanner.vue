<script setup lang="ts">
import { ROUTES } from '~/constants/routes'

const router = useRouter()
const goToMovie = (id: string) => {
  router.push(`/${ROUTES.MOVIE}/${id}`)
}
</script>

<template>
  <section class="banner flex py-15 pb-23">
    <div class="flex max-w-[425px] flex-col gap-5">
      <h1 class="text-5xl leading-[125%] font-extrabold">
        Самые сочные премьеры кино — у вас дома
      </h1>

      <p class="text-white-50">
        Ежедневно пополняемая библиотека <br>
        с лучшими фильмами и сериалами — в дубляже <br>
        и оригинале. Целый месяц бесплатно!
      </p>

      <UButton
        label="Смотреть бесплатно"
        color="accent"
        size="xl"
        class="h-[55px] w-fit"
        :ui="{ base: 'font-extrabold' }"
      />
    </div>

    <PageHomeMovieCarousel @slide-click="goToMovie($event)" />
  </section>
</template>

<style scoped lang="scss">
.banner {
  gap: 112px;
  min-height: 570px;
  background-image: url('/images/banner-bg.png');
  background-size: cover;
}

@media (max-width: 768px) {
  .banner {
    flex-direction: column;
    gap: 32px;
    padding-top: 32px;
  }
}
</style>
