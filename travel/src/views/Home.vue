<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons :iconsList="iconsList"></icons>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader";
import HomeSwiper from "@/components/HomeSwiper";
import Icons from "@/components/Icons";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      iconsList: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    Icons
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios("/mock/index.json")
        .then(res => {
          console.log(res);
          if (res.statusText === "OK") {
            this.iconsList = res.data.iconsList;
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
