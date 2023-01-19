<template>
    <div class="mx-auto mt-8">
        <div id="box" class="mx-auto mt-12 h-auto p-8 bg-gray-200">
            <div class="p-12 text-gray-700 text-md">I am adaptive, independent, and a fast learner. I am capable of learning new tech stacks and applying them to develop a project within two weeks. I am passionate about web development, specifically back-end development. I love to code and am an enthusiast for learning new things.</div>
        </div>
        <div id="box" class="mx-auto mt-12 h-auto p-8 bg-gray-200 text-gray-700">
            <div class="text-md mb-4">Favourite Tech Stack:</div>
            <!-- <div class="flex text-white justify-center justify-items-center gap-4">
                <span>Laravel</span>
                <i class="fa-brands fa-laravel text-2xl"></i>
            </div> -->
            <div class="text-sm">
                <b>Back-End:</b> PHP (Laravel)
            </div>
            <div class="text-sm">
                <b>Front-End:</b> VueJS
            </div>
            <div class="text-sm">
                <b>Styling:</b> Tailwind
            </div>
            <div class="text-sm">
                <b>Server Management Tools:</b> AWS, RunCloud
            </div>
        </div>
    </div>
</template>

<style scoped>
  #box {
    position: relative;
    width: 600px;
    /* height: 620px; */

    /* background: linear-gradient(137.08deg, #5B22FF 0%, rgba(91, 34, 255, 0) 100%); */
    box-shadow: 0px 0px 25px 3px rgba(0, 71, 255, 0.85);
    border-radius: 50px;
  }
</style>

<script>
export default {
  name: 'Personal',
  components: {
  }
}
</script>