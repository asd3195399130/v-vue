import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';							// 引入ElementUI组件库
import 'element-ui/lib/theme-chalk/index.css';	// 引入ElementUI全部样式
Vue.use(ElementUI)	// 使用ElementUI
Vue.config.productionTip = false

new Vue({
  router,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线，$bus 就是当前应用的 vm  
  },
  render: h => h(App)
}).$mount('#app')
