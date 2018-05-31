import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export const store = new Vuex.Store({
    //
    state:{
        lists:[
            {name:'马云',price:300},
            {name:'马化腾',price:250},
            {name:'王健林',price:200},
            {name:'许家印',price:180},
            {name:'丁磊',price:150},
            {name:'雷军',price:120},
        ]
    },
    getters:{
        newlists:(state)=>{
            var newlists =state.lists.map((item)=>{
                return{
                    name:'*'+item.name+'*',
                    // price:item.price/2
                    price:item.price
                }
            });
            return newlists
        }
    },
    // 在 store 上注册 mutation，处理函数总是接受 state 作为第一个参数（如果定义在模块中，则为模块的局部状态），payload 作为第二个参数（可选）。
    mutations:{
      addprice:(state,payload)=>{
        state.lists.forEach(item=>{
          item.price += payload
        })
      }
    },
    // 在 store 上注册 action。处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。
    actions:{
      addprice:(context,payload)=>{
        setTimeout(function(){
          context.commit('addprice',payload)
        },500)
      }
    }
})
