export default {
    namespaced: true,
    actions: {
        //用来练习 dispatch -- commit -->mutations
        addPersonWang(context, value) {
            
            if(value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            }else {
                alert('添加人员需王姓')
            }
        }

    },
    mutations: {
        ADD_PERSON(state, value) {
            if(value.name.trim() === '') {
                console.log("indexOf('')")
                alert("添加人员姓名不能为空")
                return
            }
            console.log('添加数据')
            state.personList.unshift(value)
        },
    },
    state: {
        personList:[
            {id: '001', name: '张三'}
        ],
    },
    getters: {
        //练习， state只作用域此模块   getters是挂载在 $store.state里
        firsetPersonName(state) {
            return state.personList[0].name
        }
    }
}