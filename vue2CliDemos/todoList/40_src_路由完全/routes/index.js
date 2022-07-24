import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import MsgDetail from '../pages/MsgDetail'


const router =  new VueRouter({
    routes: [
        {   
            name: 'guanyu',//路由明明，配合params写法
            path: '/about',
            component: About,
        }, 
        {
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News, 
                    meta: {isAuth: true, title: "新闻"}
                },
                {
                    path: 'message',
                    component: Message, 
                    meta: {isAuth: true, title: "消息"},
                    children: [
                        {   
                            name: 'xiangqing',
                            path: 'msgDetail', //query 跳转路由
                            //path: 'msgDetail/:id/:title',//path有占位符，name，配合 params 跳转路由 restful
                            component: MsgDetail, 
                            // props: {
                            //     //props的第一种写法，值为对象；该对象中的所有key-value，都会以props方式传递对象
                            //     name: 'Jarvis',
                            //     age: 18
                            // },
                            //props的二种写法，值为布尔值；若布尔值为真，就会把改路由组件收到的所有params参数，以props的形式传递给MsgDetail
                            // props: true,
                            //props的三种写法1，值为函数； 传递$route参数, 此时用 props接收id和title就行了
                            // props($route) {
                            //     // return {id: '100', title: '号外号外！！'}  //写死的传值
                            //     return {id:$route.query.id, title: $route.query.title}
                            // },
                            //props的三种写法2，值为函数；解构赋值,少写一层 $route   {query:$route.query} ,此时用 props接收id和title就行了
                            props({query}) {
                                // return {id: '100', title: '号外号外！！'}  //写死的传值
                                return {id:query.id, title: query.title}
                            },
                            // props的三种写法3，值为函数；连续解构赋值,少写一层 $route，少写 query.但会导致语义不明确了
                            // props({query:{id, title}}) {
                            //     return {id, title}
                            // }


                        }
                        
                    ]
                }
            ]
        }
    ]
})

//路由守卫，全局前置路由守卫，初始化的时候被调用，每次路由切换被调用
router.beforeEach((to, from, next) => {
    console.log("前置路由守卫 ", "to: ",to, "from: ", from)
    //放在这里不合适，因为鉴权未确定，放到afterEach会好点
    //document.title = to.meta.title || "路由学习"
    //必须调用next()，否则所有页面都
    next()

    //也可以用name例如： to.name === 'xinwen'
    // if(to.path === '/home/news' || to.path === '/home/message'){
    //     //一些权限逻辑判断
    //     if(true){
    //         next()
    //     }
    // }
    
    //单个判断，太麻烦了，如果有很多页面需要权限判断，使用路由元信息
    if(to.meta.isAuth) {
        if(to.path !== '/home/news') {
            next()
        }else {
            alert('没有权限')
        }
    }


})

//后置路由守卫
router.afterEach((to, from) =>{
    console.log("后置路由守卫 ","to: ",to, "from: ", from)
    //页面跳转好之后 修改title
    document.title = to.meta.title || "路由学习"
})




export default router