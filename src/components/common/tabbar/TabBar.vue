<template>
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: #f6f6f6;

  box-shadow: 0px -3px 10px rgba(100,100,100,0.2);

}

</style>
