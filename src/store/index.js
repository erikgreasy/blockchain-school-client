import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    loggedUser: null
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
    logginUser(state, payload) {
      state.loggedUser = payload
    },
    logoutUser(state) {
      state.loggedUser = null
    }
  },
  actions: {},
  modules: {},
})
