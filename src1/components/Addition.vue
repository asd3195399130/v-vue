<!--  -->
<template>
  <div class>
    <h3>当前的和为{{sum}}</h3>
    <h3>今日天气{{wather}}</h3>
    <h1>我能赚多少{{ bigsum}}元</h1>
    <select name id v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="ADD(num)">+</button>
    <button @click="MINUS(num)">-</button>
    <button @click="jiaOdd(num)">奇数+1</button>
    <button @click="jiaWait(num)">等待1秒+1</button>
    <svg
      t="1692061831302"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10542"
      data-spm-anchor-id="a313x.search_index.0.i1.22073a81ORHIBo"
      width="160"
      height="160"
    >
      <path
        d="M757.28896 936.12032c-4.90496 0-9.80992-1.23904-14.31552-3.72736L517.35552 807.49568 291.26656 932.39296a29.34784 29.34784 0 0 1-31.29344-1.69984 29.34784 29.34784 0 0 1-12.15488-28.928l43.44832-266.7008L106.52672 445.1328a29.44 29.44 0 0 1-6.85056-30.02368 29.42976 29.42976 0 0 1 23.54176-19.82464l253.80864-38.83008 113.3568-241.31584A29.2864 29.2864 0 0 1 517.12 98.12992c11.58144 0 21.82144 6.51264 26.73664 16.9984l112.96768 241.02912 254.19776 39.12704a29.42976 29.42976 0 0 1 23.53152 19.8144 29.45024 29.45024 0 0 1-6.85056 30.03392L743.1168 634.59328l43.29472 267.18208a29.30688 29.30688 0 0 1-12.15488 28.91776 29.46048 29.46048 0 0 1-16.96768 5.4272zM517.12 778.3936c4.90496 0 9.80992 1.2288 14.29504 3.70688l225.61792 124.88704-42.7008-267.27424a29.696 29.696 0 0 1 7.9872-25.38496L906.9056 424.8576l-254.08512-39.7312a29.4912 29.4912 0 0 1-22.272-16.65024L517.5808 127.44704c-0.11264-0.22528-0.14336-0.29696-0.4608-0.29696L403.69152 368.47616a29.46048 29.46048 0 0 1-22.28224 16.66048l-253.7984 38.83008 184.30976 190.3616c6.5024 6.67648 9.50272 16.16896 8.00768 25.38496L276.48 906.43456l226.34496-124.33408a29.58336 29.58336 0 0 1 14.29504-3.70688z"
        p-id="10543"
        fill="#000000"
      />
    </svg>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "AddiTion",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    ...mapActions("Addition", ["jiaOdd", "jiaWait"]),
    ...mapMutations("Addition", ["ADD", "MINUS"])
  },
  created() {},
  mounted() {},
  computed: {
    ...mapState("Addition", ["sum", "wather"]),
    ...mapGetters("Addition", ["bigsum"])
  }
};
</script>
<style lang="sass" scoped>
 /* @import url(); 引入css类 */
 $blue:#ffc90c
*
  margin: 0
  padding: 0
h3
  color: $blue
</style>