<template>
  <div id="app">
    <!-- 数据来自：data,props,computed, 但是从事件传递过来的不能直接使用插值语法 -->
    <h2>学生姓名：{{name}}</h2>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School class="school" :getSchoolInfo="getSchoolInfo"></School>
    <!-- 通过v-on或@ 指令，给Student的组件实例（vc）绑定了一个事件：getStudentInfo, 这个事件在本组件的回调是 getStudentFun， -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- 故意把=号两边的值取不一样，来区分 子组件实例中绑定了事件：getStudentInfo,（要用$emit发射此方法名）， 父组件在接收到这个事件后，会触发自己的方法： getStudentFunc -->
    <!-- 绑定事件，比用props传递方法要方便一点，不用绑定props属性和接收props了 -->
    <!-- <Student v-on:getStudentInfo="getStudentFunc" /> -->

    <!-- 第二种事件传递方法，用ref -->
    <Student ref="student" @click.native="show"/>

  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
},
data() {
  return {
    name: ''
  }
}, 
methods: {
  getSchoolInfo(value) {
    console.log("通过事件传递,获取School实例的信息: ",value)
  },
  //
  // getStudentFunc(value,...a),传递多个参数。
  getStudentFunc(value) {
    console.log('app 接收到了Student传递的信息', value)
    this.name = value
  },
  show() {
    alert('student native click')
  }
},
//在mounted钩子函数中，获取 student实例，然后绑定方法
mounted() {
    //this.$refs.student  就是Student组件的一个实例对象
    // this.$refs.student.$on('getStudentInfo', this.getStudentFunc)
    //比直接绑定自定义事件更加灵活，可以延迟绑定事件，在便签里用v-on绑定,会在标签被vue解析的时候立即绑定，用$ref..$on绑定可以做延时处理，例如axio请求数据回来之后绑定事件,可以使用$once，让事件只触发一次
    // setTimeout(() => {
    //   console.log('等3秒')//页面加载3s后才加载  $on可以被替换为$once，绑定为一次性事件
    //   this.$refs.student.$on('getStudentInfo', this.getStudentFunc)
    // }, 3000);

    //【重要】回调是普通functions函数，函数里this 是触发事件的vc,而不是这段代码所在vue组件实例。而如果函数是箭头函数，this就是当前组件（app）实例对象
    this.$refs.student.$on('getStudentInfo', function(name,...params) {
      console.log("App 收到了学生姓名，", name, params)
      console.log(this) //这里是 tihs实例对象
    })
  },
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
