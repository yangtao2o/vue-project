<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <ul class="icons-item">
          <li v-for="item of page" :key="item.id">
            <div class="iconfont">&#xe626;</div>
            <div>{{ item.text }}</div>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "@/assets/styles/iconfont.css";
export default {
  name: "Icons",
  props: {
    iconsList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="less" scoped>
.icons-item {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 25%;
    font-size: 1rem;
    padding: 0.6rem;
    box-sizing: border-box;
  }
}
</style>
