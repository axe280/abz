import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuIsOpen: false,
    token: localStorage.getItem('token') || '',
    modalOpened: false,
    modalData: {
      title: 'Oops!',
      message: ''
    },
    componentFormToRerederProperty: 'componentFormToRerederPropertyKey',
    componentUsersToRerederProperty: 'componentUsersToRerederPropertyKey'
  },

  getters: {
    isMenuOpen: state => state.menuIsOpen,
    getToken: state => state.token,
    isModalOpened: state => state.modalOpened,
    getModalData: state => state.modalData,
    getFormReRenderProp: state => state.componentFormToRerederProperty,
    getUsersReRenderProp: state => state.componentUsersToRerederProperty,
  },

  mutations: {
    openMenu(state) {
      state.menuIsOpen = true;
    },

    closeMenu(state) {
      state.menuIsOpen = false;
    },

    openCloseModal(state, payload) {
      state.modalOpened = payload;
    },

    setToken(state, { token }) {
      state.token = token;
      localStorage.setItem('token', state.token);
    },

    setModalData(state, { success, message }) {
      if (success) {
        state.modalData.title = 'Congratulations';
      } else {
        state.modalData.title = 'Oops, something went wrong';
      }

      state.modalData.message = message;
    },

    forceRerenderForm(state) {
      state.componentFormToRerederProperty += 1;
    },

    forceRerenderUsers(state) {
      state.componentUsersToRerederProperty += 1;
    }
  }
});
