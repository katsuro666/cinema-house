// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/fonts'],

  pages: true,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['accent', 'white', 'white-50']
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  fonts: {
    families: [{ name: 'Proxima Nova', provider: 'local' }],
    local: {
      dirs: ['public/fonts']
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons',
        recursive: true
      }
    ]
  },

  runtimeConfig: {
    public: {
      tmdbToken: import.meta.env.NUXT_PUBLIC_TMDB_TOKEN
    }
  }
})
