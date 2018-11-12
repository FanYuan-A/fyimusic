<template>
    <div class="app">
        <div class="progress-group" >
        <div class="c-window" :style="{width:this.$store.state.songLength+'px'}">
            <canvas id="c2" width="312" height="30" ref="myCtx">您的浏览器版本过低</canvas>
        </div>
            <canvas id="c3" width="312" height="30" ref="myCtx3">您的浏览器版本过低</canvas>
        </div>
        <div class="playing-time">
            <p>2:35</p>
            <p>5:05</p>
        </div>
        <div class="song-info">
            <p>Samsara</p>
            <p>Tungevaag & Raaban</p>
        </div>
        <div class="song-ctrl">
            <div class="play-module">
                <img src="../assets/img/playing/play-loop.jpg" alt="">
            </div>
            <div class="ctrl-group">
                <div class="play-prev">
                    <img src="../assets/img/playing/play-prev.jpg" class="btn-104">
                </div>
                <div class="play-ctrl">
                    <img :src="playStateUrl" class="btn-104" @click="playCtrl">
                </div>
                <div class="play-next">
                    <img src="../assets/img/playing/play-next.jpg" class="btn-104">
                </div>
            </div>
            <div class="play-menu">
                <img src="../assets/img/playing/play-list.jpg" alt="">
            </div>
        </div>
    </div>    
</template>


<script>
    import playIcon from '../assets/img/playing/play-playing.jpg';
    import stopIcon from '../assets/img/playing/play-stop.jpg';
    export default {
        data(){
            return {
                list:[],
                playStateUrl:'',
                songTime:this.$store.state.songLength
            }
        },
        created(){
            for(var i=0;i<45;i++){
                var ranCount = this.randomNum(8,28)
                this.list.push(ranCount)
            }
            
            if(this.$store.state.playState == true){
                this.playStateUrl = stopIcon
            }else{
                this.playStateUrl = playIcon
            }
        },
        watch:{
            
        },
        computed: {
            listenstage() {
                return this.$store.state.songLength;
            }
        },
        updated(){
            if(this.$store.state.songLength == 312){
                this.playStateUrl = playIcon;
                this.$store.commit("songStop");
            }
        },
        mounted(){
            var ctx = this.$refs.myCtx.getContext("2d");
            var ctx3 = this.$refs.myCtx3.getContext("2d");
            this.list.forEach((idx,item)=>{
                var w=4;
                var h=idx;
                var y=30-h;
                var x=item*7;
                var linearGradient1 = ctx.createLinearGradient(0,0,500,0);
                linearGradient1.addColorStop(0  , '#fa71cd');
                linearGradient1.addColorStop(1  , '#c471f5');
                ctx.fillStyle=linearGradient1;
                ctx.fillRect(x,y,w,h);
                ctx3.fillStyle="#d8d8d8";
                ctx3.fillRect(x,y,w,h);
            });
        },
        methods:{
            randomNum(minNum,maxNum){ 
                switch(arguments.length){ 
                    case 1: 
                        return parseInt(Math.random()*minNum+1,10); 
                    break; 
                    case 2: 
                        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                    break; 
                        default: 
                            return 0; 
                        break; 
                } 
            },
            playCtrl(){
                var state = this.$store.state.playState;
                if(!state){
                    this.$store.commit("songPlay");
                    this.playStateUrl = stopIcon
                }else if(state){
                    this.$store.commit("songStop");
                    this.playStateUrl = playIcon
                }
            }
        }
    }
</script>


<style scoped>
    .app{
        margin-top:20px;
    }
    .progress-group{
        position:relative;
        height:30px;
    }
    .c-window,#c3{
        position:absolute;
        top:0px;
        left:8.5%;
    }
    .playing-time{
        display:flex;
        justify-content:space-between;
        padding:0 30px;
        margin-top:5px;
    }
    .song-info>p:first-child{
        font-size:18px;
        color:#fa71cd;
    }
    .song-info>p:nth-child(2){
        font-size:12px;
        color:#d8d8d8;
    }
    .song-ctrl{
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0 10px;
    }
    .btn-104{
        width:52px;
    }
    .play-module>img, .play-menu>img{
        width:32px;
    }
    .song-ctrl{
        margin-top:20px;
    }
    .ctrl-group{
        display:flex;
        justify-content:space-between;
        width:55%;
    }
    .c-window{
        width:0px;
        overflow:hidden;
        z-index:10;
    }
</style>