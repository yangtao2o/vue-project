<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) of swiperList" :key="index"
      >I'm Slide {{ item }}</swiper-slide
    >
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "HeaderSwiper",
  data() {
    return {
      swiperList: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        autoplay: 3000,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style lang="less" scoped>
#app {
  .swiper-container {
    height: 35vw;
    background: #ccc;
    .swiper-slide {
      line-height: 8rem;
      font-size: 4rem;
    }
    .swiper-pagination {
      font-size: inherit;
    }
  }
}
</style>
