<template>
    <div>
        <h1>我是一个顶部Banner</h1>
        <button @click="back">后退</button>
        <button @click="forward">后退</button>

    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back(){
            this.$router.back() 
        },
        forward() {
            this.$router.forward() 
        }

    }
}
</script>

<style scoped>
</style>