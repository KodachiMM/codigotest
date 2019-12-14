import Vue from 'vue';
import router from './route';

import './config.js';
import './axios_intercept.js';

import Main from './Main';

new Vue({
	el: '#app',
	router,
    components: { Main },
	template: '<Main></Main>',
});