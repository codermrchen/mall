<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }

}
</script>

<style scoped>
.recommend{
  display: flex;
  text-align: center;
  padding:15px 0px 30px ;
  border-bottom: 8px solid #eee;
}
.recommend-item{
 flex: 1;
  font-size: 12px;

}
.recommend-item img{
  width: 65px;
  height: 65px;
  padding-bottom: 5px;
}
</style>
