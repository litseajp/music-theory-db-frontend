import './assets/stylesheets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// import vuetify and mdi
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// setup app
const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

// set baseURL of axios
axios.defaults.baseURL = 'http://localhost:3000'
