<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n" name="" id="">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button class="btn" @click="increment">+</button>
        <button class="btn" @click="decrement">-</button>
        <button class="btn" @click="incrementOdd">当前求和为奇数再加</button>
        <button class="btn" @click="incrementWait">等一等再加</button>

    </div>
</template>

<script>
    export default {
        name: "Count",
        data() {
            return {
                n: 1,
                sum: 0,
            }
        }, 
        methods: {
            increment() {
                this.sum += this.n
            },
            decrement() {
                this.sum -= this.n
            },
            incrementOdd(){
                //sum为奇数时，走if里面
                if(this.sum %2) {
                    this.sum += this.n
                }
                
            },
            incrementWait(){
                setTimeout(() => {
                    this.sum += this.n
                }, 1000);
            },
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