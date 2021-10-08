<template>
    <section>
        <div class="px-8 pt-10 sm:pt-2 mx-auto text-center w-full mt-8">
        <h2 class="text-3xl font-semibold text-gray-200 underline">PastContributions</h2>
        <div class="flex items-center justify-center mt-16">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3" >
                <div class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <div class="px-6 py-4">
                        <a href="http://sambalsos.com" target="_blank" rel="noopener noreferrer" class="font-bold text-xl mb-2 text-black no-underline">Sambal SOS</a>
                        <br>
                        <p class="text-gray-700 text-base">
                            A crowdsourcing platform for the community to help poor people in the community.
                        </p>
                    </div>
                    <div class="px-6 pt-auto pb-4">
                        Contributed on Front-end side of the website.
                        <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">ReactJS</span>                        <!-- <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: 'Contribution',
    // data() {
    //     return {
    //         //
    //     }
    // },
    // methods: {
    //     //
    // }
}
</script>