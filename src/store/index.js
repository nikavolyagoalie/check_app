import { createStore } from 'vuex'
import firebase from "firebase";

class User {
  constructor(id) {
    this.id = id
  }
}

export default createStore({
  state: {
    user: null,
    formValid: false,
    logIn: false
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setFormValid(state, bool) {
      state.formValid = bool
    },
    setLogIn(state, bool) {
      state.logIn = bool
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
          commit('setFormValid', false)
          commit('setLogIn', true)
        })
        .catch(err => {
          console.log(err)
          commit('setFormValid', true)
          commit('setLogIn', false)
        })
    }
  },
})
