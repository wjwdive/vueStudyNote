//15_src_todoList编辑
/**
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  store,
  //挂载全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
