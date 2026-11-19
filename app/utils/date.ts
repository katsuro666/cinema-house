export const isPremiere = (date?: string | null) => {
  if (!date) return false

  const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000

  const releaseTime = new Date(date).getTime()
  const now = Date.now()
  const diff = now - releaseTime

  // diff >= 0 означает, что дата релиза уже наступила (не в будущем)
  // diff <= TWO_WEEKS_MS означает, что с момента выхода прошло не больше 14 дней
  return diff >= 0 && diff <= TWO_WEEKS_MS
}

export const formattedReleaseDate = (date?: string | null) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long'
  }).format(new Date(date))
}
