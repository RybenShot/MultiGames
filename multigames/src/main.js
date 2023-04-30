import { createApp } from 'vue'
import vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store'
import i18n from './i18n'





createApp(App).use(i18n).use(store).use(router).use(vuex).mount('#app')
