<template>
    <div class="max-w-2xl px-6 text-center mx-auto" id="profile">
      <br>
      <!-- <div>
        <img class="w-4 h-4 rounded-circle" :src="user.avatar" :alt="user.name">
        <h1 class="text-center text-xl font-bold py-4">{{user.name}}</h1>
        <p class="text-center text-xl font-bold py-4">{{user.bio}}</p>
      </div> -->
      <img src="../assets/img/zyq.png" alt="profile">
        <h1>
          Hi, I'm 
            <span id="name" name="title">{{ msg }}</span>
          <br> a Full Stack Developer.
        </h1>
        <ul>
          <li><a id="fb" content="Haziq Hapiz" v-tippy class="mdi mdi-facebook" href="https://facebook.com/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="@haziqhapiz" v-tippy class="mdi mdi-instagram" href="https://instagram.com/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="@haziqhapiz" v-tippy class="mdi mdi-twitter" href="https://twitter.com/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="zyqhpz" v-tippy class="mdi mdi-github" href="https://github.com/zyqhpz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="Haziq Hapiz" v-tippy class="mdi mdi-linkedin" href="https://linkedin.com/in/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
    <!-- <i class="mdi mdi-facebook"></i> -->
        </ul>
    <b-button variant="danger">Click</b-button>
    </div>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    msg: String
  }
}
  // tippy('#fb', {
  //   content: 'Haziq Hapiz',
  // })
  
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap);
* {
  text-align: center;
  color: white;
  font-size: 30px;
  font-family: Poppins;
  /* font-weight: 500; */
}
#name {
  font-weight: 600;
}
#profile {
  position: relative;
  width: 622px;
  height: 645px;

  background: linear-gradient(137.08deg, #5B22FF 0%, rgba(91, 34, 255, 0) 100%);
  box-shadow: 0px 0px 25px 3px rgba(0, 71, 255, 0.85);
  border-radius: 50px;
}
@media (max-width: 768px) {
  #profile { 
    width: 85%;
    /* height: 50vh; */
    margin: 0 auto;
  }
}
h1 {
  font-size: 36px;
  /* position: absolute; */

  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  /* line-height: 42px; */
  text-align: center;
}
img {
  /* top: 200px; */
  margin-top: 50px;
  margin-bottom: 50px;
  width: 150px;
  height: 150px;
  border-radius: 50px;
}
ul {
  /* font-size: 12px; */
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  justify-content: space-evenly;
}
li {
  width: 75px;
  height: 75px;
}
a {
  font-size: 50px;
  text-align: center;
}
.mdi-facebook:hover {
  color: #00B2FF;
  /* font-size: 65px; */
}
.mdi-instagram:hover {
  color: #E1306C;
}
.mdi-twitter:hover {
  color: #1DA1F2;
}
.mdi-github:hover {
  color: #4078c0;
}
.mdi-linkedin:hover {
  color: #0085ca;
}
</style>
