<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- props简单绑定传值。:age='xxx' , xxx是一个js表达式， :age 是 v-bind:age 动态绑定
    ，age="yyy" ，yyy只是一个字面量， 
    age=18，在这里是编译不通过的，18这类变量必须用引号括起来'' 才能编译通过，-->
    <!-- <Student sName="张三" sex="男" :age="18" /> -->
    <div class="todo-coantainer">
      <h1>待办事项</h1>
      <TodoHeader :addTodo="addTodo" />
      
      <TodoList :todos="todos" />

      <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllChecked="clearAllChecked" />
    </div>

  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

// import { nanoid } from 'nanoid'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      //todos 放在这里是为了 兄弟组件之间传递数据
      // todos: [
      //   { id: nanoid(), title: '吃饭', done: true },
      //   { id: nanoid(), title: '睡觉', done: false },
      //   { id: nanoid(), title: '打豆豆', done: false }
      // ],
      //从localStorage中读取记录，没有数据用空数组，不用空数组会报错，因为读取不到会返回null,JSON.parse null会报错
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    //添加一个代办事项
    addTodo(x) {
      console.log('我是App组件,我收到数据了:', x)
      this.todos.unshift(x)
    },
    //切换勾选
    toggleTodo(id) {
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.done = !todo.done
      })
    },
    //编辑修改一个todo数据
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if(todo.id === id) todo.title = title
      })
    },
    //删除
    deleteTodo(_, id) {
      //过滤后，要赋值给todos
      this.todos = this.todos.filter((todo) => {
            return todo.id !== id
          })
    },
    //全选或取消全选
    checkAllTodo(checked){
      this.todos.forEach((todo) => {
        todo.done = checked
      })
    },
    //清除所有 选中的
    clearAllChecked() { 
      this.todos = this.todos.filter((todo) => {
        return !todo.done
      })
    }
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
    this.$bus.$on('toggleTodo', this.toggleTodo),
    // this.$bus.$on('checkAllTodo',this.checkAllTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)

    // pubsub.subscribe('toggleTodo', this.toggleTodo),

    //消息订阅与发布
    this.pubidDelete = pubsub.subscribe('deleteTodo',this.deleteTodo)


    //或者
    // pubsub.subscribe('toggleTodo', (id) => {
    //     //过滤后，要赋值给todos
    //   this.todos = this.todos.filter((todo) => {
    //         return todo.id !== id
    //       })
    // }),

    //事件总线，监听更新事件
    this.$bus.$on('updateTodo', this.updateTodo)

  },
  //组件即将销毁的时候，注销总线上的监听事件
  beforeDestroy() {
    this.$buf.$off('toggleTodo')
    // this.$buf.$off('deleteTodo')

    // this.$buf.$off('pubidDelete')
    //取消消息订阅与发布
    pubsub.unsubscribe(this.pubidDelete)
    //取消监听事件
    this.$bus.$off('updateTodo')
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
