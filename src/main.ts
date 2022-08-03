import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import '@popperjs/core'
import './assets/sass/main.scss'
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App).use(store).use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDMIeZXq08EAYpy5zgugW_dFBtwTHrb_A0',
    },
}).mount('#app')
