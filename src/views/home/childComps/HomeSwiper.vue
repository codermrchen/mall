<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banner"  >
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </Swiper>
  </div>

</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>

</style>
