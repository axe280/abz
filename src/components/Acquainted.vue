<template>
  <section class="acquainted-section">
    <div class="container">
      <div class="seciton-header">
        <div class="title-site title-site_h1 text_center">Let's get acquainted</div>
      </div>
      <div class="acquainted-info">
        <div class="acquainted-info__img">
          <img src="../assets/img/man-laptop-v1.svg" alt />
        </div>
        <div class="acquainted-info__text">
          <h2>I am cool frontend developer</h2>
          <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
          <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page PSD mockup into HTML5/CSS3.</p>
          <button 
            v-scroll-to="'#formWrapper'"
            class="btn btn_flat"
            type="button"
          >Sing up now</button>
        </div>
      </div>
    </div>
  </section>
</template>