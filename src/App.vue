<template>
  <div 
    id="app"
    @click.self="closeMenu"
    :class="isMenuOpen ? 'menu_opened' : ''"
  >
    <modal v-if="isModalOpened"></modal>

    <div class="site-wrapper">
      <header-page></header-page>

      <main class="main">
        <main-banner></main-banner>
        <acquainted></acquainted>
        <users :key="getUsersReRenderProp"></users>
        <form-component :key="getFormReRenderProp"></form-component>
      </main>
    </div>

    <!-- footer -->
    <footer class="footer" id="footer">
      <div class="container">
        <span class="copy">© abz.agency specially for the test task</span>
      </div>
    </footer>
    <!-- end footer -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getTokenApi } from "./api";
import HeaderPage from "./components/Header.vue";
import MainBanner from "./components/MainBanner.vue";
import Acquainted from "./components/Acquainted.vue";
import Users from "./components/Users.vue";
import FormComponent from "./components/Form.vue";
import Modal from './components/Modal.vue';

export default {
  name: "App",
  components: {
    HeaderPage,
    MainBanner,
    Acquainted,
    Users,
    FormComponent,
    Modal
  },

  computed: {
    ...mapGetters([
      'isMenuOpen',
      'getToken',
      'isModalOpened',
      'getFormReRenderProp',
      'getUsersReRenderProp'
    ])
  },

  methods: {
    ...mapMutations(['closeMenu', 'setToken'])
  },

  async created() {
    const token = this.getToken;

    if (!token) {
      try {

        const tokenData = await getTokenApi();
        this.setToken(tokenData);

      } catch(e) {
        // proccess network errors
      }
    }
  }
};
</script>
