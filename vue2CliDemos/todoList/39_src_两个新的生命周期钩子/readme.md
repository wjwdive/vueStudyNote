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