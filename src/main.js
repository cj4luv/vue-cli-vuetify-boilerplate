import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import vuetify from '@plugins/vuetify';
import router from '@plugins/router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
}).$mount('#app');
