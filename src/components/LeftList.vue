   <style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 100%;

  z-index: 222;
}
.noe {
  width: 20%;

  padding-top: 30px;
  padding-left: 10px;
  border-radius: 10px;
  border-right: 2px solid #ccc;
  text-align: left;
  float: left;
}
.noe1 {
  width: 20%;
  height: 90vh;
  padding-top: 30px;
  padding-left: 10px;
  border-radius: 10px;
  border-right: 2px solid #ccc;
  text-align: left;
  float: left;
}
svg {
  width: 20px;
  height: 20px;
  float: left;
  margin-top: 5px;
}
.nav {
  width: 80%;
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-left: 5px solid #409eff;
  border-bottom: 2px solid white;

  color: #303133;
}
ul {
  width: 100%;
}
li {
  width: 80%;
  height: 30px !important;
  line-height: 30px !important;
  border: none;
  text-align: left;
  margin: 10px !important;
}
li:hover {
  background: #b5b6b8 !important;
}
.li:hover {
  border-left: 4px solid #42b983;
  background: #b5b6b8 !important;
}
.right {
  width: 70%;
  float: left;
}
</style>
  <template>
  <div class="box">
    <div :class="tmp ? 'noe' : 'noe1'">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
        style="width: 70%"
      >
      </el-input>
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item
            index="1"
            :style="
              key == 1
                ? 'background: #b5b6b8 !important; border-radius: 7px!important;'
                : ''
            "
            @click="textBtn('所有')"
          >
            <svg
              data-v-a22cce3a=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75v6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5v-6.75zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5v6.75zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75V4.5z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            所有
            <span style="float: right">1</span>
          </el-menu-item>
          <el-menu-item
            index="2"
            :style="
              key == 2
                ? 'background: #b5b6b8 !important; border-radius: 7px!important;'
                : ''
            "
            @click="textBtn('今天')"
          >
            <svg
              data-v-a22cce3a=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4v-1.5h-4a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75h-4V21h4A3.25 3.25 0 0 0 21 17.75V6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75zm7 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0zm.502 6.56a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v3.83a.75.75 0 1 0 1.5 0v-3.83l1.002.89z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            今天
            <span style="float: right">1</span>
          </el-menu-item>
          <el-menu-item
            index="3"
            :style="
              key == 3
                ? 'background: #b5b6b8 !important;  border-radius: 7px!important;'
                : ''
            "
            @click="textBtn('最近七天')"
          >
            <svg
              data-v-a22cce3a=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            最近七天
            <span style="float: right">1</span>
          </el-menu-item>
        </el-menu>
      </div>
      <br />
      <div style="width: 100%"><Lefts /></div>
    </div>
  </div>
</template>
<script>
import Lefts from "./Lefts.vue";

export default {
  name: "LeftList",
  data() {
    return {
      activeIndex: "",
      activeIndex2: "",
      tabPosition: "right",
      input2: "",
      key: null, //导航下表
      tmp: true,
    };
  },

  components: {
    Lefts,
  },
  methods: {
    //方法
    textBtn(text) {
      this.$bus.$emit("leftListText", text);
    },
    handleSelect(key) {
      this.key = key;
    },
    data(data) {
      this.tmp = data;

    },
  },
  mounted() {
    this.$bus.$on("Data", this.data);
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