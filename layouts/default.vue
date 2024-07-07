<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  font-family: 'Poppins', sans-serif;
}
</style>
<script setup lang="ts">
provideHeadlessUseId(() => useId())
useHead({
  title: 'Haziq Hapiz | Software Engineer',
  meta: [
    { name: 'description', content: 'An aspiring software engineer with a passion to make meaningful impacts!' },
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
