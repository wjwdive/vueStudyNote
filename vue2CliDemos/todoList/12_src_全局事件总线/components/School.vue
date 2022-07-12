<template>
    <div>
        <h2>{{ msg }}</h2>
        <h3>学校姓名：{{ name }}</h3>
        <h3>学校地址：{{ address }}</h3>
        <h4>学生姓名：{{studentName}} </h4>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "School组件",
            name: "交通大学",
            address: "徐汇区",
            studentName: ''
        }
    },
    mounted() {
        this.$bus.$on('hello', (data) => {
            console.log("我是School组件,收到了数据：", data)
            this.studentName = data
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    }
}

</script>

<style lang="scss" scoped>
</style>