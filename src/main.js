import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'tw-elements';
import { vue3Debounce } from 'vue-debounce'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(VueSweetalert2);
app.directive('debounce', vue3Debounce({ lock: true }))
app.mount('#app')

