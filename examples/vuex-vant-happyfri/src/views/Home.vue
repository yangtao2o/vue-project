<template>
  <div class="home">
    <ItemContainer father-component="home" />
  </div>
</template>

<script>
// @ is an alias to /src
import ItemContainer from '@/components/ItemContainer.vue'

export default {
  name: 'Home',
  components: {
    ItemContainer
  }
}
</script>
