<template>
  <div class="header">
    <input type="text" placeholder="关键字" />
    <span>城市</span>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="less" scoped>
#app {
  .header {
    height: 3.5rem;
    line-height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      flex: auto;
      margin: 0 0.5rem;
      border: 1px solid #ccc;
      overflow: hidden;
      padding: 2px 10px;
      height: 1.875rem;
      border-radius: 4px;
    }
    span {
      width: 3rem;
    }
  }
}
</style>
