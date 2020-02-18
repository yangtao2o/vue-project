<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  components: {
    Home
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
