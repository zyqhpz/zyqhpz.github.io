<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <slot />
    <!-- <AppFooter /> -->
    
    <div class="mx-auto bg-gray-800 mt-4 p-2 w-full text-white text-center">
      Dibangunkan oleh Haziq Hapiz
    </div>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  font-family: 'Poppins', sans-serif;
}
body {
  min-height: 100%;
  background:linear-gradient(0deg, rgba(75, 75, 75, 0.2), rgba(0, 0, 0, 0.3)), url('~/assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
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
