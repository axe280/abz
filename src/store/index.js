import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
  },

  getters: {
    isMenuOpen: (state) => state.menuIsOpen,
  },

  mutations: {
    openMenu(state) {
      state.menuIsOpen = true
    },

    closeMenu(state) {
      state.menuIsOpen = false
    }
  },

  actions: {},
  modules: {},
});
