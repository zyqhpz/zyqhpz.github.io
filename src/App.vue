<template>
<div>
  <Header/>
  <div class="flex flex-col justify-center pt-8 md:pt-0">
  <Profile msg="Haziq Hapiz"/>
  <img class="hidden w-10 mx-auto mb-12 md:block" src="./assets/img/arrow.gif" alt="arrow">
  <Tail/>
  <!-- <Contribution/> -->
  <!-- <Contact class="mx-auto px-4"/> -->
  <!-- <Card/> -->
  </div>
  <Footer/>
</div>
</template>

<script>
import Profile from './components/Profile.vue'
// import Card from './components/ProjectCard.vue'
// import Card from './components/Card.vue'
// import Contact from './components/Contact.vue'
import Tail from './components/CardTail.vue'
// import Contribution from './components/Contribution.vue'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    // Card,
    Tail,
    // Contribution,
    // Contact
    Header,
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
