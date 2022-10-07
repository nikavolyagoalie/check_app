export default {
    namespaced: true,
    state: {
        objects: [],
        cities: ["fds", "dsfsdf", "sdfsdfsd", "sdfsdfs", "qwqwqwqwqw"],
        nameObj: "",
        addressObj: "",
        selectedCity: "",
        toCalendar: false,
        closeNewObjModal: false,
    },
    getters: {
        nameObj(state) {
            return state.nameObj
        },

        addressObj(state) {
            return state.addressObj
        },

        selectedCity(state) {
            return state.selectedCity
        },

        cities(state) {
            return state.cities
        },
    },
    mutations: {
        setObjects(state, objects) {
            state.objects = objects
        },
        setCities(state, cities) {
            state.cities = cities
        },
        setNameObj(state, name) {
            state.nameObj = name
        },
        setAddressObj(state, address) {
            state.addressObj = address
        },
        setSelectedCity(state, city) {
            state.selectedCity = city
        },
        goToCalendar(state, bool) {
            state.toCalendar = bool
        },
        toCloseNewObjModal(state, bool) {
            state.closeNewObjModal = bool
        }
    },
    actions: {
        addObject({ commit, state }) {

            let newObj = {
                nameObj: state.nameObj,
                addressObj: state.addressObj,
                selectedCity: state.selectedCity,
            }
            commit('setObjects', newObj)
            console.log(newObj)
            commit('goToCalendar', true)
            commit('toCloseNewObjModal', false)
        },

        addObj({ commit }) {
            commit('toCloseNewObjModal', true)
        },
        closeModal({ commit }) {
            commit('toCloseNewObjModal', false)
            commit('setNameObj', '')
            commit('setAddressObj', '')
            commit('setSelectedCity', '')
        },

        goBack({ commit }) {
            commit('goToCalendar', false)
            commit('setNameObj', '')
            commit('setAddressObj', '')
            commit('setSelectedCity', '')
        }

    }
}