<template>
    <div class="message-box">
        <ul>
            <li v-for="m in messageList" :key="m.id">
            <!-- 1、跳转路由，并携带 ， :to的字符串写法 -->
            <!-- <router-link :to="`/home/message/msgDetail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->
                <!-- 2、路由跳转，to的query参数写法 -->
                <router-link :to="{
                    path: '/home/message/msgDetail',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }" >{{m.id}}: {{m.title}}</router-link>
                <button @click="push(m)">push查看</button>
                <button @click="replace(m)">replace查看</button>


                <!-- 3、路由跳转，to的 params对象参数写法，需要在路由里配置 path占位符msg/:id/:title，见路由配置。而且必须使用name配置，不能 -->
                <!-- <router-link :to="{
                    name: 'xiangqing',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                }" >{{m.id}}: {{m.title}}</router-link> -->
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList: [
                {id: '001', title: '消息001'},
                {id: '002', title: '消息002'},
                {id: '003', title: '消息003'}
            ]
            
        }
    }, 
    methods: {
        push(m) {
            this.$router.push({
                name: 'xiangqing',
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        },
        replace(m) {
            this.$router.replace({
                name: 'xiangqing',
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        }
    }
}
</script>

<style scoped>
.message-box {
    margin-left: 10px;
    width: 100%;
    height: 100%;
}

li {
    color: blueviolet;
}
</style>