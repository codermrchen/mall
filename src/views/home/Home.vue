<template>
  <div id="home">
    <nav-bar  class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banner="banner"/>
    <RecommendView :recommend="recommend"/>
    <FeatureView/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"
    @tabitem="itemclick"
    ></tab-control>
    <goods-list :goods="showgoods"></goods-list>


  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/home'



export default {
  name: "Home",
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView,
    GoodsList
  },
  data(){
    return{
      banner : [],
      recommend : [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currenttype:'pop'

    }
  },
  created(){
    //1请求多个数据
    this.getHomeMultidata()
    //2请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods("sell")


  },
  methods:{

    /*
    * 事件监听方法*/
    itemclick(index){
      switch (index){
        case 0 :
          this.currenttype = 'pop'
          break
        case 1 :
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
          break

      }
    },

    /*
    * 网络请求方法
    * */

    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page +=1
      })
    }


  },
  computed:{
    showgoods(){
      return this.goods[this.currenttype].list
    }
  }

}
</script>

<style scoped>
.nav-home{
  color:pink;
}
#home{
  padding-top:44px;
}

.tab-control{
  position: sticky;
  top:44px
}

</style>
