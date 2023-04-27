<template>

<div class="tabbar-item" @click="itemclick">
  <div v-if="!isActive"><slot name="item-icon"></slot></div>
  <div v-else><slot name="item-icon-active"></slot></div>
  <div :style="ActiveColor "><slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return{
      // isActive : true
    }
  },
  props : {
    path : String,
    activeColor : {
      type : String,
      default : "blue"
    }
  },
  methods : {
    itemclick(){
      this.$router.replace(this.path).catch(() => {})
    }
  },
  computed : {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    },
    ActiveColor(){
      return this.isActive ? {color : this.activeColor} : {}
    }

  }
}
</script>

<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
  height: 49px;

}

.tabbar-item img{
  width: 24px;
  height: 24px;
}

.active{
  color: red;
}
</style>
