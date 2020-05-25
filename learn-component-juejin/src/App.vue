<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Basic</router-link> |
      <router-link to="/demo-form">实战1：Form</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
