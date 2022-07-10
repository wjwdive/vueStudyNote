<!-- 组件：实现局部功能的代码和资源的集合 -->
<!-- template不参与编译，浏览器解析后值剩内部元素 -->
<template>
    <div>
        <h2>学生名字：{{ studentName }}</h2>
        <h2>学生姓名：{{ studentAge }}</h2>
    </div>
</template>

<script>

//默认导出模块，方便其他模块引入
export default {
    name: 'school',
    data() {
        return {
            schoolName: 'wjw',
            schoolAddress: '上海'
        }
    },
}
//缩写如上面
// Vue.extend({

// })

</script>

<style>
</style>