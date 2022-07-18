<template>
    <div>
        <h1>当前求和为：{{$store.state.sum}}</h1>
        <!-- getter的使用方法，$store.getters.bigSum -->
        <h1>当前和的10倍：{{$store.getters.bigSum}}</h1>
        <!-- $store.getters 可以简写，把$store.getters.school用 computed方法返回 最终的变量名，而不需要再写一长串前缀了 -->
        <h1>{{school}}的 {{subject}} 课很好</h1>
        <!-- 风格指南：{{}} 里面的表达式尽量简单 -->


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
            //程序员亲自写方法
            /*
            increment() {
                this.$store.commit('INCREMENT', this.n);
            },
            decrement() {
                this.$store.commit('DECREMENT', this.n);
            },
            */

/*
            incremnt1() {
                //自定义方法不执行，让另一个方法执行，传参为this.n，这样默认传参就不是event了
                this.customIncrement(this.n)
            },
             ...mapMutations({customIncrement: 'INCREMENT'}),
*/
            /**
             * increment() {
                this.$store.commit('INCREMENT', this.n);
                },
                //vuex自动生成的方法
                increment(event) {
                this.$store.commit('INCREMENT', value);
            },
             */

            //commit的简写形式，借助mapMutations 【对象写法】
            ...mapMutations({incremnt: 'INCREMENT', decrement: 'DECREMENT'}),
            //数组简写，但是 模板里调用要自己传参数 【数组写法】
            //...mapMutations(['INCREMENT', 'DECREMENT']),

/****************************************************** */
            //dispatch 程序员亲自写的写法
            /*
            incrementOdd(){
                //sum为奇数时，走if里面
                // if(this.sum %2) {
                //     this.sum += this.n
                // }
                this.$store.dispatch('incrementOdd', this.n);
                
            },
            incrementWait(){
                // setTimeout(() => {
                //     this.sum += this.n
                // }, 1000);
                this.$store.dispatch('incrementWait', this.n)
            },
            */

            //mapActions 使用mapActions帮我们生成 this.$store.dispatch 方法 
            ...mapActions({incrementOdd: 'incrementOdd',incrementWait: 'incrementWait' }),

            //数组简写形式，template 标签里要传参，incrementOdd(n)
            //...mapActions(['incrementOdd','incrementWait' ])


        },
        computed: {
            // 考程序员自己亲自写 计算属性
            //如何才能简写这些计算方法呢？ mapState
            // sum() {
            //     return this.$store.state.sum
            // },
            // school() {
            //     return this.$store.state.school
            // },
            // subject() {
            //     return this.$store.state.subject
            // },

            //借助mapState生成计算属性，从state中读取数据。（对象写法）
            // ...mapState({he: 'sum', xuexiao: 'school', xueke: 'subject'}),
            //格式化写法，键值一致
            //...mapState({sum: 'sum', school: 'school', subject: 'subject'}),
            //更加简化的写法
            ...mapState(['sum', 'school', 'subject']),


            //  bigSum() {
            //     return this.$store.getters.bigSum
            // },

            //同理，借助 mapGetters 从getters读取数据，简写为：
            ...mapGetters(['bigSum']),

        },
        mounted() {
            //在mounted中 配置 mapState.让 vuex帮我们自动生成代码
            // const x = 

        }
    }
</script>

<style scoped>
.btn {
    margin-left: 5px;
}
</style>