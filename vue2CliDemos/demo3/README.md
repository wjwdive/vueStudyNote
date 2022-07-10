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


