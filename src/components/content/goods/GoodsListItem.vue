<template>
  <div class="goods-item">
  <img :src="gooditem.show.img" alt="">
  <div class="goods-info">
    <p>{{gooditem.title}}</p>
    <span class="price">{{gooditem.price}}</span>
    <span class="collect">{{gooditem.cfav}}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    gooditem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 44px;
  position: relative;

  width: 48%;
}

.goods-item img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: pink;
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>
