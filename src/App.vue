<template>
  <div id="app">
    <HeaderRoute/>
    <br>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import HeaderRoute from './components/HeaderRoute.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderRoute,
    Footer
  },
}
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
  font-family: 'Poppins', sans-serif;
}
body {
  min-height: 100%;
  background:linear-gradient(0deg, rgba(75, 75, 75, 0.2), rgba(0, 0, 0, 0.3)), url(./assets/img/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* font-family: Verdana, Arial, Helvetica, sans-serif; */

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
