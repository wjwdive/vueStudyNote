# demo3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## mixin(混入)
功能：可以把多个组件公用的配置提取成为一个混入对象
使用方式：
    第一步，定义一个混合，例如：
    {
        data(){},
        methods(){},
        ...
    }
    第二步，使用混入，例如：
    1.全局混入：Vue.mixin(xxx)
    2.局部混入：mixins:['xxx','yyy']

## plugin插件
功能：用于增强Vue
本质：包含install方法的一个对象， install的第一个参数是Vue, 第二个以后的参数是使用者传递的数据

定义插件：
object.install = function(Vue, options) {
    //1.添加一个全局过滤器
    Vue.filter(...)
    //2.添加全局指令
    Vue.directive(...)
    //3.配置全局混入
    Vue.minxin(...)
    //4.添加实例方法
    Vue.propotype.$myMethod = function() {}
    Vue.propotype.$myProperty = xxx
}

//查看包的版本
npm view packName versions

npm view less-loder versions
npm i less-loder@7


## 组件的自定义事件
1.一种组件间通信的方式，适用于： 子组件==>父组件
2.使用场景： A是父组件，B是子组件，B给A传递数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
3.绑定自定义事件：
    3.1 第一种方式，在父组件中： <Demo @eventname="eventCB" ></Demo> 或 <Demo v-on:eventname="eventCB" ></Demo>
    3.2 第二种方式，在父组件中:
    ```
    <Demo ref="demo"></Demo>
    ...
    mounted() {
        this.$ref.xxx.$on('eventname', this.eventCB)
    },
    methods: {
        eventCB() {

        }
    }
    ```
    3.3 若想让自定义事件只触发一次，可以使用$once修饰符
4.触发自定义事件： this.$emit('eventname', 数据)
5.解绑自定义事件： this.$off('eventname')
6.组件上也可以绑定原生DOM事件，需要使用native修饰符
7.注意：通过this.$ref.$on('eventname',callback) ，回调要么配置在methods中,要么使用箭头函数。否则回调中this指向的是被绑定事件的组件实例对象


## 全局事件总线
1.一种组件间间接通信的方式，适用于任意组件间通信
2.安装全局事件总线
```
new Vue({
    ...
    beforeCreate() {
        Vue.prototype.$bus = this// $bus就是当前应用的vm
    },
    ...
})
```
3.使用事件总线
3.1.接收数据：A组件想接收数据，则在A组件中给$bus 绑定自定义事件，时间的回调留在A组件自身
```
methods() {
    demo(data){

    }
},
mounted() {
    this.$bus.$on('xxx', demo)
}

```
3.2.提供数据：
this.$bus.$emit('xxx',data)

4.最好在beforeDestory钩子中，用$off去解绑当前组件用到的事件。不要$off(),这样会把总线中的所有事件取消。

多层组件传递数据，事件适合用全局事件组件。



## 消息订阅与发布
订阅，发布模式：
需要安装第三方库：pubsub-js

在接收数据的组件上
```
methods: {
//第一个参数是消息名，用不到，用一个暂未符_
this.deleteTodo(_, data) {
    ...
}
},
...
mounted() {
    //这里最好用箭头函数
    this.pubid = pubsub.subscribe("messageName", (messageName, data) =>{

    }),
    //如果用普通函数+method函数回调，
    this.pubid = pubsub.subscribe("messageName", function(messageName, data) {
        this.deleteTodo('messageName',data)
    })
},
beforeDestory() {
    this.unsubscribe(this.pubid)
}
```

```
在发送数据的组件上：
pubsub.publish("messageName",data)
```


## $nextTick




## 动画与过渡



## 网络请求
### 1.xhr       new XMLHttpRequest(), xhr.open() xhr.send()
### 2.jQuery    大多是操作DOM的操作，只有少部分是网络请求相关
### 3.axios     Promise风格的网络请求库，小巧方便
### 4.fetch     也是Promise风格的，但是它封装了两层
### 5.resource  也是Promise风格的，vue的一个插件库 'vue-resource'



跨域：请求发了，浏览器也接收了，但是浏览器拦截了，不在把响应交给服务器了。

同源策略，
1.CORS,
配置响应头。
2.jsonp   只能解决get请求的跨域。
代理服务器。

请求：前端8080 ---> 代理服务器 ---> 服务器 5000
接收：前端8080 <--- 代理服务器 <--- 服务器 5000

可以借助 ngix,vue-cli， 开一个代理服务器
devServer.proxy

### 代理配置方式一：vue-cli 自带的代理服务器。在 vue.config.js中配置代理服务器：
```
devServer: {
    proxy:'http://localhost:5000'
}
//baseURL里要用http://localhost:8080
```


当我请求的资源在本地，例如public （本地有的文件）就不会做转发了。

这种方式：1.只能配置一个代理，2.不能灵活的配置能不能走代理

### 代理配置方式二、在 vue.config.js中配置代理服务器：

```
devServer: {
    proxy: {
        '/api':{
            target: 'http://localhost:8080',
            pathRewrite: {'^api1':''}
            ws: true,//用于支持websocket 配置
            changeOrigin: true // true会说谎，服务器收到的请求头中的host为,localhost:5000,为false时：服务器收到的请求头host为8080,默认是true,  react里默认是false. 撒谎了好，它会，
        }，
    
        '/api2':{
                    target: 'http://localhost:8080',
                    pathRewrite: {'^api2':''}
                    ws: true,//用于支持websocket 配置
                    changeOrigin: true 
                }，
            }
}
```

```
//请求的时候要用的url,在端口号后加api
http://localhsot:5000/api/students

```


es6 合并
this.info中原来的数据和dataObj里的数据合并，用dataObj得新值替换掉this.info里的旧值
this.info = {...this.info,...dataObj}

