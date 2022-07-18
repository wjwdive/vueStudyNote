import Vue from 'vue'
import Vuex from 'vuex'

import count from './count'
import person from './person'
//应用vuex插件
Vue.use(Vuex)


export default new Vuex.Store({
    //模块化引入 子模块
    modules: {
        countAbout: count,
        personAbout: person
    }

})