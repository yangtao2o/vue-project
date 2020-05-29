<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/form/basic-form">BasicForm</router-link> |
      <router-link to="/form/step-form">StepForm</router-link> |
      <router-link to="/exception">Exception</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/user/login">Login</router-link> |
      <router-link to="/user/register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
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
