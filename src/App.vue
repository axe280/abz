<template>
  <div 
    id="app"
    @click.self="menuIsOpen = false"
    :class="menuIsOpen ? 'menu_opened' : ''"
  >
    <div class="site-wrapper">

      <!-- header -->
      <header-page
        @menuOpen="menuIsOpen = true"
      ></header-page>
      <!-- end header -->

      <main class="main">
        
        
        <div class="container">
          <button class="btn btn_flat">button</button>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maiores voluptate harum ut nulla officia odio officiis odit quasi quis illo sit ullam laboriosam, incidunt ipsam repudiandae sunt praesentium tempora.</p>
        </div>
        
      </main>
    </div>


    <!-- footer -->
    <footer class="footer" id="footer">
      <div class="container">
        <span class="copy">Design by Axe</span>
      </div>
    </footer>
    <!-- end footer -->
  </div>
</template>

<script>
import HeaderPage from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderPage
  },

  data() {
    return {
      menuIsOpen: false
    }
  }
}
</script>
