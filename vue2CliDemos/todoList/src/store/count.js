export default {
    namespaced: true,
    actions: {
        incrementOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit("INCREMENT_ODD", value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT_WAIT', value)
            }, 1000);
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.sum += value;
        },
        DECREMENT(state, value) {
            state.sum -= value;
        },
        INCREMENT_ODD(state, value) {
            state.sum += value;
        },
        INCREMENT_WAIT(state, value) {
            state.sum += value;
        },
    },
    state: {
        sum: 0,
        school: "复旦大学",
        subject: "哲学系",
    },
    getters: {
        bigSum(state) {
            //写返回值
            return state.sum * 10
        }
    }
}