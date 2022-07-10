<template>
    <div class="todo-box">
        <ul class="todo-main">
            <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :toggleTodo="toggleTodo"
                :deleteTodo='deleteTodo' />
        </ul>
    </div>

</template>

<script>

import TodoItem from './TodoItem.vue'
export default {
    name: "TodoList",
    components: { TodoItem },
    data() {
        return {

        }
    },
    //父组件 传递的方法
    props: ['todos', 'toggleTodo', 'deleteTodo']
}
</script>

<style scoped>

.todo-box {
    display: flex;
    justify-content: center;
}
.todo-main {
    /* display: flex; */
    width: 300px;
    height: 200px;
    padding-left: 2px;
    background: lightblue;
    justify-content: center;
    align-items: left;
    overflow: auto;
}
</style>