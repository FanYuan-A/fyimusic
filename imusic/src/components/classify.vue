<template>
    <div class="app">
        <div class="classify_item">
            <div class="cover">华语</div>
            <img src="../assets/img/classify-1.png">
        </div>
        <div class="classify_item">
            <div class="cover">摇滚</div>
            <img src="../assets/img/classify-2.png">
        </div>
        <div class="classify_item">
            <div class="cover">游戏原音</div>
            <img src="../assets/img/classify-3.png">
        </div>
        <div class="classify_item">
            <div class="cover">ACG</div>
            <img src="../assets/img/classify-4.png">
        </div>
        <div class="classify_item">
            <div class="cover">欧美</div>
            <img src="../assets/img/classify-5.png">
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        created(){
            this.$store.commit("navSlideHide");
        },
        destroyed(){
            this.$store.commit("navSlideShow");
        },
        methods:{}
    }
</script>

<style scoped>
    .app{
        padding-top:44px;
    }
    .classify_item{
        height:130px;
        position:relative;
    }
    .classify_item>div{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        color:#fff;
        font-size:35px;
        font-weight:800;
        line-height:130px;
        background:rgba(0,0,0,0.4);
    }
    .classify_item>img{
        height:130px;
    }

</style>