<!--  -->
<template>
<div class="">
   <ul>
    <li>id:{{id}}</li>
    <li>name:{{name}}</li>
    <li>run:{{run}}</li>
   </ul>
</div>
</template>

<script>
export default {
    name:"YanWangDian",
    data() {
        return {

        }
    },
    props:["id","name","run"],
    created() {

    },
    computed:{
    //    userInfo(){
        // return this.$route.query 
    
    // }
    },
    mounted() {
      console.log(this.$router)
    }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
ul{
    list-style: none;
    line-height: 50px;
}
</style>