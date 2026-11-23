<script setup lang="ts">
const route = useRoute()
const pageId = route.params.id as string
</script>

<template>
  <PageMovie :movie-id="+pageId" tv />
</template>
