import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import MsgDetail from '../pages/MsgDetail'


export default new VueRouter({
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
                    path: 'news',
                    component: News, 
                },
                {
                    path: 'message',
                    component: Message, 
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