<template>
    <div>
        <h1>人员列表</h1>
        <h1>上方组件的求和为: {{sum}}</h1>
        <input type="text" v-model="editName" placeholder="请输入名字"/>
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">
                {{p.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { nanoid } from 'nanoid'
    export default {
        name: 'Person',
        data() {
            return {
                editName: ''
            }
        },
        methods: {
            addPerson() {
                const personObj = {id: nanoid(), name: this.editName}
                this.$store.commit('ADD_PERSON', personObj)
                this.editName = ''
            }
        },
        computed: {
            ...mapState(['personList', 'sum']),
            // ...mapMutations(['ADD_PERSON'])
        }

    }

</script>

<style scoped>
li {
    align-items: left;
}
</style>