<!-- 
 -->
<template lang="html">
  <div class>
    <img :src="url" alt />
    我的路由使用:{{this.$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      url:
        "https://img1.baidu.com/it/u=1550693093,1709347502&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1692205200&t=ce1678c0aa19f1b3a3f66304493c0e91"
    };
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>