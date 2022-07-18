import Vue from 'vue'
import Vuex from 'vuex'

//应用vuex插件
Vue.use(Vuex)

//准备actions--用于响应组件中的动作
/** 
 * 业务一旦复杂，就体现出action的作用了，actions中 如果有很多先后要处理的业务逻辑，就可以写一些列的方法。处理复杂逻辑。
 * 若没有网络请求和其他业务逻辑，可以越过actions，直接写commit
 */
const actions = {
    //actions中不需要特殊处理和判断逻辑，直接commit可以在actoins中省略，直接在调用的时候用$commit
    //incremnet: function() { 简写
    // incremnet(context, value) {
    //     console.log('context: ',context)
    //     console.log('value: ',value)
    //     context.commit('INCREMENT', value)
    // },
    // decrement(context, value) {
    //     context.commit("DECREMENT", value)
    // },
    incrementOdd(context, value) {
        if(context.state.sum %2 ){
            context.commit("INCREMENT_ODD", value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT_WAIT', value)
        }, 1000);
    }
}
//准备mutations--用于操作数据state
const mutations = {
    INCREMENT(state, value) {
        state.sum += value;
    },
    DECREMENT(state, value) {
        state.sum -= value;
    },
    INCREMENT_ODD(state, value){
        state.sum += value;
    },
    INCREMENT_WAIT(state, value) {
        state.sum += value;
    }

}
//准备state--用于存储数据
const state = {
    sum: 0,
    school: "复旦大学",
    subject: "哲学系",
}

//getters 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        //写返回值
        return state.sum*10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})