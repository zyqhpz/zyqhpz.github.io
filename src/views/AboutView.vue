<template>
  <div class="about block px-8 pt-10 sm:pt-2 mx-auto text-center justify-center">
      <h2 class="text-3xl font-semibold text-gray-200 underline">About Me</h2>
      <Personal class="pb-8"/>
  </div>
</template>

<script>
import Personal from '@/components/Personal.vue'

export default {
  name: 'AboutView',
  components: {
    Personal
  }
}
</script>