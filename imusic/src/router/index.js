import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import navSlide from '@/components/navSlide';
import recommend from '@/components/recommend';
import classify from '@/components/classify';
import myself from '@/components/myself';
import playing from '@/components/playing';
import topEveryDay from '@/components/topEveryDay';
import songList from '@/components/songList';

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/recommend'},
    {path: '/recommend',meta:{index:2},component: recommend},
    {path: '/classify',meta:{index:3},component: classify},
    {path: '/myself',meta:{index:1},component: myself},
    {path:'/playing',meta:{index:4},component:playing},
    {path:'/top',meta:{index:1},component:topEveryDay},
    {path:'/songlist',meta:{index:1},component:songList}
  ]
})
