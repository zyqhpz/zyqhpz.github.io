<template>
  <div class="bg-gray-700 min-h-screen">
    <NavBar />
    <slot class="bg-gray-300" />
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
provideHeadlessUseId(() => useId())
useHead({
  title: 'Haziq Hapiz | Software Engineer',
  meta: [
    { name: 'description', content: 'An aspiring software engineer with a passion to make meaningful impacts!'},
    { name: 'author', content: 'Haziq Hapiz' }
  ],
})
useSeoMeta({
  title: 'Haziq Hapiz | Software Engineer',
  description: 'An aspiring software engineer with a passion to make meaningful impacts!',
  ogTitle: 'Haziq Hapiz | Software Engineer',
  ogDescription: 'An aspiring software engineer with a passion to make meaningful impacts!',
})
</script>
