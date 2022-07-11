<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolInfo">点击传递数据子->父</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        props: ['getSchoolInfo'],
        data() {
            return {
                name: "网课",
                address: "上海"
            }
        },
        methods: {
            sendSchoolInfo() {
                this.getSchoolInfo(this.name)
            }
        }
    }
</script>

<style scoped>
.school {
    background: skyblue;
}
</style>