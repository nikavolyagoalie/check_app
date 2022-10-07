export default {
  namespaced: true,
  state: {
    closeModal: false,
    types: ['Объект', 'Доставка'],
    tasks: ['Проверка качества кухни', 'Проверка качества обслуживания', 'Проверка внешнего вида сотрудников'],
    checkers: ['Ник Юр', 'sdfds fsdf'],
    selectedTask: '',
    selectedType: '',
    selectedChecker: '',
    checkObj: '',
  },
  getters: {
    selectedTask(state) {
      return state.selectedTask
    },
    selectedType(state) {
      return state.selectedType
    },
    selectedChecker(state) {
      return state.selectedChecker
    },
    types(state) {
      return state.types
    },
    tasks(state) {
      return state.tasks
    },
    checkers(state) {
      return state.checkers
    },
  },
  mutations: {
    setOpenModal(state, bool) {
      state.openModal = bool
    },
    setTypes(state, type) {
      state.selectedType = type
    },
    setTasks(state, task) {
      state.selectedTask = task
    },
    setCheckers(state, checker) {
      state.selectedChecker = checker
    },
    setCheckObj(state, obj) {
      state.obj = obj
    },
  },
  actions: {
    createCheck({ commit }) {
      commit('setOpenModal', true)
    },

    addObject({ commit, state }) {

      let newObj = {
        task: state.selectedTask,
        type: state.selectedType,
        checker: state.selectedChecker,
      }

      console.log(newObj)

      commit('setCheckObj', newObj)
      // commit('goToCalendar', true)
      // commit('toCloseNewObjModal', false)
    },
    closeModal({ commit }) {
      commit('setOpenModal', false)
      commit('setTypes', '')
      commit('setTasks', '')
      commit('setCheckers', '')
    },
  },
}
