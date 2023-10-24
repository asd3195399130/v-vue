<template>
  <div class="home">
  <router-link to="/home/Yama/YanWangDian" replace="true">阎王殿</router-link>
 &emsp;
  <router-link to="/home/Hell">十大鬼王</router-link>
<div >
<router-view></router-view>
</div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>

 @keyframes blinking {
  0%{opacity: 1;}
  50%{opacity: 0;}
  100%{opacity:1}
 }
 a{
  animation: blinking 1s infinite;
  font-family: "楷体";
  font-size: 30px;
  font-weight: bold;
  color: green;
  text-decoration: none;
 }

</style>