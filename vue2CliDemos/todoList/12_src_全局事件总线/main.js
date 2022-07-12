//12_src_全局事件总线

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//让所有组件看到 a,b，但是不是响应式的a,b
//Vue.prototype.x = {a:1, b:2}

Vue.$bus = this


new Vue({
  render: h => h(App),
  //在beforeCreate的生命周期行数内，装载全局的事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')


//创建vm，把vm挂载到,Vue的原型对象x上。x就拥有了组件的$on,$off,$emit等方法，但是如下，时机不对。vm创建好在挂载就晚了，因为school，student等的mounted方法都执行过了。
// const vm = new Vue({
//   render: h => h(App),
// }).$mount('#app')
// Vue.prototype.x = vm


//这样也不行，vm还没有，不能挂载到Vue.propotype
// Vue.prototype.x = vm
// const vm = new Vue({
//   render: h => h(App),
// }).$mount('#app')
