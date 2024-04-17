<template>
    <header class="flex pt-5 items-center justify-around mb-10">
        <div>
            <nuxt-link class="flex title-font font-medium items-center text-white no-underline" to="/">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 sm:h-6 sm:w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span class="ml-3 text-md no-underline">Haziq Hapiz</span>
            </nuxt-link>
        </div>
        <div class="hidden md:flex md:flex-row items-center justify-between space-x-8">
            <nuxt-link class="font-medium text-md text-white no-underline hover:underline" v-for="tab in tabs" :key="tab.name" :to="tab.link">{{ tab.name }}</nuxt-link>
        </div>
        <div class="flex md:hidden z-50">
            <div class="w-60">
            <HeadlessListbox v-model="selectedTab">
                <div class="relative mt-1">
                <HeadlessListboxButton
                    class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
                >
                    <span class="block truncate">{{ selectedTab ? selectedTab.name : '' }}</span>
                    <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                    >
                    <ChevronUpDownIcon
                        class="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </HeadlessListboxButton>

                <transition
                    leave-active-class="transition duration-100 ease-in"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <HeadlessListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                    >
                    <HeadlessListboxOption
                        v-for="tab in tabs"
                        v-slot="{ active, selected }"
                        :key="tab.name"
                        :value="tab"
                        as="template"
                        @click="onSelectTab(tab)"
                    >
                        <li
                        :class="[
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                        >
                        <span
                            :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block truncate',
                            ]"
                        >{{ tab.name }}</span>
                        <span
                            v-if="selected"
                            class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                        >
                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                        </span>
                        </li>
                    </HeadlessListboxOption>
                    </HeadlessListboxOptions>
                </transition>
                </div>
            </HeadlessListbox>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { useRouter } from 'vue-router'

const tabs = [
  { name: 'Home', link: '/' },
  { name: 'Projects', link: '/projects' },
  { name: 'Resume', link: '/resume.pdf' },
  { name: 'About', link: '/about' }
]

interface Tab {
  name: string
  link: string
}

const selectedTab = ref<Tab | null>(null)
const router = useRouter()

// Set selectedTab based on the current route path
onMounted(() => {
  const path = router.currentRoute.value.path
  const pathObj = tabs.find(tab => tab.link === path)
  selectedTab.value = pathObj || tabs[0]
})

// Function to handle tab selection
const onSelectTab = (tab: any) => {
  selectedTab.value = tab.name
  router.push(tab.link)
}
</script>