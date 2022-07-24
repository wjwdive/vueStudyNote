<template>
    <div>
        <!-- 第一种，用qeury传值 -->
        <!-- <h3>{{$route.query.id}}</h3>
        <h4>{{$route.query.title}}</h4> -->
        <!-- 第二种，用params传值 -->
        <!-- <h3>{{$route.params.id}}</h3>
        <h4>{{$route.params.title}}</h4> -->

        <!--第三种，用 props()  函数传值 -->
        <h3>{{id}}</h3>
        <h4>{{title}}</h4>

    </div>
</template>

<script>
    export default {
        name: 'MsgDetail',
        //props: ['name', 'age'],//props第一种传值方式，只能传递死值.
        //或第三种写法，传递props
        props: ['id', 'title'],
        //第二种写法不用 props接收，在计算属性中接收props： true
        // computed: {
        //     id() {
        //         return this.$route.query.id
        //     },
        //     title() {
        //         return this.$route.query.title
        //     }
        // },

        mounted() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>

</style>