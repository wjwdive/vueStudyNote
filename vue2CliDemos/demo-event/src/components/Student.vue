<template>
    <div class="student">
        <h2>{{ msg }}</h2>
        <h3>学生姓名：{{ myName }}</h3>
        <h3>学生性别：{{ sex }}</h3>
        <h3>学生年龄：{{ age }}</h3>
        <button @click="sendStudentName">触发事件传递学生信息给父组件</button>
        <button @click="releaseEvent">解绑事件</button>
        <button @click="destroyVC">销毁Student组件实例</button>

    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "student给app传值",
            //想改变 外部传入的props，需要在这赋值给data中某个变量,再使用
            // myName: this.sName
            myName: "Jarvis",
            age: 18,
            sex: "男",
        }
    },
    //接收的props不要多定义，尽量不要修改。
    // props:['sName', 'sex', 'age'],//1、简单声明接收，在标签里写好
    // 2、类型限制接收接收
    // props: {
    //     sName: String,
    //     age: Number,
    //     sex: String
    // },
    //3、接收数据的同事，进行类型限制，必要性限制，默认值设定
    // props: {
    //     sName: {
    //         type: String,
    //         required: true
    //     },
    //     age: {
    //         type: Number,
    //         default: 18,
    //     },
    //     sex: {
    //         type: String,
    //     }
    //},
    methods: {
        sendStudentName(value) {
            console.log('student 点击触发事件', value)
            //$emit方法，第一参数的父组件中响应事件的方法名，之后的形参是传递的参数
            this.$emit('getStudentInfo', this.myName);
        },
        releaseEvent() {
            this.$off('getStudentInfo')//解绑一个自定义事件
            console.log('事件已解绑')
            //解绑多个事件
            // this.$off(['getStudentInfo','method2'])
            //解绑所有的事件
            // this.$off()
        },
        destroyVC() {
            this.$destroy();//销毁当前Student组件的实例，销毁后所有Student实例的自定义事件都不在起作用
        }

    },
}

</script>

<style scoped>
.student {
    background: pink;
}
</style>