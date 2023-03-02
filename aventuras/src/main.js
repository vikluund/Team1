import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.mount('#app')
