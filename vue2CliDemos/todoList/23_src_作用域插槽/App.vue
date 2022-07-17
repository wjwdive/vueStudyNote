<template>
  <div id="app">
    <div>
      <h1>作用域插槽-slot-3</h1>
      <!-- 这样传值，子组件需要接收不同的变量名 -->
      <!-- <div class="container">
        <Category :foods='foods'/>
        <Category :drink='drink'/>
        <Category :games='games'/>
      </div> -->

      <div class="container">
      
        <Category title="游戏">
          <!-- https://tx3.v.netease.com/r/video/20210513/ab7b9b9a-535d-4f7a-889a-8ebf9a02fab9.mp4 -->
          <!-- https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-small.mp4 -->
          <video slot="center" controls class="video" src="https://tx3.v.netease.com/r/video/20210513/ab7b9b9a-535d-4f7a-889a-8ebf9a02fab9.mp4"></video>
          <!-- vue 2.6 template 具名插槽的新写法, v-slot只能放在 template里面 -->
          <!-- <template v-slot:footer>
            <div>
              <a href="https://tx3.163.com" >天下3</a> | 
              <a href="https://wow.blizzard.cn/" >魔兽世界</a>
            </div>
            <h4>新服开启，一起来玩</h4>
          </template> -->


          <!-- 作用域插槽： 这里必须使用template标签，必须使用scope属性, 是一个标识。不是要绑定自定义组件里的数据对象，还要注意不是scoped.  适用于数据在自定义的组件里，使用者需要定义模板样式-->
          <!-- scope 可以通过结构赋值 同时传入多个对象 -->
          <!-- <template scope="gamesSlot"> -->
            <!-- 新的属性标签是 slot-scope -->
          <template scope="{ games, msg}">
            <!-- 打印 gamesSlot 是什么，是一个包裹好的对象 -->
              <!-- {{gamesSlot.games}} -->
              <!--  -->
              <h3>{{msg}}</h3>
              <video slot="center" controls class="video" src="https://tx3.v.netease.com/r/video/20210513/ab7b9b9a-535d-4f7a-889a-8ebf9a02fab9.mp4"></video>
              <ul v-for="(item, index) in games" :key="index">
                <li>{{ item }}</li>
              </ul>
          </template>
        </Category>
      </div>

    </div>
  </div>
</template>

<script>

import Category from './components/Category'

export default {
  name: 'App',
  components: {
    Category,
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
