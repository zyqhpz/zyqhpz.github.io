<template>
  <div class="mt-5">
    <div class="px-8 mx-auto text-center w-full">
      <div
        class="flex flex-col justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300 gap-4"
      >
        <h2 class="text-center">Personal projects</h2>
        <IconDoubleDown class="animate-bounce h-4 w-4" />
      </div>
      <div class="flex items-center justify-center mt-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <!-- fix here if got 3 cards md:grid-cols-3 -->
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover pointer-events-auto cursor-pointer"
                src="/img/cards/mutabaah.png"
                alt="Mutabaah Amal project image"
                @click="openMutabaahAmal()"
              />
              <div class="px-6 py-4">
                <div class="flex flex-col font-bold text-xl mb-2">
                  <span>Mutabaah Amal</span>
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  A web app for Muslims to track their daily religious
                  practices, helping them stay consistent and motivated. The app
                  includes a dashboard and a progress tracker to monitor their
                  spiritual growth.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-nextjs rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >NextJS</span
                >
                <span
                  class="inline-block bg-firebase rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Firebase</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover pointer-events-auto cursor-pointer"
                src="/img/cards/kirapelaburan.png"
                alt="Kira Pelaburan project image"
                @click="openKiraPelaburan()"
              />
              <div class="px-6 py-4">
                <div class="flex flex-col font-bold text-xl mb-2">
                  <span>Kira Pelaburan</span>
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  Kira Pelaburan is an advanced investment calculator for
                  personalised financial planning. Tailor your strategy with
                  multiple monthly contributions, interest rates, and investment
                  durations with a single click.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-nextjs rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >NextJS</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover pointer-events-auto cursor-pointer"
                src="/img/cards/eventeq.png"
                alt="EventEQ project image"
                @click="openEventEQ()"
              />
              <div class="px-6 py-4">
                <div class="flex flex-col font-bold text-xl mb-2">
                  <span>EventEQ</span>
                  <span class="text-xs">(Final Year Project)</span>
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  A user-friendly web platform for renting high-quality PA
                  system items The platform has camera capabilities for
                  equipment verification through QR code scanning, ensuring a
                  seamless rental experience.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-react rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >React</span
                >
                <span
                  class="inline-block bg-go rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Go</span
                >
                <span
                  class="inline-block bg-mongodb rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >MongoDB</span
                >
                <span
                  class="inline-block bg-docker rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Docker</span
                >
                <span
                  class="inline-block bg-aws rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >AWS</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover"
                src="/img/cards/ekk.jpg"
                alt="E-Kertas Kerja project image"
              />
              <div class="px-6 py-4">
                <div class="flex flex-col font-bold text-xl mb-2">
                  <span>e-Kertas Kerja</span>
                  <span class="text-xs">(Workshop 2)</span>
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  A web application for student clubs and university management
                  streamlines paperwork management. It tracks approval status
                  and offers a paperwork generator with the latest formats,
                  saving time and improving efficiency.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-laravel rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >Laravel</span
                >
                <span
                  class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >PHP</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover"
                src="/img/cards/wp-portfolio.png"
                alt="Payment gateway integration project image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Payment Gateway Integration
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  Freelance task to integrate DuitNow Online Banking and JomPay
                  in Wordpress website. I did some customizations on the website
                  depending on the requirements given by the client.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >PHP</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full"
                src="/img/cards/edumaterial.png"
                alt="EduMaterial project image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">EduMaterial</div>
                <br />
                <p class="text-gray-700 text-base">
                  EduMaterial was developed to join UN's SDG mission on Goals 4.
                  This is a group project for BITM2113 Web Application
                  Development subject in UTeM.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-orange-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >HTML5</span
                >
                <span
                  class="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >CSS3</span
                >
                <span
                  class="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >JavaScript</span
                >
                <span
                  class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >PHP</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover pointer-events-auto cursor-pointer"
                src="/img/cards/yolo.png"
                alt="Vehicle Counter project image"
                @click="openOpenCV()"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Vehicle Counter</div>
                <br />
                <p class="text-gray-700 text-base">
                  Using YOLOv3 and OpenCV for object detection and
                  classification in a video stream. DeepSORT was used for object
                  tracking to assign a unique id for each detected object to
                  count.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-indigo-900 rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >Computer Vision</span
                >
                <span
                  class="inline-block rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2 bg-red-600"
                  >Python</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover"
                src="/img/cards/daftarjumaat.jpg"
                alt="Daftar Jumaat project image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Daftar Jumaat</div>
                <br />
                <p class="text-gray-700 text-base">
                  A web app to allow muslims to reserve their slot for Jumaat
                  prayer. The SOPs are being enforced by the government to limit
                  the capacity allowed in mosques during the prayer.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-laravel rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                  >Laravel</span
                >
                <span
                  class="inline-block bg-purple-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >PHP</span
                >
                <span
                  class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >Web Development</span
                >
              </div>
            </div>
          </div>
          <div>
            <div
              class="max-w-xs h-full overflow-hidden bg-gray-200 rounded-2xl shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                class="w-full h-23 bg-cover"
                src="/img/cards/foodbear.png"
                alt="FoodBear project image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  FoodBear Delivery System
                </div>
                <br />
                <p class="text-gray-700 text-base">
                  An individual project for Workshop 1 subject at UTeM and as a
                  terminal-based application. This is a food delivery system
                  that allows users to order food and get it delivered to their
                  doorstep.
                </p>
              </div>
              <div class="px-6 pt-auto pb-4">
                <span
                  class="inline-block bg-cpp rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  >C++</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function openOpenCV() {
  window.open("https://youtu.be/HV7dPHIIWuA", "_blank");
}
function openEventEQ() {
  window.open("https://youtu.be/NciUvoDfpQQ", "_blank");
}
function openKiraPelaburan() {
  window.open("https://kira-pelaburan.vercel.app/", "_blank");
}
function openMutabaahAmal() {
  window.open("https://mutabaah-amal.vercel.app/", "_blank");
}

export default {
  name: "Projects",
  components: {},
  methods: {
    openOpenCV,
    openEventEQ,
    openKiraPelaburan,
    openMutabaahAmal,
  },
};
</script>
