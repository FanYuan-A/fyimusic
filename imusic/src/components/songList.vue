<template>
    <div class="app">
        <div class="top-header">
            <div class="top-header-title">
                <img src="../assets/img/header-arrow.png" @click="goback">
                <p>歌单</p>
            </div>
            <div class="top-font">
                <img src="../assets/img/top-Kon.png">
            </div>
            <div class="top-bottom">
                <div class="top-bottom-left">
                    <img src="../assets/img/song-pic_06.jpg">
                    <span>SINGER</span>
                </div>
                <div class="top-bottom-right">
                    <img src="../assets/img/listen-count.png" alt="">
                    <span>30万</span>
                </div>
            </div>
        </div>
        <div class="icon">
            <div>
                <img src="../assets/img/song-list-icon_03.jpg">
                <p>收藏</p>
            </div>
            <div>
                <img src="../assets/img/song-list-icon_05.jpg">
                <p>下载</p>
            </div>
            <div>
                <img src="../assets/img/song-list-icon_07.jpg">
                <p>分享</p>
            </div>
            <div>
                <img src="../assets/img/song-list-icon_09.jpg">
                <p>评论</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="list-item" v-for="item in list" :key="item.id">
            <div class="song-pic">
                <img :src="item.img">
            </div>
            <div class="song-desc">
                <p>{{item.songName}}</p>
                <p>{{item.singer}}</p>
            </div>
            <div class="more">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        created(){
            this.getList()
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
            },
            getList(){
                this.$axios.get("http://localhost:3000/song/list").then(result=>{
                    this.list = result.data;
                    console.log(this.list)
                })
            }
        }
    }
</script>

<style scoped>
    @import '../common/font/font.css';
    .top-header{
        height:243px;
        background:url('../assets/img/Group-3.png') no-repeat;
        background-size:100% 100%;
    }
    .top-header-title{
        display:flex;
        align-items:center;
        height:44px;
    }
    .top-header-title>img{
        height:44px;
    }
    .top-header-title>p{
        color:#fff;
        width:315px;
        margin:0;
        text-align:center;
    }
    .top-font{
        text-align:left
    }
    .top-font>img{
        position:relative;
        top:33px;
        left:30px;
        width:125px;
    }
    .top-bottom{
        display:flex;
        justify-content:space-between;
        margin-top:92px;
        align-items:center;
        padding:0 12px;
    }
    .top-bottom-left{
        display:flex;
        align-items:center;
    }
    .top-bottom-left>img{
        width:32px;
        height:32px;
        border-radius:50%;
        margin-right:10px;
    }
    .top-bottom-left>span{
        font-size:12px;
        color:#333;
    }
    .top-bottom-right{
        display:flex;
        align-items:center;
    }
    .top-bottom-right>img{
        width:14px;
        margin-right:10px;
    }
    .top-bottom-right>span{
        color:#9f9f9f;
        font-size:12px;
    }
    .icon img{
        width:37px;
        height:37px;
    }
    .icon{
        display:flex;
        justify-content:space-between;
        padding:0 47px;
        margin-top:40px;
    }
    .line{
        background:#eee;
        height:1px;
        width:95%;
        margin:0 auto;
        margin-top:20px;
    }
    .list-item{
        padding:0 28px;
        display:flex;
        margin-top:20px;
    }
    .list-item p{
        margin:0
    }
    .song-pic>img{
        width:40px;
        height:40px;
    }
    .song-desc{
        margin-left:20px;
        width:233px;
    }
    .song-desc>p{
        font-size:16px;
        text-align:left;
        color:#333;
    }
    .song-desc>p:nth-child(2){
        color:#999;
        font-size:12px;
    }
    .more{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:26px;
    }
    .more div{
        width:5px;
        height:5px;
        border-radius:50%;
        background:#999;
    }
</style>