<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.use(Button);

export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
