# Vuex-vant-happyfri

非常简单的一个 vue2.6 + vuex 的项目，整个流程一目了然，麻雀虽小，五脏俱全，适合作为入门练习，原文地址：[Github](https://github.com/bailicangdu/vue2-happyfri.git)。

```js
{
  "dependencies": {
    "vant": "^2.8.4",
    "vue": "^2.6.11",
    "vue-router": "^3.2.0",
    "vuex": "^3.4.0"
  }
}
```

## Project setup

```sh
git clone ...
cd vuex-vant-happyfri
npm install
npm run serve
```

## 路由配置

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App,
    children: [
      // 当 / 匹配成功，
      // Home 会被渲染在 App 的 <router-view> 中
      {
        path: '',
        component: Home
      },
      {
        path: '/item',
        component: () =>
          import(/* webpackChunkName: "item" */ '../views/Item.vue')
      },
      {
        path: '/score',
        component: () =>
          import(/* webpackChunkName: "score" */ '../views/Score.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
```

## Mutations

```js
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
  [ADD_ITEMNUM](state, num) {
    state.itemNum += num
  },
  [REMBER_ANSWER](state, id) {
    state.answerId.push(id)
  },
  [REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },
  // init
  [INITIALIZE_DATA](state) {
    state.itemNum = 1
    state.allTime = 0
    state.answerId = []
  }
}
```

## Actions

```js
export default {
  addNum({ commit, state }, id) {
    // 点击下一题，记录答案id
    commit('REMBER_ANSWER', id)
    // 判断是否是最后一题，如果不是则跳转下一题
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  initializeData({ commit }) {
    commit('INITIALIZE_DATA')
  }
}
```

## Store

```js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import { itemDetail } from '../api/index.js'

Vue.use(Vuex)

const state = {
  level: '第一周', //活动周数
  itemNum: 1, // 第几题
  allTime: 0, //总共用时
  timer: '', //定时器
  answerId: [], //答案id
  itemDetail
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
```

## Vue 实例

```js
import Vue from 'vue'
import App from './App.vue'
import { Button, Dialog } from 'vant'
import store from './store'
import router from './router'

Vue.use(Button)
Vue.use(Dialog)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
```

## ItemContainer 组件

```js
import { Dialog } from 'vant'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ItemContainer',
  props: {
    fatherComponent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    }
  },
  computed: {
    ...mapState([
      'itemNum', // 第几题
      'level', // 第几周
      'timer', // 定时器
      'itemDetail' // 题目内容
    ])
  },
  methods: {
    ...mapActions([
      'addNum', // 下一题
      'initializeData' // 初始化
    ]),
    chooseType(type) {
      switch (type) {
        case 0:
          return 'A'
        case 1:
          return 'B'
        case 2:
          return 'C'
        case 3:
          return 'D'
      }
    },
    choosed(type, id) {
      this.choosedNum = type
      this.choosedId = id
    },
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null
        this.addNum(this.choosedId)
      } else {
        Dialog({ message: '您还没有选择答案哦' })
      }
    },
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        if (this.timer) clearInterval(this.timer)
        this.$router.push('score')
      } else {
        Dialog({ message: '您还没有选择答案哦' })
      }
    }
  },
  created() {
    if (this.fatherComponent === 'home') {
      this.initializeData()
      document.body.style.backgroundImage = 'url(./1-1.jpg)'
    }
  }
}
```
