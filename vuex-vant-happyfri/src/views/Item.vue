<template>
  <div class="item">
    <ItemContainer father-component="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemContainer from '@/components/ItemContainer.vue'

export default {
  name: 'Item',
  components: {
    ItemContainer
  },
  created() {
    //进入题目页面，开始计时
    this.$store.commit('REMBER_TIME')
  }
}
</script>
