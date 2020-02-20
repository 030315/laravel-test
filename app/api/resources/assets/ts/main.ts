import Vue from 'vue';
import vuetify from './plugins/vuetify';

import App from './App.vue';
import router from './router';
import bootstrap from './bootstrap';

Vue.config.productionTip = false;

bootstrap();

const app = new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})
