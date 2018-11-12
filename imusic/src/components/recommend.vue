<template>
    <div class="app">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../assets/img/Bitmap@2x.png" />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../assets/img/Bitmap@2x.png" />
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a >
                    <img src="../assets/img/icon-1.jpg" />
                    <div class="mui-media-body">随机推荐</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/top">
                    <img src="../assets/img/icon-2.jpg" />
                    <div class="mui-media-body">每日排行榜</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a >
                    <img src="../assets/img/icon-3.jpg" />
                    <div class="mui-media-body">电台</div>
                </a>
            </li>
        </ul> 
        <div class="throughLine"></div>
        <div class="recommend_list">
            <div class="recommend_title">
                <div></div>
                <p>推荐歌单</p>
            </div>
            <div class="recommend_detail">
                <div v-for="item in songList" @click="goSongList">
                    <img :src="item.img" alt="">
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
        <div class="recommend_list">
            <div class="recommend_title">
                <div></div>
                <p>推荐MV</p>
            </div>
            <div class="recommend_detail">
                <div v-for="item in recMV" ::key="item.id">
                    <img :src="item.img" alt="">
                    <p class="mv_name">{{item.title}}</p>
                    <p class="singer">{{item.singer}}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import navSlide from './navSlide.vue'
    export default {
        data(){
            return {
                songList:[],
                recMV:[]
            }
        },
        created(){
           this.getRecList(),
           this.getRecMV()
        },
        mounted(){

        },
        methods:{
            jumpTop(){
                this.$router.push('/top')
            },
            getRecList(){
                this.$axios.get("http://localhost:3000/index/reclist").then(result=>{
                    this.songList = result.data;
                })
            },
            getRecMV(){
                this.$axios.get("http://localhost:3000/index/recmv").then(result=>{
                    this.recMV = result.data;
                })
            },
            goSongList(){
                this.$router.push('/songlist')
            }
        },
        components:{
            "nav-slide":navSlide
        }
    }
</script>

<style scoped>
.app{
    padding-top:44px;
}
.app .mint-swipe{
   height:150px;
   background:#fff;
 }
.app .mint-swipe img{
   width:100%;
   height:100%;
 }
 .mui-grid-view{
     padding:0 15px;
     margin-top:15px;
     margin-bottom:15px;
 }
 .mui-grid-view,.mui-grid-view .mui-table-view-cell{
     border:none;
     background:none;
 }
 .mui-grid-view .mui-table-view-cell img{
     width:66px;
 }
 .mui-grid-view .mui-table-view-cell .mui-media-body{
     font-size:12px;
 }
 .throughLine{
     width:100%;
     height:1px;
     background:#ededed;
 }

 .recommend_title{
     display:flex;
     justify-content:start;
     margin:40px 0 0 10px;
 }
 .recommend_title>div:first-child{
     width:9px;
     height:27px;
     border-radius:10px;
     background:#fa71cd;
     margin-right:10px;
 }
 .recommend_title>p{
     font-size:17px;
     color:#333;
     line-height:27px;
 }
 .recommend_detail{
     display:flex;
     flex-wrap:wrap;
     justify-content:space-between;
 }
 .recommend_detail>div{
     width:185px;
 }
 .recommend_detail>div>img{
     width:100%;
 }
 .recommend_detail>div>p{
     color:#333;
     font-size:14px;
     padding:0 10px;
     text-align:left;
 }
 .mv_name{
     margin:0
 }
 .singer{
     margin:0;
     color:#999 !important;
     font-size:12px !important;
 }
</style>