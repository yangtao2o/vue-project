<template>
  <div>
    <h2>分步表单</h2>
    <div class="nav">
      <router-link to="/form/step-form/info">Info</router-link> |
      <router-link to="/form/step-form/confirm">Confirm</router-link> |
      <router-link to="/form/step-form/result">Result</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
