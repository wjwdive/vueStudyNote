<template>
    <div>
        <h1>人员列表</h1>
        <h1>上方组件的求和为: {{sum}}</h1>
        <input type="text" v-model="editName" placeholder="请输入名字"/>
        <button @click="addPerson">添加</button>
        <button @click="addPersonWang">添加一个王姓人</button>
        <button @click="addPersonServer">添加服务器返回的人名</button>

        <ul>
            <li v-for="p in personList" :key="p.id">
                {{p.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    // import { mapState } from 'vuex'
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
                this.$store.commit('personAbout/ADD_PERSON', personObj)
                this.editName = ''
            },
            addPersonWang() {
                const personObj = {id: nanoid(), name: this.editName}
                this.$store.dispatch('personAbout/addPersonWang', personObj)
                this.editName = ''
            },
            addPersonServer() {
                this.$store.dispatch('personAbout/addPersonServer')
                this.editName = ''
            }

        },
        computed: {
            //不用简写形式，用原始方式，
            personList() {
                return this.$store.state.personAbout.personList
            },
            sum() {
                return this.$store.state.countAbout.sum
            },
            firstPersonName() {
                //这里必须这样写，应为getters比较特殊 getters在store中是和state平级的。
                return this.$store.getters['personAbout/firstPersonName']
            }
            // ...mapState('aboutPerson',['personList', 'sum']),
            // ...mapMutations(['ADD_PERSON'])

        }

    }

</script>

<style scoped>
li {
    align-items: left;
}
</style>