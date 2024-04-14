<template>
  <div class="min-h-screen" :style="{ backgroundImage: `url('~@/assets/img/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }" >
    <NavBar />
    <slot />
    <!-- <AppFooter /> -->
    <div class="mx-auto bg-gray-800 mt-4 p-2 w-full text-white text-center">
      Dibangunkan oleh Haziq Hapiz
    </div>
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
