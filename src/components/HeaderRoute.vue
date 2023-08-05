<template>
    <div>
        <nav class="hidden container mx-auto flex-wrap pt-2 pb-5 flex-col sm:flex md:flex-row items-center justify-between">
            <div>
                <a class="flex title-font font-medium items-center text-white no-underline">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <router-link to="/" class="ml-3 text-md no-underline text-white">Haziq Hapiz</router-link>
                </a>
            </div>

            <div class="hidden md:flex items-center justify-evenly">
                <router-link to="/" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Home</router-link>
                <router-link to="/project" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Projects</router-link>
                <router-link to="/qualification" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">Qualification</router-link>
                <router-link to="/about" class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="">About Me</router-link>
                <a class="ml-3 title-font font-medium text-md text-white no-underline mx-4" href="https://drive.google.com/drive/folders/12x2SWgZW4xEiDh_1jM58uyZpDVmPKHz-?usp=sharing" target="_blank">Resume</a>
            </div>
        </nav>

        <nav class="md:hidden flex container mx-auto flex-wrap pb-2 flex-col sm:flex md:flex-row items-center justify-between">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <div>
                    <a class="flex title-font font-medium items-center text-white no-underline">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <router-link to="/" class="ml-3 text-md no-underline text-white">Haziq Hapiz</router-link>
                    </a>
                </div>
                <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full" id="navbar-hamburger">
                    <ul class="block mt-4 rounded-lg bg-gray-200 list-none items-start px-0">
                        <li>
                            <router-link to="/" class="block py-2 px-4 text-sm no-underline rounded text-gray-800 hover:bg-gray-300">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/project" href="#" class="block py-2 px-4 text-sm no-underline rounded text-gray-800 border-t-2 border-gray-500 hover:bg-gray-300">Projects</router-link>
                        </li>
                        <li>
                            <router-link to="/qualification" href="#" class="block py-2 px-4 text-sm no-underline rounded text-gray-800 border-t-2 border-gray-500 hover:bg-gray-300">Qualification</router-link>
                        </li>
                        <li>
                            <router-link to="/about" href="#" class="block py-2 px-4 text-sm no-underline rounded text-gray-800 border-t-2 border-gray-500 hover:bg-gray-300">About Me</router-link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/drive/folders/12x2SWgZW4xEiDh_1jM58uyZpDVmPKHz-?usp=sharing" target="_blank" class="block py-2 pl-3 pr-4 text-sm no-underline rounded text-gray-800 border-t-2 border-gray-500 hover:bg-gray-300">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'HeaderRoute',
    }

</script>