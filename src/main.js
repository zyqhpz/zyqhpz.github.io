// import { createApp } from 'vue'
import Vue from 'vue'

import App from './App.vue'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import tippy from 'tippy.js';
// import 'tippy.js/dist/tippy.css'
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// createApp(App).mount('#app')
VueTippy.use(VueTippy);

Vue.component("tippy", TippyComponent);



// TODO 
/*
    1. Add font yg cantik sikit
    2. fix text (size/position)
    3. add profile image - done
    4. add medsos icon + link
*/