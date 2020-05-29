<template>
  <section class="main-banner">
    <div class="banner-img">
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="
            ../assets/img/banner-photo_mob_768.jpg 768w,
            ../assets/img/banner-photo_mob_1366.jpg 1366w"
        >
        <source
          media="(min-width: 768px) and (max-width: 991px)"
          srcset="
            ../assets/img/banner-photo_mob_768.jpg 768w,
            ../assets/img/banner-photo_mob_1366.jpg 1366w,
            ../assets/img/banner-photo_mob_1982.jpg 1982w"
        >
        <img
          srcset="
            ../assets/img/banner-photo_992.jpg 992w,
            ../assets/img/banner-photo_1807.jpg 1807w,
            ../assets/img/banner-photo_2470.jpg 2470w,
            ../assets/img/banner-photo_3786.jpg 3786w,
            ../assets/img/banner-photo_5000.jpg 5000w"
          src="../assets/img/banner-photo_5000.jpg"
          alt=""
        >
      </picture>
    </div>
    <div class="container">
      <h1>Test assignment for Frontend Developer position</h1>
      <p>
        We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
        <span
          class="hidden-mobile"
        >Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens</span>
      </p>
      <button 
        v-scroll-to="'#formWrapper'"
        class="btn"
        type="button"
      >Sing up now</button>
    </div>
  </section>
</template>