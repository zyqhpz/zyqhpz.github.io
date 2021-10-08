<template>
<!-- <div class="px-24 h-screen bg-blue-700 flex flex-col justify-center items-center space-y-5">
   <div class="bg-white rounded-xl shadow-2xl">
      <div class="flex">
         <img src="https://images.unsplash.com/photo-1610720657521-c38abf6dbb7d?" alt="boy with camera" class="rounded-tl-xl w-60 object-cover">
         <div class="p-8">
            <h3 class="font-bold text-2xl mb-5">Build a Card</h3>
            <p>This card has a header, body, and footer. This is where the content of the card goes.</p>
            <button class="mt-5 rounded-lg px-4 py-2 bg-blue-500 text-blue-50 shadow hover:shadow-xl duration-300">
              Get Started
            </button>
          </div>
      </div>
      <footer class="rounded-b-lg bg-gray-100 text-sm text-gray-500 px-8 py-3 text-right">
        Updated 3 days ago
      </footer>
   </div>
</div> -->
<section>
   <div class="px-8 pt-10 sm:pt-2 mx-auto text-center w-full">
      <h2 class="text-3xl font-semibold text-gray-200 underline">My Projects</h2>
      <div class="flex items-center justify-center mt-16">
         <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3" >
            <!-- fix here if got 3 cards md:grid-cols-3 -->
            <div>
               <div class="max-w-xs h-full overflow-hidden bg-white rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <img class="w-full" src="../assets/img/cards/edumaterial.png" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2">EduMaterial</div>
                     <br>
                     <p class="text-gray-700 text-base">
                        EduMaterial was developed to join UN's SDG mission on Goals 4. This is a group project for BITM2113 Web Application Development subject in UTeM.
                     </p>
                  </div>
                  <div class="px-6 pt-auto pb-4">
                     <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Web Development</span>
                     <span class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">HTML5</span>
                     <span class="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">CSS3</span>
                     <span class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Javascript</span>
                     <span class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">PHP</span>
                     <!-- <c-badge c-badge ml="2" font-size="1em" variant="solid" bg="#800080">PHP</c-badge> -->
                  </div>
               </div>
            </div>
            <div>
               <div class="max-w-xs h-full overflow-hidden bg-white rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <img class="w-full h-23" src="../assets/img/cards/yolo.png" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2">Vehicle Counter</div>
                     <br>
                     <p class="text-gray-700 text-base">
                        Using YOLOv3 and OpenCV for object detection and classification in a video stream. DeepSORT was used for object tracking to assign a unique id for each detected object to count.
                     </p>
                  </div>
                  <div class="px-6 pt-auto pb-4">
                     <!-- <span class="inline-block rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Python</span> -->
                     <span class="inline-block bg-indigo-900 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">Computer Vision</span>
                     <span class="inline-block rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2 bg-red-600">Python</span>
                  </div>
                  <div class="border-4 border-red-600">
                     <h6 class="font-bold">
                        Lesson Learnt
                     </h6>
                  </div>
               </div>
            </div>
            <div>
               <div class="max-w-xs h-full overflow-hidden bg-white rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <img class="w-full h-23 bg-cover" src="../assets/img/cards/daftar-jumaat.png" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                     <div class="font-bold text-xl mb-2">Daftar Jumaat</div>
                     <br>
                     <p class="text-gray-700 text-base">
                        A web app to allow muslims to reserve their slot for Jumaat prayer. The SOPs are being enforced by the government to limit the capacity allowed in mosques during the prayer.
                     </p>
                  </div>
                  <div class="px-6 pt-auto pb-4">
                     <!-- <span class="inline-block rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Python</span> -->
                     <span class="inline-block bg-laravel rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2 ">Laravel</span>
                     <span class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">PHP</span>
                     <span class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Web Development</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
// import data from  'src\assets\data.json'
// import { CBadge } from '@chakra-ui/vue'

export default {
    name: 'Tail',
    components: {
      //  CBadge
    },
}
</script>
