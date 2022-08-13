//和vue2比，引入的不再是Vue构造函数，引入一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import { ConfigProvider } from 'vant' //ConfigProvider
import { createPinia } from 'pinia'  //状态管理类 pinia
import router from './router/index'

//创建应用实例对象 app
const app = createApp(App)
app.use(createPinia())
app.use(ConfigProvider) //暂时全量引入组件
app.use(router)
app.mount('#app')

/**
//vue2 创建vue app
const vm = new Vue({
    render: h => h(app)
})

vm.$mount('#app')
 */