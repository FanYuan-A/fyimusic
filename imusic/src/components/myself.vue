<template>
    <div class="app">
        <div class="bigIcon">
            <div>
                <img src="../assets/img/myself_03.png" alt="">
                <p>全部音乐</p>
            </div>
            <div>
                <img src="../assets/img/myself_05.png" alt="">
                <p>下载列表</p>
            </div>
            <div>
                <img src="../assets/img/myself_07.png" alt="">
                <p>我收藏的</p>
            </div>
            <div>
                <img src="../assets/img/myself_09.jpg" alt="">
                <p>最近播放</p>
            </div>
        </div>
        <div class="myList">
            <div class="myList_title">
                <div></div>
                <p>我的歌单</p>
            </div>
            <div class="myList_detail">
                <div>
                    <img src="../assets/img/songlist1.png" alt="">
                </div>
                <div>
                    <img src="../assets/img/songlist2.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        created(){
            
        },
        methods:{}
    }
</script>

<style scoped>
    .app{
        padding-top:44px;
    }
    .bigIcon{
        padding:0 26px;
        display:flex;
        justify-content:space-between;
        margin-top:35px;
    }
    .bigIcon>div{
        width:66px;
    }
    .bigIcon>div>img{
        width:100%;
    }
    .bigIcon>div>p{
        font-size:11px;
        color:#333;
    }
    .myList_title{
     display:flex;
     justify-content:start;
     margin:40px 0 0 10px;
    }
    .myList_title>div:first-child{
        width:9px;
        height:27px;
        border-radius:10px;
        background:#fa71cd;
        margin-right:10px;
    }
    .myList_title>p{
        font-size:17px;
        color:#333;
        line-height:27px;
    }
    .myList_detail>div{
        width:100%;
        margin-top:20px;
    }
    .myList_detail>div>img{
        width:100%;
    }
</style>