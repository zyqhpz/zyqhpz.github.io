<template>
  <div class="text-gray-100 text-sm md:text-base mx-auto px-4 items-center">
    <ContentRenderer :value="parsedMarkdown" v-bind="$attrs" />
  </div>
</template>

<script setup>
// @ts-expect-error avoid lint error
import markdownParser from '@nuxt/content/transformers/markdown'

const content = await fetch('/profile.md').then(res => res.text())

let parsedMarkdown = await markdownParser.parse(null, content)
</script>