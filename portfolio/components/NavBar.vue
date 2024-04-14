<template>
    <header class="hidden container mx-auto flex-wrap pt-5 flex-col md:flex md:flex-row items-center justify-between">
        <div>
            <a class="flex title-font font-medium items-center text-white no-underline">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="ml-3 text-md no-underline">Haziq Hapiz</span>
            </a>
        </div>
        <div class="flex items-center justify-evenly">
            <nuxt-link class="ml-3 title-font font-medium text-md text-white no-underline hover:underline mx-4" to="/projects">Projects</nuxt-link>
            <nuxt-link class="ml-3 title-font font-medium text-md text-white no-underline hover:underline mx-4" to="/resume.pdf" target="_blank">Resume</nuxt-link>
            <nuxt-link class="ml-3 title-font font-medium text-md text-white no-underline hover:underline mx-4" to="/about">About</nuxt-link>
        </div>
    </header>
</template>