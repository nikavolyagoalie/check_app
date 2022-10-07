import firebase from "firebase";

class User {
  constructor(id) {
    this.id = id
  }
}

export default {
    namespaced: true,
    state: {
        user: null,
        formValid: false,
        logIn: false,
        emailSend: '',
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
        },
        setEmailSend(state, email) {
            state.emailSend = email
        },
    },
    actions: {
        getToken() {
            const uid = 'paT91fKGPxXFFu7d0n08wE3qsz13'
            firebase.getAuth().createCustomToken(uid).then((token) => {
                console.log('Custom token created:', token);
            }).catch((err) => {
                console.log('Error:', err);
            });
        },

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
        },

        resetPassword({ commit }, { email }) {
            firebase.auth().sendPasswordResetEmail(email)
                .then(() => {
                    commit('setEmailSend', email)
                })
                .catch((error) => {
                    alert(error, ' Error!!!')
                });
        }
    },
}