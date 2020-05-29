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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
