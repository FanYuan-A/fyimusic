<template>
    <div class="app">
        <div class="play-header">
            <img src="../assets/img/playing/play-header-arrow.jpg" @click="goback">
            <p>正在播放</p>
            <img src="../assets/img/playing/play-header-more.jpg">
        </div>
        <div class="play-album">
            <img src="../assets/img/album-big.png">
        </div>
        <div class="volume">
            <img src="../assets/img/playing/play-voice.jpg">
            <volume-slider width="80%" leftBg="linear-gradient(to left, #fa71cd, #c471f5)" bgc="#ccc"></volume-slider>
        </div>
        <my-progress></my-progress>
        <div class="bottom-decoration">
            <div class="d1"></div>
            <div class="d2"></div>
        </div>
    </div>
</template>

<script>
    import volumeSlider from './volumeSlider.vue'
    import progress from './progress.vue'
    export default {
        data(){
            return {}
        },
        created(){
            
        },
        mounted(){
            this.$store.commit("navTopHide");
            this.$store.commit("navSlideHide");
        },
        destroyed(){
            this.$store.commit("navTopShow");
            this.$store.commit("navSlideShow");
        },
        methods:{
            goback(){
                this.$router.go(-1)
            }
        },
        components:{
            "volume-slider":volumeSlider,
            "my-progress":progress
        }
    }
</script>

<style scoped>
    .play-header{
        display:flex;
        justify-content:space-between;
        height:44px;
    }
    .play-header img{
        height:44px;
    }
    .play-header p{
        line-height:44px;
        font-size:14px;
        background-image: -webkit-linear-gradient(right, #fa71cd, #c471f5);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .play-album{
        width:313px;
        margin:0 auto;
        margin-top:20px;
    }
    .play-album img{
        width:100%;
    }
    .volume{
        display:flex;
        align-items:center;
        padding-left:30px;
    }
    .volume img{
        width:22px;
        height:25px;
        margin-right:5px;
    }
    .bottom-decoration{
        width:100%;
        height:22px;
        position:fixed;
        bottom:0;
    }
    .d1{
        width:800px;
        height:800px;
        background:#fa71cd;
        border-radius:50%;
        position:absolute;
        top:0;
        left:-33%;
        opacity:0.3;
    }
    .d2{
        width:600px;
        height:600px;
        background:#fa71cd;
        border-radius:50%;
        position:absolute;
        top:30%;
        left:-55%;
        opacity:;
    }
</style>