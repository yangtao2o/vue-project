import Vue from 'vue'
import App from './App.vue'
import { Button, Dialog } from 'vant'
import store from './store'
import router from './router'

Vue.use(Button)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
