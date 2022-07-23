<template>
    <div class="news-box">
        <li>aaa <input type="text"></li>
        <li>bbb <input type="text"></li>
        <li>ccc <input type="text"></li>
    </div>
</template>

<script>
export default {
    name: 'News'
}
</script>

<style scoped>
.news-box {
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-left: 10px;
    width: 100px;
    height: 100%;
}
li {
    display: flex;
    justify-content: start;
    flex-direction: row;
    text-align: left;
    height: 20px;
}
</style>