<template>
  <!-- <b-card
    title="EduMaterial"
    img-src="https://picsum.photos/600/300/?image=1"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  > -->
  <div>
          <c-badge c-badge ml="2" font-size="1em" variant="solid" variant-color="orange">HTML5</c-badge>
   <div class="px-8 pt-10 sm:pt-2 mx-auto text-center w-full">
      <h2 class="text-3xl font-semibold text-gray-200 underline">My Projects JSON</h2>
      <div class="flex items-center justify-center mt-10">
         <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 " >
            <div v-for="item in data" v-bind:key="item.id">
               <div class="max-w-xs overflow-hidden bg-white rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <img class="w-full" v-bind:src="item.img" alt="Sunset in the mountains">
                  <div class="px-6 py-4">
                           <div class="font-bold text-xl mb-2">{{item.name}}</div>
                     <p class="text-gray-700 text-base">
                        {{item.description}}
                     </p>
                  </div>
                  <div class="inline flex px-6 pt-4 pb-2 flex item-center flex-wrap justify-item">
                     <div v-for="s in item.stack" :key="s.id">
                        <span class="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 ">{{s.name}}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

  </div>
</template>

<script>
import { CBadge } from '@chakra-ui/vue'

export default {
    name: 'Card',
    components: {
        CBadge
    }, 
    data() {
        return {
         data: [
            {
            "id" : 1,
            "name" : "EduMaterial",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            "img" : "https://picsum.photos/600/300/?image=13",
            "stack" : [
               {
               "id" : 1,
               "name" : "PHP",
               "color" : "#800080"
               },
               {
               "id" : 2,
               "name" : "HTML5",
               "color" : "#FF0000"
               },
               {
               "id" : 3,
               "name" : "CSS3",
               "color" : "#FFA500"
               },
               {
               "id" : 4,
               "name" : "Javascript",
               "color" : "#FFFF00"
               },
            ]
         },
         {
            "id" : 2,
            "name" : "Sunrise",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            "img" : "https://source.unsplash.com/photos/eOpewngf68w",
         },
         {
            "id" : 3,
            "name" : "Computer Vision",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            "img" : "../assets/img/cards/yolo.png",
            "stack" : [
               {
               "id" : 1,
               "name" : "Python",
               "color" : "#800080"
               },
               {
               "id" : 2,
               "name" : "Computer Vision",
               "color" : "#FF0000"
               },
            ]
         }
            ]
        }
    }
    // props: {
    //     title: String,
    //     description: String,
    //     image: String,
    //     badge: String,
    // },
}
</script>