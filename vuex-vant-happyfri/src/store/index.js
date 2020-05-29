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
