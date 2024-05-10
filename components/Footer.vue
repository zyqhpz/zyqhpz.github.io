<template>
    <div class="bg-black bg-opacity-50 w-full h-12 mt-12 flex justify-center item-center align-middle">
        <h4 class="text-white my-auto text-base md:text-lg align-middle">
            Developed with ❤️ by Haziq Hapiz © {{ getCurrentYear() }}
        </h4>
    </div>
</template>
<script setup>
const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}
</script>