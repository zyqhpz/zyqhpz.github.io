<template>
    <header class="text-sm md:text-lg flex mt-10 items-center justify-around mb-10">
        <div>
            <nuxt-link class="flex title-font font-medium items-center text-white no-underline" to="/">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span class="ml-3 no-underline">Haziq Hapiz</span>
            </nuxt-link>
        </div>
        <div class="flex flex-row items-center justify-between space-x-8">
            <nuxt-link class="font-medium text-white no-underline hover:underline" v-for="tab in tabs" :key="tab.name"
                :to="tab.link">{{ tab.name }}</nuxt-link>
        </div>
    </header>
</template>
<script setup lang="ts">
const tabs = [
    { name: 'Resume', link: 'https://drive.google.com/drive/folders/12x2SWgZW4xEiDh_1jM58uyZpDVmPKHz-?usp=sharing' },
    { name: 'About Me', link: '/about' }
]
</script>