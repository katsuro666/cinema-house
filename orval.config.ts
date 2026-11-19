import { defineConfig } from 'orval'

export default defineConfig({
  tmdb: {
    input: {
      target: 'https://developer.themoviedb.org/openapi/tmdb-api.json'
    },
    output: {
      mode: 'tags-split',
      target: 'app/api/generated/endpoints',
      schemas: 'app/api/generated/model',
      client: 'fetch',
      override: {
        header: () => '// @ts-nocheck \n',
        mutator: {
          path: './app/api/mutator.ts',
          name: 'tmdbFetcher'
        }
      }
    }
  }
})
