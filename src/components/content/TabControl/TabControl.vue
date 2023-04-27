<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active:index === correntindex}"
         @click="itemclick(index)">
      <span >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      correntindex:0
    }
  },
  methods:{
    itemclick(index){
      this.correntindex = index;
      this.$emit("tabitem",index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  z-index: 1;

}
.tab-control-item{
  flex: 1;
}
.active{
  color: pink;
}
.active span{
  border-bottom: 3px solid pink;
}

.tab-control-item span{
  padding:5px;
}
</style>
