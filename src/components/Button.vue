   <style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
  <template>
  <div>
    <!-- <el-progress :percentage="50" status="warning" color="red"></el-progress> -->
  </div>
</template>
<script>
export default {
  name: "buttonS",
  data() {
    return {};
  },
  methods: {
    //方法
  },
  watch: {
    //监听
    op() {},
  },
  computed: {
    //get有什么作用？当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
    //get什么时候调用？1.初次读取fullName时。2.所依赖的数据发生变化时。
    // fullName: {
    //     get() {
    // }
    // }
  },
  props: {
    msg: String,
  },
};
</script>
<!-- Add 'scoped' attribute to limit CSS to this component only -->