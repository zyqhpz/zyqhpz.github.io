<template>
    <div class="max-w-2xl px-6 text-center mx-auto" id="profile">
      <h1>TEXT</h1>
        <h1>
          Hi, I'm 
            <span class="bg-indigo-600 text-white rounded px-1">TEXT</span>
          <strong>
            <slot name="title">{{ msg }}</slot>
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
  font-size: 1.5rem;
}
#profile {
  position: relative;
  width: 622px;
  height: 645px;

  background: linear-gradient(137.08deg, #5B22FF 0%, rgba(91, 34, 255, 0) 100%);
  box-shadow: 0px 0px 25px 3px rgba(0, 71, 255, 0.85);
  border-radius: 50px;
}
</style>