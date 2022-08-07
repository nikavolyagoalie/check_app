import { createStore } from 'vuex'
import firebase from "firebase";

class User {
  constructor(id) {
    this.id = id
  }
}

export default createStore({
  state: {
    user: null
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    registerUser({ commit }, { email, password }) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', new User(user.uid))
        })
    },

    loginUser({ commit }, { email, password }) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', new User(user.uid))
        })
    }
  },
})
