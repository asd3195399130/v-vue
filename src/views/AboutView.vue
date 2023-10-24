   <style scoped>
* {
  margin: 0;
  padding: 0;
}
#box {
  float: right;
  width: 78%;

  z-index: 200;
}
h2 {
  margin: 10px;
}
.top {
  height: 50px;
  display: flex;
}
.off-btn {
  width: 25px;
  height: 25px;

  /* margin-left: auto; */
  margin: 10px;
  text-align: center;
  border-radius: 50%;
  line-height: 25px;
}
.off-btn:hover {
  width: 25px;
  height: 25px;
  background: #ccc;
  border-radius: 5px;
}
h3 {
  width: 30px;
  height: 30px;
  line-height: 20px;

  text-align: center;
  margin: 20px;
  margin-left: auto;
}
h3:hover {
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 5px;
}
svg {
  background: #ccc;
}
h4 {
  color: red;
}
</style>
  <template>
  <div id="box">
    <div class="top">
      <h2>{{ text }}</h2>
      <h3>...</h3>
      <div class="off-btn" @click="DataBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          class="d-middle"
        >
          <path
            id="形状"
            fill-rule="evenodd"
            opacity="1"
            d="M2.3,4.5v4.2h4.2c0.55,0 1,0.45 1,1v0.3c0,0.55 -0.45,1 -1,1h-5c-0.83,0 -1.5,-0.67 -1.5,-1.5v-5c0,-0.55 0.45,-1 1,-1h0.3c0.55,0 1,0.45 1,1zM9.5,0c0.83,0 1.5,0.67 1.5,1.5v5c0,0.55 -0.45,1 -1,1h-0.3c-0.55,0 -1,-0.45 -1,-1v-4.2h-4.2c-0.55,0 -1,-0.45 -1,-1v-0.3c0,-0.55 0.45,-1 1,-1z"
            style="fill: rgb(255, 255, 255)"
          ></path>
        </svg>
      </div>
      <div class="off-btn" @click="off">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          class="d-middle"
        >
          <path
            id="形状结合"
            fill-rule="evenodd"
            opacity="1"
            d="M8.55 10.58L5.5 7.53L2.45 10.58C1.89 11.14 0.98 11.14 0.42 10.58C-0.14 10.02 -0.14 9.11 0.42 8.55L3.47 5.5L0.42 2.45C-0.14 1.89 -0.14 0.98 0.42 0.42C0.98 -0.14 1.89 -0.14 2.45 0.42L5.5 3.47L8.55 0.42C9.11 -0.14 10.02 -0.14 10.58 0.42C11.14 0.98 11.14 1.89 10.58 2.45L7.53 5.5L10.58 8.55C11.14 9.11 11.14 10.02 10.58 10.58C10.02 11.14 9.11 11.14 8.55 10.58Z"
            style="fill: rgb(255, 255, 255)"
          ></path>
        </svg>
      </div>
    </div>
    <List />
  </div>
</template>
<script>
import List from "../components/List";
export default {
  name: "AboutView",
  components: {
    List,
  },
  data() {
    return {
      text: "所有",
      tmp: true,
    };
  },
  created() {
    this.$bus.$on("leftListText", this.textDome);
  },
  methods: {
    textDome(value) {
      this.text = value;
    },
    //方法
    off() {
      this.$router.push("/");
    },
    DataBtn() {
      this.tmp = !this.tmp;
      this.$bus.$emit("Data", this.tmp);
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
