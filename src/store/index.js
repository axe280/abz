import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    token: localStorage.getItem('token') || ''
  },

  getters: {
    isMenuOpen: state => state.menuIsOpen,
    getToken: state => state.token
  },

  mutations: {
    openMenu(state) {
      state.menuIsOpen = true;
    },

    closeMenu(state) {
      state.menuIsOpen = false;
    },

    setToken(state, { token }) {
      state.token = token;
      localStorage.setItem('token', state.token);
    }
  }
});
