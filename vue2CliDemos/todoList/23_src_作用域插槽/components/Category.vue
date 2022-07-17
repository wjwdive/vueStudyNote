<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- <ul v-for="(item, index) in listData" :key="index">
            <li>{{ item }}</li>
        </ul> -->
        <!-- 作用域插槽，语法和默认插槽一样 使用场景：数据在此组件里，调用者不能拿到数据， -->
        <slot :games="games" :msg="msg"></slot>

    </div>
</template>
<!-- 
    视频地址：https://www.bilibili.com/video/BV1f34y1p7MR?t=4.5
    图片地址：https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F25%2F20210625220950_2b6b7.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660566928&t=f9223012b1fbb9584d1a9011af0977e6
    https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile03.16sucai.com%2F2017%2F1100%2F16sucai_p20161119185_3a1.JPG&refer=http%3A%2F%2Ffile03.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660566962&t=9de41d30b1fbca7dad96b191bc868043
 -->

<script>
    export default {
        name: "Category",
        props:['title'],
        data() {
            return {
                msg: "网络游戏区",
                games: ['DOTA', 'LOL','天下3'],
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
.category {
    background-color: coral;
    height: 400px;
    width: 200px;
    flex-flow: column;
}
li {
    text-align: left;
}

.image {
    width: 150px;
    height: 150px;
}
</style>