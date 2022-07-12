<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>学生姓名：{{ name }}</h3>
        <h3>学生性别：{{ sex }}</h3>
        <h3>学生年龄：{{ age }}</h3>
        <button @click="sendStudentNameToSchool">把学生姓名传递给School组件</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "",
            //想改变 外部传入的props，需要在这赋值给data中某个变量,再使用
            name: "Jarvis",
            sex: "男",
            age: 17
        }
    },
    methods: {
        sendStudentNameToSchool() {
            this.$bus.$emit('hello', this.name)
        }
    }
}

</script>

<style lang="scss" scoped>
</style>