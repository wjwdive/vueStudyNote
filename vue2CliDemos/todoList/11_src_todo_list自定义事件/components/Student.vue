<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>学生姓名：{{ myName }}</h3>
        <h3>学生性别：{{ sex }}</h3>
        <h3>学生年龄：{{ age }}</h3>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "vue props 的传值",
            //想改变 外部传入的props，需要在这赋值给data中某个变量,再使用
            myName: this.sName
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
    props: {
        sName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 18,
        },
        sex: {
            type: String,
        }
    }
}

</script>

<style lang="scss" scoped>
</style>