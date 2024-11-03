import { createApp } from 'vue'

import App from './App.vue'
import ShuiUi from '../packages/index';



const app =  createApp(App)
app.use(ShuiUi)
app.mount('#app')