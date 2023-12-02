import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './css/index.css'
import App from './App.vue'
import VueAwesomePaginate from "vue-awesome-paginate"
import "vue-awesome-paginate/dist/style.css"


const pinia = createPinia()
const app = createApp(App)


app
.use(pinia)
.use(router)
.use(VueAwesomePaginate)

.mount('#app')
