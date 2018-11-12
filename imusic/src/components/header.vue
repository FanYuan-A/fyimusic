<template>
    <header class="header">
      <img src="../assets/img/left-icon.png" @click="navSlide">
      <div class="nav_font">
        <router-link to="/myself" @click.native="navMove(26)">我的</router-link>
        <router-link to="/recommend" @click.native="navMove(118)">推荐</router-link>
        <router-link to="/classify" @click.native="navMove(211)">分类</router-link>
        <div class="nav_line" :style="{ left: navDistance + 'px' }"></div>
      </div>
      <img src="../assets/img/search-icon.png">
    </header>
</template>

<script>
    import mui from '../lib/mui/js/mui.js'
    export default {
        data(){
            return {
                navDistance:118
            }
        },
        created(){

        },
        methods:{
            navMove(distance){
                this.navDistance=distance;
            },
            navSlide(){
                mui('.mui-off-canvas-wrap').offCanvas('show');
            }
        }
    }
</script>

<style scoped>
    .header{
        display:flex;
        justify-content:space-between;
        background: -webkit-linear-gradient(left, #c471f5 0%, #fa71cd 100%);
        height:44px;
        position:fixed;
        top:0;
        left:0;
        z-index:999;
        width:100%;
    }
    img{
        width:43px;
    }
    a{
        line-height:44px;
        font-size:16px;
        color:#fff;
        margin:0 28px;
        text-decoration:none;
    }
    .nav_font{
        position:relative;
    }
    .nav_line{
        position:absolute;
        height:2px;
        background:#fff;
        width:36px;
        top:42px;
        left:118px;
        transition:all 0.5;
    }
</style>