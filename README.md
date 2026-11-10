# КиноДом

Frontend онлайн кинотеатра на Nuxt 4 и Nuxt UI.

## Стек

- Nuxt 4 + TypeScript
- Tailwind CSS 4 + Nuxt UI
- Pinia
- ESLint + Prettier

## Быстрый старт

```bash
pnpm install
pnpm dev
```

Приложение откроется по адресу `http://localhost:3000`.

## Команды

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

## Структура

```text
app/
  assets/      # стили и импортируемые ресурсы
  components/  # переиспользуемые Vue-компоненты
  pages/       # маршруты приложения
  layouts/     # шаблоны страниц
  composables/ # переиспользуемая логика
  types/       # типы TypeScript
public/
  fonts/       # локальные шрифты
  images/      # статичные изображения
```

Для установки и обновления зависимостей используйте только `pnpm`: это зафиксированный менеджер пакетов проекта.
