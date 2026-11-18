export interface RequestConfig {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: Record<string, any>
  data?: any
  headers?: Record<string, string>
  signal?: AbortSignal
}

export const tmdbFetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const {
    public: { tmdbToken }
  } = useRuntimeConfig()

  const response = await fetch(`https://api.themoviedb.org${url}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${tmdbToken}`,
      Accept: 'application/json',
      ...options?.headers
    }
  })

  return {
    data: await response.json(),
    status: response.status,
    headers: response.headers
  } as T
}
