<!--  -->
<template>
<div class="">
<ul>
 <li>鬼王</li>
 <li>日游神</li>
 <li>夜游神</li>
 <li>黑、白无常</li>
 <li>牛头</li>
 <li>马面</li>
 <li>豹尾</li>
 <li>鸟嘴</li>
 <li>鱼鳃</li>
 <li>黄蜂</li>
</ul>
<div class="block">
    <span class="demonstration">设置默认时间</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
  </div>
</div>
</template>

<script>
export default {
    name:"",
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
 ul{
  width: 1200px;
  height: 500px;
  border: 1px solid red;
  margin: auto;
  list-style: none;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  font-family: "正楷";
  line-height: 30px;
 }
 ul li {
text-align: left;
  flex:1
 }
</style>