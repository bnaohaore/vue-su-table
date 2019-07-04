import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      su_table_headerData:[

      ],
  },
  mutations: {
      su_table_headerData(state,data){
         state.su_table_headerData.push(data)
      }
  },
  actions: {

  }
})
