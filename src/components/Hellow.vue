<!--  -->
<template>
  <div class>
    <h3>{{mesg}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelLow",
  data() {
    return {
      mesg: "你好"
    };
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
* {
  margin: 0;
  padding: 0;
}
</style>