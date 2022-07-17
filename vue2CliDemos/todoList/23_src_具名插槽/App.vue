<template>
  <div id="app">
    <div>
      <h1>具名插槽-slot-2</h1>
      <!-- 这样传值，子组件需要接收不同的变量名 -->
      <!-- <div class="container">
        <Category :foods='foods'/>
        <Category :drink='drink'/>
        <Category :games='games'/>
      </div> -->

      <div class="container">
        <Category title="美食">
          <!-- 直接在自定义组件里放个img会被解析，但是vue不知道把它放在哪里，所以要在Category里用一个插槽 -->
          <!-- <img src="" alt=""> -->
          <img slot="center" class="image" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F25%2F20210625220950_2b6b7.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660566928&t=f9223012b1fbb9584d1a9011af0977e6" />
          <div slot="footer">
            <a href="http://www.baidu.com" >百度</a>
          </div>
        </Category>
        <Category title="饮料">
          <ul slot="center" v-for="(item, index) in drinks" :key="index">
            <li>{{ item }}</li>
          </ul>
          <div slot="footer">
            <a href="http://www.baidu.com" >百度</a> | 
            <a href="http://www.bilibili.com" >bilibili</a>
          </div>
        </Category>
        <Category title="游戏">
          <video slot="center" controls class="video" src="https://assets.mixkit.co/videos/preview/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-small.mp4"></video>
          <!-- vue 2.6 template 具名插槽的新写法, v-slot只能放在 template里面 -->
          <template v-slot:footer>
            <div>
              <a href="https://tx3.163.com" >天下3</a> | 
              <a href="https://wow.blizzard.cn/" >魔兽世界</a>
            </div>
            <h4>新服开启，一起来玩</h4>
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
      games: ['Super Mario','DOTA', 'LOL',  '元神', '天下3'],
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
