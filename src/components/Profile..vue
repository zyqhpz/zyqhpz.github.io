<template>
    <div class="max-w-2xl px-6 text-center mx-auto" id="profile">
      <br>
      <div>
        <img class="w-4 h-4 rounded-circle" :src="user.avatar" :alt="user.name">
        <h1 class="text-center text-xl font-bold py-4">{{user.name}}</h1>
        <p class="text-center text-xl font-bold py-4">{{user.bio}}</p>
      </div>
        <h1>
          Hi, I'm 
          <strong>
            <slot class="bg-primary" name="title">{{ msg }}</slot>
          </strong>,
          <br> a Full Stack Developer.
        </h1>
    </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  }
}
</script>

<style scoped>
* {
  text-align: center;
  color: white;
  font-size: 24px;
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
</style>