<template>
    <header class="hidden container mx-auto flex-wrap pt-2 pb-5 flex-col sm:flex md:flex-row items-center justify-between">
        <div>
            <a class="flex title-font font-medium items-center text-white no-underline">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <router-link to="/" class="ml-3 text-md no-underline text-white">Haziq Hapiz</router-link>
            </a>
        </div>
        <div class="flex items-center justify-evenly">
            <router-link to="/" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Home</router-link>
            <router-link to="/project" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Projects</router-link>
            <a class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="/resume.pdf" target="_blank">Resume</a>
            <router-link to="/about" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">About Me</router-link>
            <a class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Contact Me</a>
        </div>
        <!-- <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav> -->
    </header>
</template>

<script>
    export default {
        name: 'HeaderRoute',
    }

</script>