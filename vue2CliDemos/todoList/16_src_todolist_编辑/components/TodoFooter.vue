<template>
    <div class="todo-footer" v-if="total">
        <label>
            <!-- <input type="checkbox" checked="isAll" @change="checkAll"> -->
            <input type="checkbox" v-model="isAll">

        </label>
        <span>
            <span>已完成{{doneTotal}}/全部{{total}}</span>
        </span>
        <button @click="clearAll()">清除已完成</button>
    </div>
</template>

<script>
    export default {
        name:'TodoFooter',
        props:['todos', 'checkAllTodo','clearAllChecked'],
        data() {
            return {
                msg: 'hello',
            }
        },
        methods: {
            clearAll() {
                //通知 父组件去做
                this.clearAllChecked()
            },
            //不用v-model，用@change函数
            // checkAll(e) {
            //     let done = e.target.checked
            //     if(done) {
            //         //去父组件改变数据
            //         console.log(e.target.checked)
            //     }else {
            //          //去父组件改变数据
            //         console.log(e.target.checked)
            //     } 
            // },

            // checkAll(checked) {
            //     if(checked){
            //         self.checkAllTodo(true)
            //     }else {
            //         self.checkAllTodo(false)
            //     }
            // }
        },
        computed: {
            total() {
                return this.todos.length
            },
            //遍历计算
            // doneTotal() {
            //     let i = 0
            //     this.todos.array.forEach((todo) => {
            //         if(todo.done) i++
            //     });
            //     return i
            // }

            //reduce
            // doneTotal() {
            //     return this.todos.reduce((pre, todo) => {
            //         console.log('!',pre, todo) 
            //         return pre + (todo.done ? 1: 0)
            //     },0)
            // }

            //reduce 精简版
            doneTotal() {
                console.log('计算 选中')
                return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
            },
            //利用set,get 方法，在set时
            isAll: {
                get() {
                    return this.doneTotal === this.total && this.total > 0
                },

                set(value){
                    this.checkAllTodo(value)
                }

                
            }
        }

    }
</script>

<style scoped>
.todo-footer {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: auto;
}
</style>