<template>
<div class="content">
    <div class="body-section">
        <router-link replace to="/home/news" class="sub-nav">新闻</router-link>
        <router-link :replace="true" to="/home/message"  class="sub-nav">信息</router-link>
    </div>
    <!-- 缓存一个写组件名，缓存多个写数组，里面是组件名 缓存单个组件，直接写组件名 -->
    <!-- <keep-alive include="'News'"></keep-alive> -->
    <keep-alive :include="['News']">
        <router-view></router-view>
    </keep-alive>
</div>

</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style scoped>
.content {
    display: flex;
    justify-content: start;
    flex-direction: column;
}
.body-section {
    margin-left: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    text-align: center;

}
.sub-nav {
    width: 50px;
    height: 20px;
}

</style>