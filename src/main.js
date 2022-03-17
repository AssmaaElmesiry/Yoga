import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import KProgress from 'k-progress-v3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import vue3StarRatings from "vue3-star-ratings"
library.add(fas),
    createApp(App)
    .use(router)
    .component("vue3-star-ratings", vue3StarRatings)
    .component('fa', FontAwesomeIcon)
    .use(BootstrapVue3)
    .component('k-progress', KProgress)
    .mount('#app')