import { createApp } from 'vue'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap-grid.css'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/router.js'
import store from './store'


const app = createApp(App);
app.use(router)
app.use(PrimeVue)
app.use(store)
app.mount('#app')
