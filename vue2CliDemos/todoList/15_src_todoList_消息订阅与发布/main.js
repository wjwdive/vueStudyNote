//13_src_todoList发布订阅模式
/**
 * 任何一个框架都可以使用此库
 * 需要用到第三方库 pubsub-js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
