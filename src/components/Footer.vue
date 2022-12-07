<template>
    <div class="bg-black bg-opacity-50 w-full h-12 mt-16 flex justify-center item-center align-middle">
        <h4 class="text-white my-auto text-base md:text-lg align-middle">
        Developed with ❤ by Haziq Hapiz © {{ year }}
        </h4>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
        }
    },
}
</script>