<template>
    <div class="input-box">
        <input type="text" placeholder="请输入待办事项，按回车键确认" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'TodoHeader',
    components: {},
    data() {
        return {

        }
    },
    props: ['addTodo'],//传入父组件定义的方法
    methods: {
        add(e) {
            //校验数据
            if(!e.target.value.trim()) return
            //nanoid 用来生成id,比uuid精简
            const todoObj = { id: nanoid(), title: e.target.value, done: false }
            console.log(todoObj)
            //通知App组件去添加一个组件
            this.addTodo(todoObj)
            e.target.value = ''
        }
    }
}
</script>

<style scoped>
.input-box {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex: auto;
    width: 100%;
    height: 30px;
    align-items: center;
}

input {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    height: 28px;
    width: 290px;
}
</style>