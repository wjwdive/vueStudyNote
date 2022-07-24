<template>
    <div class="news-box">
        <li :style="{opacity}">一个呼吸灯</li>
        <li>aaa <input type="text"></li>
        <li>bbb <input type="text"></li>
        <li>ccc <input type="text"></li>
    </div>
</template>

<script>

export default {
    name: 'News',
    data() {
        return {
            opacity : 1,
        }
    },
    //这两个生命周期钩子比较特殊，用在缓存的组件上
    //适合和缓存的路由组件配合使用，缓存的路由组件不被销毁，
    activated() {
        console.log('News组件被激活')
        //选16ms， 一帧一变
        this.timer = setInterval(() => {
            console.log('开始了定时器')
             this.opacity -= 0.01
            if(this.opacity <= 0) {
                this.opacity = 1
            }
        }, 16);
    },

    deactivated() {
        console.log('News组件失活了')
        clearInterval(this.timer)
    }
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