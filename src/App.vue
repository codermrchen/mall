<template>
  <div id="app">
    <router-view></router-view>
  <main-tab-bar/>
  </div>
</template>

<script>

import MainTabBar from 'components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
body{
  margin: 0px;
}
</style>
