<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- props简单绑定传值。:age='xxx' , xxx是一个js表达式， :age 是 v-bind:age 动态绑定
    ，age="yyy" ，yyy只是一个字面量， 
    age=18，在这里是编译不通过的，18这类变量必须用引号括起来'' 才能编译通过，-->
    <Student sName="张三" sex="男" :age="18" />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
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
