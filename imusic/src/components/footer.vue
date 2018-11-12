<template>
    <footer class="footer">
        <img src="../assets/img/footer-img.png" class="album" @click="jumpPlaying">
        <div class="song_name">
            <p>Samsara</p>
            <p>Tungevaag & Raaban</p>
        </div>
        <img :src="playStateUrl" class="btn_ctrl" @click="playCtrl">
        <img src="../assets/img/footer-next.png" class="btn_ctrl">
        <div class="bg"></div>
    </footer>
</template>

<script>
    import playIcon from '../assets/img/footer-play.png';
    import stopIcon from '../assets/img/footer-stop.png';
    export default {
        data(){
            return {
                navState:true,
                playStateUrl:''
            }
        },
        created(){
            if(this.$store.state.playState == true){
                this.playStateUrl = stopIcon
            }else{
                this.playStateUrl = playIcon
            }
        },
        watch:{
            
        },
        methods:{
            jumpPlaying(){
                this.$router.push('/playing')
            },
            playCtrl(){
                var state = this.$store.state.playState;
                if(state == false){
                    this.$store.commit("songPlay");
                    this.playStateUrl = stopIcon
                }else{
                    this.$store.commit("songStop");
                    this.playStateUrl = playIcon
                }
            }
        }
    }
</script>

<style scoped>
    .footer{
        width:100%;
        height:60px;
        display:flex;
        align-items:center;
        position:fixed;
        left:0;
        bottom:0;
        z-index:999;
    }
    .album{
        width:39px;
        height:39px;
        margin-left:10px;
        margin-right:15px;
    }
    .btn_ctrl{
        width:41px;
        height:41px;
    }
    .bg{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        filter:blur(1px);
        background:#ddd;
        opacity:0.9;
        z-index:-1;
    }
    .song_name{
        text-align:left;
        margin-right:50px;
    }
    .song_name>p:first-child{
        color:#333;
        font-size:12px;
        margin-bottom:0px;
    }
    .song_name>p:nth-child(2){
        font-size:10px;
        color:#999;
        margin-bottom:0px;
    }
    .btn_ctrl{
        margin:0 9px;
    }
</style>