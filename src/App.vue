<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- center a div -->
  <!-- style a div to add margin top 50px -->
  <div>
    
  <Profile msg="Haziq Hapiz"/>
  <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      EduMaterial was developed to join UN's SDG mission on Goals 4. This is a project for BITM2113 (Web Application Development) course in UTeM.
    </b-card-text>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="blue">CSS3</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="yellow">Javascript</c-badge>
    <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge>
    <!-- <b-button href="https://www.facebook.com/haziqhapiz" target="_blank" variant="primary">Go somewhere</b-button> -->
  </b-card>
  </div>
  
</template>

<script>
import Profile from './components/Profile.vue'
import { CBadge } from '@chakra-ui/vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile,
    CBadge
  }
}
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap);
* {
  font-family: 'Poppins', sans-serif;
}
body {
  background-image: url(./assets/img/bg.jpg);
  background-size: cover;
  /* background-repeat: inherit; */
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
b-card {
  position: absolute;
  text-align: center;
  left: 25%;
  right: inherit;
  bottom: 50%;
}
</style>
