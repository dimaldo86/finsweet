import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './css/index.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)


app
.use(pinia)
.use(router)
.mount('#app')
