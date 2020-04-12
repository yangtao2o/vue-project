<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons :iconsList="iconsList"></icons>
    <hr>
    <home-list></home-list>
    <hr>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/HomeHeader";
import HomeSwiper from "@/components/HomeSwiper";
import Icons from "@/components/Icons";
import HomeList from "@/components/HomeList";
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
    Icons,
    HomeList
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      axios("/mock/index.json")
        .then(res => {
          this.getHomeInfoSucc(res);
        })
        .catch(err => console.log(err));
    },
    getHomeInfoSucc(res) {
      if (res.statusText === "OK") {
        this.iconsList = res.data.iconsList;
      }
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
  hr {
    border-color: #ddd;
  }
}
</style>
