<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- center a div -->
  <!-- style a div to add margin top 50px -->
  <div>
  <Profile msg="Haziq Hapiz"/>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <b-button href="https://www.facebook.com/haziqhapiz" variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
  
</template>

<script>
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile
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
</style>
