<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.left {
  position: relative;
  width: 70%;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  margin: auto;
  border-radius: 10px;
}
p {
  font-size: 14px;
  font-weight: bold;
  color: #6d5ea3;
  margin-bottom: 10px;
}
.box {
  width: 100px;
  height: 50px;
  background: #6d5ea3;
  border-radius: 10px;
  text-align: center;
  margin: 20% auto;
}
</style>
<template>
  <div class="home">
    <div>
      <div class="box" @click="addBtn">
        <div>
          <img
            src="https://files.codelife.cc/icons/todo.svg"
            alt=""
            id="loge"
          />
        </div>
        <p>待办事务项</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    addBtn() {
      this.$router.push({ name: "HelloWorld" });
    },
  },
};
</script>
