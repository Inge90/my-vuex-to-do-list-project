// There are several ways to do so, but a very popular approach is to use axios, a promise-based HTTP client.
import axios from 'axios';

//Empty to do list
const state = {
  todos: []
};

// access values as properties
const getters = {
  DataList: state => state.todos
};

//Actions can contain arbitrary asynchronous operations.
const actions = {
  //Displays data is on to do to json lists  
  async ListTodos({ commit }) {
    const response = await axios.get(
    //Free to use fake Online REST API for testing and prototyping
      'https://jsonplaceholder.typicode.com/todos'
    );
    commit('SetListTodos', response.data);
  },

  //adds a new to-do list item
  async AddListTodo({ commit }, title) {
    const response = await axios.post(
    //Free to use fake Online REST API for testing and prototyping
      'https://jsonplaceholder.typicode.com/todos',
      { title, completed: false }
    );
    commit('AddToList', response.data);
  },

  //deletes the to do list
  async DeleteListTodo({ commit }, id) {
    //Free to use fake Online REST API for testing and prototyping
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('DeleteTodo', id);
  },

  //filters the to-do list
  async FilterList({ commit }, each) {
    // Get selected number
    const limit = parseInt(
        each.target.options[each.target.options.selectedIndex].innerText
    );
    const response = await axios.get(
    //Free to use fake Online REST API for testing and prototyping
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    commit('SetListTodos', response.data);
  },

  //Updates to-do list changes
  async UpdateList({ commit }, update) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${ update.id}`,
      update
    );
    commit('UpdateList', response.data);
  }
};

//Vuex mutations are very similar to events: each mutation has a string type and a handler.
const mutations = {
  SetListTodos: (state, todos) => (state.todos = todos),
  AddToList: (state, todo) => state.todos.unshift(todo),
  DeleteTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  UpdateList: (state, updataTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updataTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updataTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
