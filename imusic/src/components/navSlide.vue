<template>
    <!-- 侧滑导航根容器 -->
    <div class="mui-off-canvas-wrap">
    <!-- 菜单容器 -->
        <aside class="mui-off-canvas-left">
            <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <!-- 菜单具体展示内容 -->
                <h1>1111</h1>
                <h1>1111</h1>
                <h1>1111</h1>
                <h1>1111</h1>
                <h1>1111</h1>
            </div>
            </div>
        </aside>
    <!-- 主页面容器 -->
        <div class="mui-inner-wrap">
            <!-- 主页面标题 -->
            <header class="mui-bar mui-bar-nav">
            <img src="../assets/img/left-icon.png" />
            <div class="nav_font">
                <!--<button @click="jump(classify)">test</button>-->
                <router-link to="/myself" @click="jumpMyself">我的</router-link>
                <router-link to="/recommend" @click="jumpRecommend">推荐</router-link>
                <router-link to="classify" @click="jumpClassify">分类</router-link>
                <div class="nav_line"></div>
            </div>
            <img src="../assets/img/search-icon.png">
            </header>
            <div class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
                <router-view></router-view>
            </div>
            </div>  
        </div>
    </div>
</template>

<script>
    import mui from '../lib/mui/js/mui.js'
    export default {
        data(){
            return {}
        },
        created(){
            mui('.mui-scroll-wrapper').scroll();
        },
        methods:{
            jumpMyself(){
                console.log('clicked');
                this.$router.push('/myself')
                //mui('body').on('tap','a',function(){document.location.href=this.url;});
            },
            jumpRecommend(){
                console.log('clicked');
                this.$router.push('/recommend')
                //mui('body').on('tap','a',function(){document.location.href=this.url;});
            },
            jumpClassify(){
                console.log('clicked');
                this.$router.push('/classify')
                //mui('body').on('tap','a',function(){document.location.href=this.url;});
            }
        }
    }
</script>

<style scoped>
    .mui-off-canvas-wrap{
        height:100%;
    }
    .mui-inner-wrap .mui-bar{
        display:flex;
        justify-content:space-between;
        background: -webkit-linear-gradient(left, #c471f5 0%, #fa71cd 100%);
        height:44px;
        padding:0;
    }
    .mui-inner-wrap .mui-bar img{
        width:43px;
    }
    .mui-inner-wrap .mui-bar a{
        color:#fff;
        font-size:16px;
        line-height:44px;
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
    .mui-content{
        background:#fff;
    }
</style>