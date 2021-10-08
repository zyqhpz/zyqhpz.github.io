<template>
<div>
  <header>
  <div class="hidden container mx-auto flex flex-wrap pt-5 flex-col sm:flex md:flex-row items-center justify-between">
    <a class="flex title-font font-medium items-center text-white no-underline">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <span class="ml-3 text-md no-underline">Haziq Hapiz</span>
    </a>
    <a class="flex title-font font-medium items-center text-white no-underline">
      <a class="ml-3 text-md mdi mdi-email text-white no-underline" href="mailto:haziq.hapiz@gmail.com"></a>
      <span class="ml-3 text-md no-underline">haziq.hapiz@gmail.com</span>
    </a>
  </div>
</header>
  <div class="flex flex-col justify-center pt-8 md:pt-0">
  <Profile msg="Haziq Hapiz"/>
  <img class="hidden w-10 mx-auto mb-12 md:block" src="./assets/img/arrow.gif" alt="arrow">
  <Tail/>
  <Contribution/>
  <!-- <Contact class="mx-auto px-4"/> -->
  <!-- <Card/> -->
  </div>
  <div class="bg-black bg-opacity-50 w-full h-12 mt-16 flex justify-center item-center align-middle">
    <h4 class="text-white my-auto text-base md:text-lg align-middle">
      Developed with ❤ by Haziq Hapiz © 2021
    </h4>
  </div>
</div>
</template>

<script>
import Profile from './components/Profile.vue'
// import Card from './components/ProjectCard.vue'
// import Card from './components/Card.vue'
// import Contact from './components/Contact.vue'
import Tail from './components/CardTail.vue'
import Contribution from './components/Contribution.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    // Card,
    Tail,
    Contribution,
    // Contact
  }
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
