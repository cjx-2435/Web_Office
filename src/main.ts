import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './lib'
import 'animate.css'

const app = createApp(App);
app.use(globalRegister,{/*locale*/}).use(store).use(router).mount('#app')
