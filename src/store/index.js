import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    loggedUser: JSON.parse(sessionStorage.getItem('loggedUser')) || null
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
      sessionStorage.setItem('loggedUser', JSON.stringify(payload));
      state.loggedUser = payload
    },
    logoutUser(state) {
      sessionStorage.removeItem('loggedUser');
      state.loggedUser = null
    }
  },
  actions: {},
  modules: {},
})
