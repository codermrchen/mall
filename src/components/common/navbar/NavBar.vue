<template>
  <div class="navbar">
    <div class="left"><slot  name="left"></slot></div>
    <div class="center"><slot  name="center"></slot></div>
    <div class="right" ><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .navbar{
    display: flex;
    height: 44px;
    background-color: pink;
    line-height: 44px;
    box-shadow: 0px 1px 1px rgba(100,100,100,.1);

    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;

  }
  .left,.right{
    width: 60px;


  }
  .center{
    flex: 1;
    text-align: center;
    color: white;

  }
  body{
    margin: 0px;
  }
</style>
