import axios from "axios"
import { nanoid } from "nanoid"
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
        },
        //用来练习，请求服务器得到数据后 添加到列表
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
                },
                error => {
                    alert(error.message)
                }
            )
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