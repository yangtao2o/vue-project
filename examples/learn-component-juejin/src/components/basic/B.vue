<template>
  <div>
    <div>BBB, {{ app.text }}</div>
    <button @click="handleClick">Change name value</button>
  </div>
</template>

<script>
export default {
  inject: ["app"],
  methods: {
    handleClick() {
      this.app.changeName('TTTT')
    },
  }
};
</script>

<style></style>
