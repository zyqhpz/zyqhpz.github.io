<template>
  <div
    class="items-center justify-center mt-4 max-w-2xl mx-auto"
    id="aboutBox"
  >
    <div id="working">
      <span class="text-2xl font-semibold text-gray-200"
        >Working Experience</span
      >
      <div
        v-for="item in work"
        :key="item.id"
        class="bg-gray-200 rounded-lg p-4 mt-8"
      >
        <div class="my-2">
          <div class="text-gray-700">
            <div class="font-medium">Company:</div>
            <a
              v-if="item.link"
              class="text-sm no-underline text-gray-700 hover:text-blue-500 hover:underline hover:font-medium"
              :href="item.link"
              target="_blank"
              >{{ item.company }}</a
            >
            <a v-else class="text-sm no-underline text-gray-700">{{
              item.company
            }}</a>
          </div>
          <div class="mt-2 text-gray-700">
            <div class="font-medium">Position:</div>
            <div class="text-sm">{{ item.position }}</div>
          </div>
          <div class="mt-2 text-gray-700">
            <div class="font-medium">Duration:</div>
            <div class="text-sm">{{ item.duration }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/assets/work.json";

export default {
  name: "WorkExperience",
  data() {
    return {
      work: data,
    };
  },
};
</script>
