<template>
    <div class="album">
        <div class="card" v-for="user in userInfo.users" :key="user.login">
            <a :href="user.html_url">
                <img :src="user.avatar_url" style="width: 100px" />
            </a>
            <p class="card-text"> {{ user.login }}</p>
        </div>

        <h1 v-show="userInfo.isFirst">欢迎使用git用户查找</h1>
        <h1 v-show="userInfo.isLoading">加载中...</h1>
        <h1 v-show="userInfo.errMsg">{{userInfo.errMsg}}</h1>

        <!-- 
        list组件可能的四个状态：
        welcome, loading, users, error
        -->
    </div>

</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            userInfo: {
                users: localStorage.getItem("users") || [],
                isFirst: true,      //是否是初次展示
                isLoading: false,   //是否在加载中
                errMsg: '',         //错误信息
        }
            }

    },
    methods: {
        getUsers(dataObj) {
            //通过字面量的方式合并对象，重名的属性值以后面参数为准
            this.userInfo = {...this.userInfo, ...dataObj}
        }
    },
    mounted() {
        this.$bus.$on('updateListData', this.getUsers)
    },
    beforeDestroy() {
        this.$bus.$off('updateListData')
    },
    watch: {
        users: {
            deep: true,
            handler(value) {
                localStorage.setItem('users', JSON.stringify(value))
            }
        }
    }
}
</script>

<style scoped>
.album {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
    flex-flow: wrap;
    /* min-height: 50em;
    padding-top: 3rem;
    padding-bottom: 3rem; */
    background-color: beige;
}

.card {
    float: left;
    width: 30%;
    height: 100px;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #8c8c8c;
    border-radius: 2%;
}

.card>img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>