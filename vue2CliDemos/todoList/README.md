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


## Todo List 案例总结
1.组件化编码流程
 1.1 拆分静态组件：组件要按照功能点拆分，明明不要和html元素冲突
 1.2 实现动态组件：考虑好数据的存在位置，数据是一个组件在用，还是一些组件再用：
    a.一个组件再用，放在自身
    b.多个组件在用，放在他们共同的父组件
1.3 实现交互： 从绑定事件开始

2.props适用于
 2.1 父组件 --> 子组件 通信
 2.2 子组件 --> 通信（要求父先给子一个函数）

3.使用v-model 要切记：v-model 绑定的值不能是props传过来的值，因为props是不可以修改的
4.props传过来的若是对象类型，修改对象中的属性时，Vue不会报错，但是不推荐这样做

## 事件
JS内置事件是给，html标签用的。
