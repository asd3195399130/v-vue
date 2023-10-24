   <style scoped>
* {
  margin: 0;
  padding: 0;
}

.boss {
  width: 100%;
  z-index: 10;
}
ul {
  width: 100%;
  height: 350px;
  overflow: auto;
}

li {
  width: 55%;
  height: 30px !important;

  border: none;
  text-align: left;
  margin: 10px !important;
  line-height: 30px;
  padding: 0 5%;
}
.button {
  margin: 20px;
}
svg {
  width: 16px;
  height: 16px;
  float: left;
  margin-top: 6px;
}
li:hover {
  background: #b5b6b8 !important;
}
.li {
  border-left: 4px solid #42b983 !important;
  background: #b5b6b8 !important;
}
</style>
  <template>
  <div class="boss">
    <ul>
      <li
        v-for="(item, index) in arr"
        :key="item.id"
        :style="
          key == item.id
            ? 'background: #b5b6b8 !important; border-radius: 7px!important;  border-left: 5px solid #409eff;'
            : ''
        "
        @click="btn(item.id)"
      >
        <svg
          data-v-a22cce3a=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M2.75 18h12.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.494L2.75 18h12.5h-12.5zm0-6.5h18.5a.75.75 0 0 1 .102 1.493L21.25 13H2.75a.75.75 0 0 1-.102-1.493l.102-.007h18.5h-18.5zm0-6.497h15.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493l.102-.007h15.5h-15.5z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <span v-if="count == index ? false : true" @dblclick="int(index)">
          {{ item.text }}</span
        >
        <input
          style="width: 80px"
          type="text"
          v-else
          v-model="html"
          @blur="handleBlur(index)"
        />
        <span style="float: right; margin-right: 10px">
          <img src="../assets/删除.png" alt=""
        /></span>
      </li>
    </ul>
    <div @click="addList" class="button">
      <div><b>+</b> <span>新建列表</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LeftS",
  data() {
    return {
      state: true,
      count: null,
      key: null,
      arr: [],
      html: "",
    };
  },
  methods: {
    handleBlur(index) {
      this.arr[index].text = this.html;
      this.count = null;
    },
    //方法
    int(value) {
      this.count = value;
      this.state = !this.state;
      this.html = this.arr[value].text;
    },
    addList() {
      let arrList = {
        text: "待办事务",
        id: this.arr.length + 1,
        state: false,
        count: null,
      };
      this.arr.push(arrList);
      console.log(11111111111);
    },
    btn(item) {
      this.key = item;
    },
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