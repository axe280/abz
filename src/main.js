import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuelidate from 'vuelidate';
import VueScrollTo from "vue-scrollto";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueScrollTo);
Vue.use(Vuelidate);

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

// SASS
import './assets/sass/main.sass';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
