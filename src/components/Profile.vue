<template>
    <div class="max-w-xl px-4 md:px-14 text-center mx-auto mt-5 md:my-32 justify-content" id="profile">
      <br>
      <img class="mt-10 mx-auto transform scale-150 md:scale-100" src="../assets/img/zyq.png" alt="profile picture of Haziq Hapiz">
        <h1>
          Hi, I'm
            <span id="name" name="title" class="tracking-wider bg-indigo-700 text-white rounded px-2 shadow-md ring">{{ msg }}</span>
        </h1>
        <br>
        <ul>
          <li><a content="@haziqhapiz" v-tippy="{arrow: true, arrowType : 'round', followCursor : 'horizontal' }" class="mdi mdi-instagram" href="https://instagram.com/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="@haziqhapiz" v-tippy="{arrow: true, arrowType : 'round', followCursor : 'horizontal' }" class="mdi mdi-twitter" href="https://twitter.com/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="zyqhpz" v-tippy="{arrow: true, arrowType : 'round', followCursor : 'horizontal' }" class="mdi mdi-github" href="https://github.com/zyqhpz" target="_blank" rel="noopener noreferrer"></a></li>
          <li><a content="Haziq Hapiz" v-tippy="{arrow: true, arrowType : 'round', followCursor : 'horizontal' }" class="mdi mdi-linkedin" href="https://linkedin.com/in/haziqhapiz" target="_blank" rel="noopener noreferrer"></a></li>
        </ul>
    <div class="stage">
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
      <div class="layer"></div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Profile',
  props: {
    msg: String
  },
}
  
</script>

<style scoped>
@import '../../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
/* @import url("https://fonts.googleapis.com/css?family=Pacifico"); */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
@import url("//fonts.googleapis.com/css?family=Roboto:700&text=css");
@import url("//fonts.googleapis.com/css?family=Kaushan+Script&display=swap");
* {
  text-align: center;
  color: white;
  font-size: 30px;
  font-family: Poppins;
  /* font-weight: 500; */
}
#name {
  font-weight: 600;
  /* font-family: "Kaushan Script", sans-serif; */
  font-size: 30px;
  text-shadow: 2px 0px 3px #000000;
}
#profile {
  position: relative;
  width: 600px;
  height: 620px;

  background: linear-gradient(137.08deg, #5B22FF 0%, rgba(91, 34, 255, 0) 100%);
  box-shadow: 0px 0px 25px 3px rgba(0, 71, 255, 0.85);
  border-radius: 50px;
}
@media (max-width: 768px) {
  #profile { 
    width: 90%;
    height: 500px;
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
  margin-top: 10px;
  padding: 0 15px;
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
@media (max-width: 768px) {
  #profile { 
    width: 90%;
    /* height: 50vh; */
    margin: 0 auto;
  }
  h1 {
    font-size: 24px;
  }
  li {
    height: 50px;
    width: 50px;
  }
  a {
    font-size: 40px;
  }
  img {
    width: 2em;
    height: 2em;
  }
}
</style>
