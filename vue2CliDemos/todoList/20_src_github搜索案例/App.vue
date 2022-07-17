<template>
  <div id="app">
    <div>
      <h1>github静态组件</h1>
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
// 利用在script里引入外部库，会导致引入的库被严格的检查，如果css中使用了本地没有的文件夹、字体等资源，就会编译不过。
//第三方资源中用了解决办法，可以把css/xxx.css放到public文件夹下。
//使用公共样式：在index.html里 head部分，引入 <link res='stylesheet' href="<%= BASE_URL %>css/bootstrap.css"> 
// import './assets/css'
// import pubsub from 'pubsub-js'


// import { nanoid } from 'nanoid'
import Search from './components/Search'
import List from './components/List'


export default {
  name: 'App',
  components: {
    Search,
    List,
  },
  data() {
    return {

      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    
  },
  watch: {
    todos: {
      deep: true,//开启深度监视，
      handler(value) {
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  },
  //组件挂载的时候，在总线上注册监听事件
  mounted() {
    //this.$bus.$on('toggleTodo', this.toggleTodo),

  },
  //组件即将销毁的时候，注销总线上的监听事件
  beforeDestroy() {
    //this.$buf.$off('toggleTodo')
  }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
