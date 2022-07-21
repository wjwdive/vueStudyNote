<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <!-- getter的使用方法，$store.getters.bigSum -->
        <h1>当前和的10倍：{{bigSum}}</h1>
        <!-- $store.getters 可以简写，把$store.getters.school用 computed方法返回 最终的变量名，而不需要再写一长串前缀了 -->
        <h1>{{school}}的 {{subject}} 课很好</h1>
        <!-- 风格指南：{{}} 里面的表达式尽量简单 -->
        <h1 style="color:coral">下方组件的总人数是： {{personList.length}}</h1>

        <select v-model.number="n" name="" id="">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button class="btn" @click="increment(n)">+</button>
        <button class="btn" @click="decrement(n)">-</button>
        <button class="btn" @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button class="btn" @click="incrementWait(n)">等一等再加</button>

    </div>
</template>

<script>
//mapState, mapGetters, mapMutations，mapActions 四个map的写法，用于简写 

import {mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
            }
        }, 
        methods: {
            //commit的简写形式，借助mapMutations 【对象写法】
            ...mapMutations('countAbout',{increment: 'INCREMENT', decrement: 'DECREMENT'}),
/****************************************************** */
            //mapActions 使用mapActions帮我们生成 this.$store.dispatch 方法 
            ...mapActions('countAbout',{incrementOdd: 'incrementOdd',incrementWait: 'incrementWait' }),
        },

        computed: {

            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),
            //格式化写法，键值一致
            ...mapState('countAbout', {sum: 'sum', school: 'school', subject: 'subject'}),
            ...mapState('personAbout', {personList: 'personList'}),

            //同理，借助 mapGetters 从getters读取数据，简写为：
            ...mapGetters('countAbout', ['bigSum']),

        },
        mounted() {

        }
    }
</script>

<style scoped>
.btn {
    margin-left: 5px;
}
</style>