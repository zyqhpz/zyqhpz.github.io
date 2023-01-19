<template>
    <div class="qualification px-8 pt-10 sm:pt-2 mx-auto text-center">
        <h2 class="text-3xl font-semibold text-gray-200 underline">Qualification</h2>
        <WorkingExperience/>
        <Academic/>
    </div>
</template>

<script>
import Academic from '@/components/Academic.vue'
import WorkingExperience from '@/components/WorkingExperience.vue'

export default {
  name: 'AboutView',
  components: {
    Academic,
    WorkingExperience
  }
}
</script>