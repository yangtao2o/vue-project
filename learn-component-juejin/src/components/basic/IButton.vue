<template>
  <button
    :class="'i-button-size-' + size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <slot>点击</slot>
  </button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}
export default {
  inheritAttrs: false,
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("on-click", event);
    },
  },
};
</script>

<style scoped>
.i-button-size-default {
  font-size: 14px;
}
.i-button-size-small {
  font-size: 12px;
}
.i-button-size-large {
  font-size: 16px;
}
</style>
