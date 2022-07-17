<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search GitHub Users</h3>
        <div>
            <input type="text" v-model="searchText" placeholder="enter the name you search" />&nbsp;<button
                @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
// axios 和this.$http.get 是一样的效果
export default {
    name: 'Search',
    data() {
        return {
            searchText: "",
            // url: "https://api.github.com/search/users?q=xxx",

        }
    },
    methods: {
        //按钮点击事件
        searchUsers() {
            //请求前，更新数据,主要是设置状态，清空数据
            this.$bus.$emit('updateListData', { isFirst: false, isLoading: true, errMsg: '', users: [] })
            axios.get(`https://api.github.com/search/users?q=${this.searchText}`).then(
                response => {
                    console.log('请求成功了： ', response.data)
                    // this.$bus.$emit('updateListData',isFisrttrue,false,'' ,response.data.items) //多个参数时，不要一个个传了，放到一个对象里
                    // this.$bus.$emit('updateListData',response.data.items)
                    //请求成功后更新数据
                    this.$bus.$emit('updateListData', { isFirst: false, isLoading: false, errMsg: '', users: response.data.items||[]})
                },
                error => {
                    console.log('请求失败： ', error)
                    //请求失败后更新数据
                    this.$bus.$emit('updateListData', { isFirst: false, isLoading: false, errMsg: error, users: [] })

                }
            )
        }

    },
}
</script>

<style scoped>
</style>