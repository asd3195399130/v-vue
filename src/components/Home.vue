<!--  -->
<template>
  <div class>
    <h3>{{ msg }}晴天</h3>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "今天天气："
    };
  },
  created() {},
  mounted() {
    console.log(this);
  }
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>