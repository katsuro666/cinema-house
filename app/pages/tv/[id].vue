<script setup lang="ts">
const route = useRoute()
const pageId = route.params.id as string
</script>

<template>
  <!-- TODO: пропс чтобы понять что это страница /tv -->
  <PageMovie :page-id="pageId" />
</template>
