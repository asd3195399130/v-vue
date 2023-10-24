<!--  -->
<template>
  <div class>
    <h1>今天的天气是：{{wather}}</h1>
    <h3>当前的和为{{sum}}</h3>
    <h3>当前的10倍{{ bigsum}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="ADD(num)">+</button>
    <button @click="MINUS(num)">-</button>
    <button @click="jiaOdd(num)">当和为奇数时+1</button>
    <button @click="jiaWait(num)">等一秒+1</button>
    <!-- <button @click="ride">10倍</button> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "HelLow",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    ...mapActions(["jiaOdd", "jiaWait"]),
    ...mapMutations(["ADD", "MINUS"])
    // add() {
    //   this.$store.commit("ADD", this.num);
    // },
    // minus() {
    //   // this.sum -= this.num;
    //   this.$store.commit("MINUS", this.num);
    // }
    // addodd() {
    //   console.log(this.$store);
    //   this.$store.dispatch("jiaOdd", this.num);
    // },
    // hold() {
    //   this.$store.dispatch("jiaWait", this.num);
    // },
    // ride() {}
  },
  created() {},
  computed: {
    ...mapState(["sum", "wather"]),
    ...mapGetters(["bigsum"]),

    bigsum() {
      return this.$store.getters.bigsum;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// button {
//   width: 150px;
//   height: 100px;
// }
button {
  margin-left: 5px;
}
</style>