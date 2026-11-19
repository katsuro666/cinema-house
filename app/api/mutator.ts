import type { NitroFetchOptions, NitroFetchRequest } from 'nitropack'
import type { FetchError } from 'ofetch'

type TmdbErrorPayload = {
  status_message?: string
  message?: string
}

export interface RequestConfig {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: Record<string, any>
  data?: any
  headers?: Record<string, string>
  signal?: AbortSignal
}

export const tmdbFetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const nuxtApp = useNuxtApp()
  const {
    public: { tmdbToken }
  } = useRuntimeConfig()

  try {
    const response = await $fetch.raw(url, {
      baseURL: 'https://api.themoviedb.org',
      ...(options as NitroFetchOptions<NitroFetchRequest>),
      headers: {
        Authorization: `Bearer ${tmdbToken}`,
        Accept: 'application/json',
        ...options?.headers
      }
    })

    return {
      data: response._data,
      status: response.status,
      headers: response.headers
    } as T
  } catch (error) {
    if (import.meta.client) {
      const fetchError = error as FetchError<TmdbErrorPayload>
      const payload = fetchError.response?._data || fetchError.data
      const status = fetchError.response?.status
      const message =
        payload?.status_message ||
        payload?.message ||
        fetchError.message ||
        'Не удалось выполнить запрос'

      nuxtApp.runWithContext(() => {
        useToast().add({
          title: status ? `Ошибка TMDB (${status})` : 'Ошибка TMDB',
          description: message,
          color: 'accent'
        })
      })
    }

    throw error
  }
}
