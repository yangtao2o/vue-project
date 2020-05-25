<template>
  <div>
    <h4>基础：Vue.js 组件的三个 API：prop、event、slot</h4>
    <i-button size="small" @on-click="handleClick">提交</i-button>
    <i-button id="btn1" class="myself" disabled></i-button>
    <i-button size="large" @click.native="handleClick">
      <template v-slot:icon>
        <span>*</span>
      </template>
      重置
    </i-button>
    <p>其他：ref 和 $parent / $children 在跨级通信时是有弊端</p>
    <h4>组件的通信 1：provide / inject</h4>
    <i-a></i-a>
    <i-b></i-b>
    <p>
      总结：provide / inject API
      主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。<br />然后有两种场景它不能很好的解决：<br />

      1. 父组件向子组件（支持跨级）传递数据；<br />
      2. 子组件向父组件（支持跨级）传递数据。
    </p>
    <h4>组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import IButton from "@/components/basic/IButton.vue";
import IA from "@/components/basic/A.vue";
import IB from "@/components/basic/B.vue";

export default {
  name: "Basic",
  components: {
    IButton,
    IA,
    IB,
  },
  provide() {
    return {
      app: this,
    };
  },
  data() {
    return {
      name: "Basic",
      text: "This is a provide",
    };
  },
  methods: {
    handleClick() {
      alert(event.target.className);
    },
    changeName(value) {
      this.name = this.name === value ? "Basic" : value;
    },
  },
};
</script>
