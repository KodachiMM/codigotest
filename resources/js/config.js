import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import axios from 'axios';

window.axios = axios;

Vue.use(VueRouter);
Vue.use(VeeValidate);

import Default from './layouts/Default';
import NoSidebar from './layouts/NoSidebar';

Vue.component('default-layout', Default);
Vue.component('no-sidebar-layout', NoSidebar);