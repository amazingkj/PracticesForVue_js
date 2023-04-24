import Vue from 'vue'
import App from './App.vue'
//import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { router } from '../router/index.js';
import { store } from './store/index.js'
library.add(faUser)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  library,
  FontAwesomeIcon,
  faUser
}).$mount('#app')
