<template>
    <div class="app">
        <div class="top-header">
            <div class="top-header-title">
                <img src="../assets/img/header-arrow.png" @click="goback">
                <p>排行榜</p>
            </div>
            <div class="top-font">
                <img src="../assets/img/top-font.png">
                <p>更新于2018-9-31</p>
            </div>
        </div>
        <div class="top-item" v-for="item in list" :key="item.id" @click="goPlaying">
            <div class="rank">
                <p>{{item.rankNo}}</p>
                <p><span>{{item.rankState | rankState}}</span>{{item.rankChange}}</p>
            </div>
            <div class="song-pic">
                <img :src="item.pic_sm">
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
            this.$store.commit("navTopHide")
            this.$store.commit("navSlideHide")
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
                this.$axios.get("http://localhost:3000/song").then(result=>{
                    this.list = result.data;
                    console.log(this.list)
                })
            },
            goPlaying(){
                this.$router.push('/playing')
            }
        }
    }
</script>

<style scoped>
    @import '../common/font/font.css';
    .top-header{
        height:243px;
        background:url('../assets/img/Group-5.png') no-repeat;
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
        text-align:left;
    }
    .top-font>p{
        color:#9f9f9f;
        font-size:10px;
        text-align:right;
        margin-top:85px;
        padding-right:11px;
    }
    .top-font>img{
        position:relative;
        top:33px;
        left:30px;
        width:125px;
    }
    .top-item{
        display:flex;
        padding:0 28px;
        height:40px;
        margin-top:30px;
    }
    .top-item p{
        margin:0;
    }
    .rank>p:first-child{
        font-family:'PARaDOS';
        font-size:16px;
        color:#fa71cd;
    }
    .top-item:nth-child(n+5)>.rank>p:first-child{
        color:#333;
    }
    .rank>p:nth-child(2){
        font-size:12px;
        color:#9e9e9e;
    }
    .rank>p:nth-child(2)>span{
        color:#f00;
        font-size:10px;
    }
    .song-pic{
        margin-left:10px;
    }
    .song-pic img{
        width:40px;
    }
    .song-desc{
        margin-left:20px;
        width:210px;
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