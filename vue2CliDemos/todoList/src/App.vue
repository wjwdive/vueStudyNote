<template>
  <div id="app">
    <div>
      <Banner />
      <div class="container">
        <ul class="nav nva-tabs">
          <li>
            <router-link class="left-menu" active-clase="active" to="/home">主页</router-link>
          </li>
          <li>
            <router-link class="left-menu" active-clase="active" to="/about">关于</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>


    </div>
  </div>
</template>

<script>

import Banner from './components/Banner'
// import About from './pages/About'


export default {
  name: 'App',
  components: {
    Banner,
    // Home,
    // About
  },
  data() {
    return {

    }
  },

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

.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: azure;
  width: 100%;
  height: 90%;
}

.nva-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: azure;
  width: 100px;
  height: 100%;
}

.left-menu {
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: beige;

}

li :active {
  background-color: aqua;
}

hr {
  height: 1px;
}
</style>
