<script setup lang="ts">
const THEMATIC_COLLECTIONS = [
  {
    id: 'comics-lovers',
    title: 'Любителям комиксов',
    endpoint: '/discover/movie',
    poster_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    params: {
      with_keywords: '9715|9717',
      sort_by: 'popularity.desc',
      'vote_count.gte': 1000
    }
  },
  {
    id: 'fantasy-classics',
    title: 'Классика фэнтези',
    endpoint: '/discover/movie',
    poster_path: '/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
    params: {
      with_genres: '14',
      'primary_release_date.lte': '2006-01-01',
      'vote_count.gte': 1500,
      sort_by: 'vote_average.desc'
    }
  },
  {
    id: 'japanese-animation',
    title: 'Японские мультфильмы',
    endpoint: '/discover/movie',
    poster_path: '/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg',
    params: {
      with_genres: '16',
      with_original_language: 'ja',
      'vote_count.gte': 500,
      sort_by: 'vote_average.desc'
    }
  },
  {
    id: 'satirical-cartoons',
    title: 'Сатиристические мультсериалы',
    endpoint: '/discover/tv',
    poster_path: '/eV3XnUul4UfIivz3kxgeIozeo50.jpg',
    params: {
      with_genres: '16,35',
      with_keywords: '10183',
      sort_by: 'popularity.desc'
    }
  },
  {
    id: 'cyberpunk-dystopia',
    title: 'Киберпанк и антиутопии',
    endpoint: '/discover/movie',
    poster_path: '/ilRyazdMJwN05exqhwK4tMKBYZs.jpg',
    params: {
      with_genres: '878',
      with_keywords: '12190|4565',
      'vote_count.gte': 1000,
      sort_by: 'vote_average.desc'
    }
  },
  {
    id: 'cult-thrillers',
    title: 'Культовые триллеры',
    endpoint: '/discover/movie',
    poster_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    params: {
      with_genres: '53,9648',
      'vote_count.gte': 3000,
      'vote_average.gte': 7.8,
      sort_by: 'vote_average.desc'
    }
  }
]

const goToCollection = (id: string) => {
  console.log(id)
}
</script>

<template>
  <section class="mt-30 flex flex-col gap-15">
    <h2 class="text-[32px] font-bold">Тематические подборки</h2>

    <UiMoviesSlider
      :slides="THEMATIC_COLLECTIONS"
      title-inside
      tinted-image
      square
      @slide-click="goToCollection($event)"
    />
  </section>
</template>
