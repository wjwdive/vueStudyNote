<template>
    <li>
        <label class="li-left">
            <input type="checkbox" :checked='todo.done' @change="toggleCheck(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <!-- 用v-show，比v-if好，不用频繁的更新DOM结构， :value="" 需要绑定值，失去焦点事件，需要传递todo，和$event，用来更新 -->
            <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle">
        </label>
        <!-- v-show:没有编辑就不用再展示编辑按钮了 -->
        <button class="btn btn-danger" v-show="!todo.isEdit" @click="editItem(todo)">编辑</button>
        <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>

        <!-- <input type="checkbox" :checked='todo.done' @change="toggleCheck(todo.id)"/> <span>{{todo.title}} <button>删除</button></span> -->
        <!-- 这里可以用v-model 绑定,但是不建议. vue对props是浅监视。在第一层对象直接改会报错，绑定在对象里的值用v-model绑定vue不会报错 -->
        <!-- <input type="checkbox" v-model="todo.done"/> <span>{{todo.title}} <button>删除</button></span> -->

    </li>
</template>

<script>
import pubsub from 'pubsub-js'

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
                console.log('删除id: ',id)
                //父子组件通信，层层传递
                //this.deleteTodo(id)
                //全局事件总线：通知App vue 删除一个vue
                this.$bus.$emit('deleteTodo', id)
                //消息发布订阅
                // pubsub.publish('deleteTodo', id)
                pubsub.publish('deleteTodo', id)
            }
        },
        editItem(todo) {
            //只有用组件实例的$set方法，给指定对象添加执行的属性和值，该值才是响应式的，vc会给isEdit生成对应的setter,getter
            // 这样写不完美，数据列表有数据的时候，可以给现有数据项添加一个属性。当数据项被编辑过一次之后，就不要再添加该属性了。
            //this.$set(todo, "isEdit", true)
            //对于以上问题，应该做一个判断 todo上是否有isEdit  .不能用this.todo.isEdit, 这是判断isEdit为真还是为假，要用判读是否有isEdit这个属性.已经有这个属性，直接赋值为真，否则添加属性，赋值为true
            //hasOwnProperty 会查找对象是否有指定熟悉，但是不会去查找对象的原型链
            //ESlint，不让用todo.hasOwnProperty('isEdit') ；但是可以使用标准方法：Object.prototype.hasOwnProperty.call(foo, “bar”)。
            if(Object.prototype.hasOwnProperty.call(todo, 'isEdit')) {
                todo.isEdit = true
            }else {
                this.$set(todo, "isEdit", true)
            }

            //$nextTick 指定的函数会在Dom结点更新之后再执行.这个代码块可能会更新多个数据。为避免一个数据改变更新一次dom，会在此代码块多个数据变更后执行dom
            this.$nextTick(function() {
                this.$refs.inputTitle.focus()
            })
        },
        //失去焦点，编辑状态为false. 真正执行修改逻辑.
        handleBlur(todo, e) {
            todo.isEdit = false
            if(!e.target.value.trim()) return alert('输入不能为空')
            console.log('updateTodo : ',e.target.value, " ",todo)
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
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