//15_src_todoList编辑
/**
 * 
 */
import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router,
  //挂载全局事件总线
  // beforeCreate() {
  //   Vue.prototype.$bus = this
  // }
}).$mount('#app')
