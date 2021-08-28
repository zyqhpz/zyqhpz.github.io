<template>

  <div class="px-24 flex flex-col justify-center">
    
  <Profile msg="Haziq Hapiz"/>
  <Tail/>
  <Card/>
  </div>
  


  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- center a div -->
  <!-- style a div to add margin top 50px -->
  <!-- <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-50"> -->

</template>

<script>
import Profile from './components/Profile.vue'
import Card from './components/ProjectCard.vue'
import Tail from './components/CardTail.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    Card,
    Tail
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap);
* {
  font-family: 'Poppins', sans-serif;
}
body {
  min-height: 100%;
  background:linear-gradient(0deg, rgba(75, 75, 75, 0.2), rgba(0, 0, 0, 0.3)), url(./assets/img/bg.jpg);
  background-size: cover;
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
