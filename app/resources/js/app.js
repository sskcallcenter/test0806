require('./bootstrap');
window.Vue = require('vue');

import router from './router';	// ①
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify);

Vue.component('user-header-component', require('./components/User/HeaderComponent.vue').default);
Vue.component('user-footer-component', require('./components/User/FooterComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,						// ②
    vuetify: new Vuetify()
});
