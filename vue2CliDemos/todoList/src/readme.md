# vue-route 的 props配置
作用：让路由组件更方便的收参数

{
    name: 'xiangxi',
    path: 'detail/:id',
    component: MsgDetail,
    //第一种写法：props值为对象，该对象中所有的key-value的组合都最终都会通过props传给Detail组件
    props：{a:100}
    //第二种写法： props值为布尔值，ture,会把路由收到的所有params参数通过props传递给Detail组件
    props:true，
    //第三种写法：props值为函数，该函数返回的对象中没一组key-value，都会通过props传给Detail组件
    props($route) {
        return {
            id: $route.query.id,
            title:$route.query.title
        }
    }
}

## <router-link> 的replace属性
#### 1.作用：控制路由跳转时操作浏览器历史记录
#### 2.浏览器的历史记录有两种写入方式:分别为push 和 replace，push是追加历史记录，replace是替换当前记录。路由跳转的时候默认为push
#### 3.如何开启replace模式：<router-link replace ...>News </router-link>


## 编程式路由导航
#### 不使用 router-link 也要实现跳转，如何实现？
#### $router.push() //压栈式跳转路由
#### $router.replace()   //替换式跳转路由  
#### $router.back()     //后退
#### $router.forward() //前进
#### $router.go()// 跳转指定步数
##### $router.go(-2)//后退两步 
##### $router.go(2)//前进两步 



## 路由缓存
### 作用，让不展示的路由组件保持挂载，不被销毁
```
<!-- 缓存[News]组件  News是组件名-->
<keep-alive include="News">
    <route-link></route-link>
</keep-alive>
 ```


 ## 路由守卫
 ### 用于做权限/鉴权系统，例如没有登录，点击我的页面不显示内容

 ### 全局路由守卫
 #### 1、前置
 router.beforeEach((to, from, next) => {
    next()
 })

#### 2、后置
 router.afterEach((to, from, next) => {
    next()
 })


 ### 独享路由守卫 [只有后置路由守卫]
 #### 写到 路由配置里
 ```
 path: ""home,
 beforeEnter: (tom, from, next) => {
    next()
 }
 ```


### 组件内路由守卫
不是前置，后置，是路由的时间节点
```
//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter(to ,from , next){
    next()//放行
}
//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave(to, from, next){
    next()//放行
}

```


### 路由模式： history, hash

#### hash模式，端口号后面带#，网络请求不带#后面的部分
#### history模式,端口号后面不带#,全部是/分隔的地址，网络请求会发送这部分地址。但是前端一旦刷新，页面很可能就会请求到404，解决方法，后端使用 connect-history-api-fallback 框架。




## nodejs,写一个简单的后台程序
### 利用express框架
```
const express = require('express')
//使用该组件服务来 消除前端history模式的路由带来的影响
var history = require('connect-history-api-fallback')

const app = express()
app.use(history)
//前端打包的静态资源放在了static目录下
app.use(express.static(__dirname+'/static'))

app.get('/home', (req, res) => {
    res.send({
        name: 'Jarvis',
        age: 18
    })
})

app.listen(5000, (err) => {
    if(!err) console.log('服务器启动成功')
})

```


## Vue UI 组件库
### 1.移动端常用UI组件库
1. vant
2. Cube UI
3. Mint UI
### 2. PC端常用组件库
1.Element UI
2.IView UI


## elementUI
全部引入，
按需引入
