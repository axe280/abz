<template>
  <header class="header" id="header">
    <div class="container">
      <div class="logo">
        <a href="/">
          <img src="../assets/img/logo.svg" alt="logo" />
        </a>
      </div>

      <div class="head-menu">
        <div
          @click="openMenu"
          class="burger-menu"
        >
          <div class="burger-menu-box">
            <div class="burger-menu-inner"></div>
          </div>
        </div>

        <div class="menu-wrapper-fixed">
          <div class="menu-open-wrapper">
            <nav class="header-nav">
              <ul class="menu">
                <li class="menu-item">
                  <a class="menu-item__link" href="#">About me</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link active" href="#">Relationships</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Requirements</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Users</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Sign Up</a>
                </li>
              </ul>

              <ul class="menu menu_devices">
                <li class="menu-item">
                  <a class="menu-item__link" href="#">How it works</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Partnership</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Help</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Leave testimonial</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Contact us</a>
                </li>
              </ul>

              <ul class="menu menu_devices">
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Articles</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Our news</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Testimonials</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Licenses</a>
                </li>
                <li class="menu-item">
                  <a class="menu-item__link" href="#">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['openMenu'])
  }
}
</script>