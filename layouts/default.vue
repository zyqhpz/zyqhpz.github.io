<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
  >
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
</style>
<script setup lang="ts">
provideHeadlessUseId(() => useId());
useHead({
  title: "Haziq Hapiz | Software Engineer",
  meta: [
    {
      name: "description",
      content:
        "An aspiring software engineer with a passion to make meaningful impacts!",
    },
    { name: "author", content: "Haziq Hapiz" },
    { name: "og:title", content: "Haziq Hapiz | Software Engineer" },
    {
      name: "og:description",
      content:
        "An aspiring software engineer with a passion to make meaningful impacts!",
    },
    { name: "og:image", content: "https://zyqhpz.github.io/img/og.png" },
    { name: "og:url", content: "https://zyqhpz.github.io" },
    { name: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "twitter:domain", content: "zyqhpz.github.io" },
    { property: "twitter:url", content: "https://zyqhpz.github.io" },
    { name: "twitter:site", content: "@haziqhapiz" },
    { name: "twitter:creator", content: "@haziqhapiz" },
    { name: "twitter:title", content: "Haziq Hapiz | Software Engineer" },
    {
      name: "twitter:description",
      content:
        "An aspiring software engineer with a passion to make meaningful impacts!",
    },
    { name: "twitter:image", content: "https://zyqhpz.github.io/img/og.png" },
  ],
});
useSeoMeta({
  title: "Haziq Hapiz | Software Engineer",
  description:
    "An aspiring software engineer with a passion to make meaningful impacts!",
  ogTitle: "Haziq Hapiz | Software Engineer",
  ogDescription:
    "An aspiring software engineer with a passion to make meaningful impacts!",
  ogImage: "https://zyqhpz.github.io/img/og.png",
});
</script>
