<template>
<div class="px-24 h-screen bg-blue-700 flex flex-col justify-center items-center space-y-5">
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
   </div>
</template>

<script>
export default {
    name: 'Tail'
}
</script>