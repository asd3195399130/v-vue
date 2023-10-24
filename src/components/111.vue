<template>
  <div class="home">
    <div class="boxx">
      <div class="box1" @click="fun">
      <svg t="1692263286903" class="icon" viewBox="0 0 1489 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38784" width="45" height="45"><path d="M602.763636 754.315636l727.784728-727.04a93.090909 93.090909 0 0 1 131.630545 131.630546l-789.876364 789.224727a92.625455 92.625455 0 0 1-49.803636 25.879273 93.090909 93.090909 0 0 1-86.202182-25.041455L87.784727 515.165091A93.090909 93.090909 0 1 1 219.415273 383.534545l383.348363 370.781091z" fill="#ffffff" p-id="38785"></path></svg>
      </div>
      <p>待办事项</p>
    </div>
    <div v-if="isVisible" :class="{ 'box': true, 'fullscreen': isFullscreen }" :style="{ transition: `${transitionDuration}ms` }">
      <div class="box_left">
        <div class="box_shangce">
          <input type="text" placeholder="search">
          <svg t="1692278928846" class="icon" viewBox="0 0 1820 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8113" width="40" height="40"><path d="M1256.106667 813.226667l-155.970371-155.970371c42.761481-52.811852 68.361481-120.035556 68.361482-193.327407 0-169.813333-137.671111-307.484444-307.484445-307.484445S553.623704 294.115556 553.623704 463.928889s137.671111 307.484444 307.484444 307.484444c73.197037 0 140.515556-25.6 193.327408-68.361481L1210.311111 859.022222c6.068148 6.068148 14.317037 9.481481 22.85037 9.481482 8.628148 0 16.782222-3.413333 22.850371-9.481482 6.068148-6.068148 9.481481-14.317037 9.481481-22.85037 0.094815-8.628148-3.318519-16.877037-9.386666-22.945185zM908.420741 699.828148c-121.647407 24.557037-242.157037-47.122963-278.755556-165.641481-36.598519-118.613333 22.565926-245.665185 136.912593-293.925926 29.866667-12.61037 62.008889-19.152593 94.435555-19.057778 124.112593 0.18963 227.934815 94.435556 240.165926 217.884444 12.231111 123.543704-71.111111 236.278519-192.758518 260.740741z" fill="#515151" p-id="8114"></path></svg>
          <ul>
            <router-link to="/allSon">
              <li :class="{ active: activeIndex === 0 }" @click="handleClick(0)">
                <svg data-v-a22cce3a="" width="27" height="27" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v12.5A2.75 2.75 0 0 1 18.25 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75zm9.75 13.75h5.5c.69 0 1.25-.56 1.25-1.25v-5.5h-6.75v6.75zm-1.5-6.75H4.5v5.5c0 .69.56 1.25 1.25 1.25h5.5v-6.75zm1.5-1.5h6.75v-5.5c0-.69-.56-1.25-1.25-1.25h-5.5v6.75zm-1.5-6.75h-5.5c-.69 0-1.25.56-1.25 1.25v5.5h6.75V4.5z" fill="#dbdbdb"></path></g></svg>
                <p>所有</p>
                <span class="quanbu">0</span>  
              </li>
            </router-link>
            <router-link to="/todaySon">
              <li :class="{ active: activeIndex === 1 }" @click="handleClick(1)">
                <svg data-v-a22cce3a=""  width="27" height="27" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" ><g fill="none"><path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4v-1.5h-4a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75h-4V21h4A3.25 3.25 0 0 0 21 17.75V6.25zM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75zm7 7.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0zm.502 6.56a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v3.83a.75.75 0 1 0 1.5 0v-3.83l1.002.89z" fill="#dbdbdb"></path></g></svg>
                <p>今天</p>
                <span class="jintian">0</span>
              </li>
            </router-link>  
            <router-link to="/SevenDays">
              <li :class="{ active: activeIndex === 2 }" @click="handleClick(2)">
                <svg data-v-a22cce3a="" width="27" height="27" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM7.75 7a.75.75 0 0 1 .743.648l.007.102v8.5a.75.75 0 0 1-1.493.102L7 16.25v-8.5A.75.75 0 0 1 7.75 7z" fill="#dbdbdb"></path></g></svg>
                <p>最近7天</p>
                <span class="qitian">0</span>
              </li>
            </router-link>  
              
          </ul>
        </div>
        <div class="box_xiace">
          
        </div>
      </div>
          
      <div class="box_right">
          <div class="right_top">
            <svg t="1692261604034" @click="hide" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="26487" width="25" height="25">
        <path
          d="M896.8 282.5l-55.2 32.3c9.2 15.3 17.4 31.4 24.4 48 20 47.3 30.2 97.6 30.2 149.4S886 614.4 865.9 661.7c-19.3 45.7-47 86.8-82.3 122.1s-76.4 63-122.1 82.3c-47.3 20-97.6 30.1-149.4 30.1s-102.2-10.1-149.4-30.1c-4.8-2-9.6-4.2-14.3-6.4-40-18.9-76.2-44.4-107.8-75.9-25.4-25.4-47-53.9-64.2-85-6.7-12-12.7-24.4-18.1-37.1-20-47.3-30.2-97.6-30.2-149.5s10.1-102.1 30.2-149.4c19.3-45.7 47-86.8 82.3-122.1s76.4-63 122.1-82.3c47.3-20 97.6-30.1 149.4-30.1s102.2 10.1 149.4 30.1c2.9 1.2 5.8 2.5 8.7 3.8l27.1-58c-56.5-25.7-119.2-40-185.2-40-247.4 0-448 200.6-448 448 0 79.5 20.7 154.1 57 218.9 45.5 81.1 115.6 146.7 200.1 186.5 57.9 27.3 122.6 42.6 190.8 42.6 247.4 0 448-200.6 448-448 0.1-84-23-162.5-63.2-229.7z"
          p-id="26488" fill="#bfbfbf"></path>
        <path d="M790.1 201.9m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="26489" fill="#bfbfbf"></path>
        <path
          d="M670.5 353.8c-12.5-12.5-32.8-12.5-45.3 0L512.1 467 399 353.8c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l113.1 113.1-113.1 113.2c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l113.1-113.1 113.1 113.1c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L557.4 512.2l113.1-113.1c12.5-12.5 12.5-32.8 0-45.3z"
          p-id="26490" fill="#bfbfbf"></path>
      </svg>
      <svg t="1692261960751" @click="size" class="icon1" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="35812" width="22" height="22">
        <path d="M704 64h256v64h-256z" p-id="35813" fill="#bfbfbf"></path>
        <path d="M896 64h64v256h-64zM66.688 64h64v256h-64z" p-id="35814" fill="#bfbfbf"></path>
        <path d="M66.688 64h256v64h-256zM66.688 894.976h256v64h-256z" p-id="35815" fill="#bfbfbf"></path>
        <path d="M66.688 702.976h64v256h-64zM896 702.976h64v256h-64z" p-id="35816" fill="#bfbfbf"></path>
        <path d="M704 894.976h256v64h-256z" p-id="35817" fill="#bfbfbf"></path>
      </svg>
          <span class="dingbubiaoqian">所有</span>
          </div>
          <div class="right_middle">
            <router-view></router-view>
          </div>
          <div class="right_bottom">
              <svg t="1692277152604" class="icon3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4942" width="32" height="32"><path d="M898 476.5H547v-351c0-19.3-15.7-35-35-35s-35 15.7-35 35v351H126c-19.3 0-35 15.7-35 35s15.7 35 35 35h351v351c0 19.3 15.7 35 35 35s35-15.7 35-35v-351h351c19.3 0 35-15.7 35-35s-15.7-35-35-35z" p-id="4943" fill="#8a8a8a"></path></svg>
              <input type="text" placeholder="添加任务">
          </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      isFullscreen: false,
      transitionDuration: 200, // 过渡时间，单位为毫秒
      isVisible: false,
      activeIndex: null
    };
  },
  methods: {
    size() {
      this.isFullscreen = !this.isFullscreen;
    },
    hide() {
      this.isVisible = !this.isVisible;
    },
    fun(){
      this.isVisible=true
    },
    handleClick(index) {
      this.activeIndex = index;
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.home {
  position: relative;
}
.boxx{
  position: absolute;
  top: 30vh;
  left: 45%;
  cursor: pointer;
}
.boxx p{
  margin-top: 10px;
  margin-left: 50px;
  color: #258bea;
  caret-color: transparent;
}
.box1{
  width: 170px;
  height: 65px;
  border-radius: 16px;
  background-color: #1381e8
}
.box1:hover{
  background-color: #258bea;
  box-shadow: 1px 1.5px 2px rgba(17, 97, 210, 0.4);
}
.box1 svg{
  margin-right:60px;
  line-height:60px;
}
.box {
  position: absolute;
  z-index: 999;
  top: 10vh;
  left: 10%;
  width: 80%;
  height: 78vh;
  background-color: rgb(47, 47, 47);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  display: flex;
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
}

.icon {
  float: right;
  margin: 10px 10px 10px 0px;
  cursor: pointer;
}

.icon1 {
  float: right;
  margin: 12px 13px 13px 13px;
  cursor: pointer;
}
.box_left{
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px 0px 0px 10px;
}
.box_shangce{
  flex:1.2;
  border-bottom:1px solid rgb(255, 255, 255);
}
.box_xiace{
  flex:3;
}
.box_left input{
  position: relative;
  top: 10px;
  left: 23px;
  width: 80%;
  height: 30px;
  font-size: 18px;
  margin-top: 30px;
  padding-left:10px;
  border-radius: 6px;
  border: none;
  
}
.box_left input:focus{
    outline: none;
}
.box_left svg{
  position: absolute;
  top: 25px;
  left: 15.5%;
}
.box_right{
  display: flex;
  flex-direction: column;
  flex: 4;
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(27, 26, 26);
}
.right_top{
    flex: 0.8;
    border-radius: 0px 10px 0px 0px;
    caret-color: transparent;
    background-color: rgb(71, 71, 71);
}
.right_top span{
  position: relative;
  top: 8px;
  font-size: 25px;
  font-weight: 600;
}
.right_middle{
    flex: 10;
    
}
.right_bottom{
    flex: 1;
    width: 100%;
    margin-bottom: 15px;
    border-radius: 5px;
    background-color: rgba(133, 184, 255, 0.4);
}
.right_bottom input{
    position: relative;
    left: 5vh;
    width: 80%;
    height: 100%;
    border-radius: 6px;
    font-size:21px;
    border: none;
    padding-left: 40px;
    box-shadow: 0px -3px 0px 0px rgba(255, 255, 255, 0.5);
}
.right_bottom input:focus{
    outline: none;
}
.icon3{
    position: relative;
    width: 30px;
    height: 30px;
    top: 7px;
    left:80px;
    z-index:999;
}
.dingbubiaoqian{
    margin: 10px;
    color: white;
}
.box_shangce li{
  position: relative;
  top: 13px;
  margin-top: 5px;
  width: 83%;
  height: 35px;
  margin-left: 22.5px;
  border-radius: 6px;
  list-style: none;
  caret-color: transparent;
}
li:hover{
  background:rgba(93, 128, 177, 0.4);
}
.quanbu{
  position: relative;
  top: 6px;
  left: -15px;
  float: right;
}
.jintian{
  position: relative;
  top: 6px;
  left: -15px;
  float: right;
}
.qitian{
  position: relative;
  top: 6px;
  left: -15px;
  float: right;
}
.box_shangce ul svg{
  position: relative;
  top:4px;
  left:5px;
}
.box_shangce p{
  position: relative;
  top: -5px;
  left: 10px;
  display: inline;
}
a{
  color: white;
  text-decoration: none;
}
.active {
  border-left: 3px solid rgb(83, 146, 255);
  background:rgba(133, 184, 255, 0.4);
}
</style>
