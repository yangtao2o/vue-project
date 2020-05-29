<template>
  <div>
    <ul class="home-list">
      <li>
        <div class="list-item">1</div>
      </li>
      <li>
        <div class="list-item">2</div>
      </li>
      <li>
        <div class="list-item">3</div>
      </li>
      <li>
        <div class="list-item">4</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.home-list {
  margin: 0;
  padding: 0 5px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 50%;
    height: 30vw;
    padding: 5px;
  }
  .list-item {
    height: 100%;
    line-height: 6.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 3rem;
  }
}
</style>
