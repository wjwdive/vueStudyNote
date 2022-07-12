<template>
    <li>
        <label class="li-left">
            <input type="checkbox" :checked='todo.done' @change="toggleCheck(todo.id)" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>

        <!-- <input type="checkbox" :checked='todo.done' @change="toggleCheck(todo.id)"/> <span>{{todo.title}} <button>删除</button></span> -->
        <!-- 这里可以用v-model 绑定,但是不建议. vue对props是浅监视。在第一层对象直接改会报错，绑定在对象里的值用v-model绑定vue不会报错 -->
        <!-- <input type="checkbox" v-model="todo.done"/> <span>{{todo.title}} <button>删除</button></span> -->

    </li>
</template>

<script>
export default {
    name: "TodoItem",
    data() {
        return {

        }
    },
    //声明 接收todo对象
    props: ['todo'],
    methods: {
        //切换选中
        toggleCheck(id) {
            //通知App组件，将对应的todo.done 改变【数据在哪里，数据的操作改变也应该在哪里】
            this.$bus.$emit('toggleTodo', id)
        },
        //删除
        deleteItem(id) {
            if (confirm('你确定要删除此条目吗？')) {
                console.log(id)
                //通知App vue 删除一个vue
                this.$bus.$emit('deleteTodo', id)
            }
        }
    }

}
</script>

<style scoped>
li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 35px;
    /* align-content: center; */
    align-items: center;
    margin-top: auto;
}
/* li :left {
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 35px;
    align-content: center;
} */
li button {
    /* display: flex;
    flex-direction: row;
    justify-content: right; */
    float: right;
    display: none;
}
li:hover {
    background: skyblue;
}

li:hover button {
    display: inline-block;
}
</style>