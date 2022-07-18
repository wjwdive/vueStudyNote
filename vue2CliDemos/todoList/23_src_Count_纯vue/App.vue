<template>
  <div id="app">
    <div>
      <h1>vuex-导学</h1>
      <!-- 这样传值，子组件需要接收不同的变量名 -->
      <!-- <div class="container">
        <Category :foods='foods'/>
        <Category :drink='drink'/>
        <Category :games='games'/>
      </div> -->

      <div class="container">
      
      <Count></Count>
      </div>

    </div>
  </div>
</template>

<script>

import Count from './components/Count'

export default {
  name: 'App',
  components: {
    Count,
  },
  data() {
    return {
      foods: ['烧饼', '胡辣汤', '水煎包', '豆腐脑', '卤面条'],
      drinks: ['雪碧', '可乐', '美年达', '咖啡','冰红茶'],

    }
  },
  methods: {
    
  },
  watch: {
    // todos: {
    //   deep: true,//开启深度监视，
    //   handler(value) {
    //     localStorage.setItem('todos', JSON.stringify(value))
    //   }
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

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: azure;
}

.image {
    width: 150px;
    height: 150px;
}

.video {
    width: 150px;
    height: 150px;
}
</style>
