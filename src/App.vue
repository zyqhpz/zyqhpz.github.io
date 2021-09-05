<template>

<div>
  <div class="flex flex-col justify-center pt-8 md:pt-0">
    
  <Profile msg="Haziq Hapiz"/>
  <Tail/>
  <!-- <Card/> -->
  </div>
  <div class="bg-black w-full h-12 mt-16 flex justify-center item-center align-middle">
    <h4 class="text-white my-auto text-base md:text-lg align-middle">
      Developed by Haziq Hapiz with ❤ 2021
    </h4>
  </div>
</div>


  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- center a div -->
  <!-- style a div to add margin top 50px -->
  <!-- <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-50"> -->

</template>

<script>
import Profile from './components/Profile.vue'
// import Card from './components/ProjectCard.vue'
import Tail from './components/CardTail.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    // Card,
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
