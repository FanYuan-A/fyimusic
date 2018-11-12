// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios=axios;

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'; 
Vue.use(Mint);
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    //专门用来存储共享数据,想像组件data
    //如果在组件中操作 this.$store.state.*** 方法
    //#购物车中数量共享数据
    navSlide:true,
    navTopState:true,
    playState:false,
    songLength:0
  },
  mutations:{
    //#注意 操作共享数据只能通过 mutations提供方法
    //如果组件想调用 mutations 只能使用
    //this.$store.commit("increment");
    navSlideShow(state){ state.navSlide=true},
    navSlideHide(state){ state.navSlide=false},
    navTopShow(state){ state.navTopState=true},
    navTopHide(state){ state.navTopState=false},
    songPlay(state){ state.playState=true; },
    songStop(state){ state.playState=false; },
    playSong(state){
      if(state.songLength < 312) 
      state.songLength+=0.5 
    },
    subtract(state){  state.count--}
  },
  getters:{
    //#getters 只负责对外提供数据,不负责修改数据
    //在组件模板中 {{$store.getters.optCount}}
    optCount:function(state){
      return state.navSlide;
    },
    optPlayState:function(state){
      return state.playState;
    },
    optSongLength:function(state){
      return state.songLength;
    }
  }
});
// 排名状态过滤器
Vue.filter("rankState",function(val){
  if(val){
    return '↑'
  }else{
    return '↓'
  }
})




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
