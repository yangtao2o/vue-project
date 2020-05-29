import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant'
import store from './store'
import router from './router'

Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
