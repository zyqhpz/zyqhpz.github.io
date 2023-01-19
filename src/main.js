// import { createApp } from 'vue'
import Vue from 'vue'

import App from './App.vue'

// import './index.css'
import 'tailwindcss/tailwind.css'

import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin } from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import VueTippy, { TippyComponent } from "vue-tippy"
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
import router from './router'

Vue.use(BootstrapVue)
Vue.use(VueTippy);
Vue.use(ModalPlugin)

Vue.use(Chakra)

Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.component("tippy", TippyComponent);
Vue.config.productionTip = false
Vue.use(IconsPlugin)

new Vue({
 router,
 render: h => h(CThemeProvider, [h(App)])
}).$mount('#app')

// TODO 
/*
 1. fix responsive card size - done
 2. add info to the card - done
 3. v-for JSON
 4. delete extend in tailwind cfg - done
 5. add a navbar on bottom of MYPROJECT text -> to filter based on project type and tech stack
 6. add img for project WebApp, CV car counter

 - build tech stack tag as component
*/
