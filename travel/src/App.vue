<template>
  <div id="app">
    <header-area></header-area>
    <header-swiper></header-swiper>
  </div>
</template>

<script>
import HeaderArea from "./components/HeaderArea";
import HeaderSwiper from "./components/HeaderSwiper";
export default {
  components: {
    HeaderArea,
    HeaderSwiper
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
