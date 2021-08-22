// import { createApp } from 'vue'
import Vue from 'vue'

import App from './App.vue'

import { BootstrapVue, IconsPlugin, LayoutPlugin, ModalPlugin, CardPlugin } from 'bootstrap-vue'
// import bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css'
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(BootstrapVue)
Vue.use(VueTippy);
Vue.use(ModalPlugin)

Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.component("tippy", TippyComponent);
Vue.config.productionTip = false
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')


// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin
// createApp(App).mount('#app')




// TODO 
/*
    1. Add font yg cantik sikit
    2. fix text (size/position)
    3. add profile image - done
    4. add medsos icon + link
*/