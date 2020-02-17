import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FastClick from "fastclick"; // https://github.com/ftlabs/fastclick
import "normalize.css"; // https://necolas.github.io/normalize.css/
import "hairline"; // https://github.com/ufologist/hairline

// Polyfill to remove click delays on browsers with touch UIs
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
