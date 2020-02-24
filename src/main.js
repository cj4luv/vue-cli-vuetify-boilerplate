import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueCookies from 'vue-cookies';

import vuetify from '@plugins/vuetify';
import router from '@plugins/router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookies);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
