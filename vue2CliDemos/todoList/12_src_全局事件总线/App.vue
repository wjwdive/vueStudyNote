<template>
  <div id="app">
    <div class="app-box">
      <School></School>
      <hr>
      <Student></Student>
    </div>

  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'


// import { nanoid } from 'nanoid'

export default {
  name: 'App',
  components: {
    Student,
    School,
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
