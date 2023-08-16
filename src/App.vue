<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <Hellow />
    <hr />
    <Addition />
    <hr />
    <router-link to="/">Home</router-link>|
    <router-link to="/about/vue">About</router-link>|
    <router-link to="/csdn">Csdn</router-link>
    <hr />
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue"
import Hellow from "./components/Hellow";
import Addition from "./components/Addition";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Hellow,
    Addition
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
