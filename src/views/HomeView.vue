<template>
  <div class="home flex flex-col justify-center pt-8 md:pt-0">
    <Profile msg="Haziq Hapiz"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'

export default {
  name: 'HomeView',
  components: {
    Profile,
  }
}
</script>