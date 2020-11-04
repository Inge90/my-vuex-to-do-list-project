import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos';

Vue.use(Vuex)

//Vuex, let's create a store
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  //Each module can contain its own state, mutations, actions, getters, and even nested modules
  modules: {
    todos
  }
})
