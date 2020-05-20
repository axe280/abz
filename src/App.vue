<template>
  <div id="app" @click.self="menuIsOpen = false" :class="menuIsOpen ? 'menu_opened' : ''">
    <div class="site-wrapper">
      <!-- header -->
      <header-page @menuOpen="menuIsOpen = true"></header-page>
      <!-- end header -->

      <main class="main">
        <main-banner></main-banner>
        <acquainted></acquainted>
        <users></users>
        <form-component></form-component>
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
import HeaderPage from "./components/Header.vue";
import MainBanner from "./components/MainBanner.vue";
import Acquainted from "./components/Acquainted.vue";
import Users from "./components/Users.vue";
import FormComponent from "./components/Form.vue";

export default {
  name: "App",
  components: {
    HeaderPage,
    MainBanner,
    Acquainted,
    Users,
    FormComponent
  },

  data() {
    return {
      menuIsOpen: false
    };
  }
};
</script>
