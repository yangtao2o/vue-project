# Travel

## Project setup

```bash
npm install
npm run serve
```

## 入口文件

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FastClick from "fastclick"; // https://github.com/ftlabs/fastclick
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.min.css";
import "normalize.css"; // https://necolas.github.io/normalize.css/
import "hairline"; // https://github.com/ufologist/hairline

// Polyfill to remove click delays on browsers with touch UIs
FastClick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper, {}); // https://segmentfault.com/a/1190000014609379

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
```
