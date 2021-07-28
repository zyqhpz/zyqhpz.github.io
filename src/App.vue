<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- center a div -->
  <!-- style a div to add margin top 50px -->
  <Profile msg="Haziq Hapiz"/>
</template>

<script>
import Profile from './components/Profile..vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Profile
  }
}
</script>

<style>
body {
  background-image: url(./assets/img/bg.jpg);
  background-size: cover;
  /* background-repeat: inherit; */
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    font-family: Verdana, Arial, Helvetica, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
