<template>
  <div id="app">
    <my-header v-show="$store.state.navTopState"></my-header>
    <transition :name="transitionName">
      <router-view class='router' />
    </transition>
    <my-footer v-if="$store.state.navSlide"></my-footer>
  </div>
</template>
<script>
import navSlide from './components/navSlide.vue';
import myHeader from './components/header.vue';
import myFooter from './components/footer.vue';
export default {
  name: 'App',
  data(){
      return {
          transitionName:''
      }
  },
  created(){
    
  },
  mounted(){
    window.setInterval(()=>{
      if(this.$store.state.playState == true){
        this.$store.commit("playSong");
        
      }
    },100)
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  components:{
    "my-header":myHeader,
    "my-footer":myFooter,
    "nav-slide":navSlide
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  background:#fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router{
  padding-bottom:60px;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

</style>
