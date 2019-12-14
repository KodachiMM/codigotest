import Router from 'vue-router';

import Login from './components/Login';
import Package from './components/Package';
import PackageOrder from './components/PackageOrder';
import Success from './components/Success';
import NotFound from './errors/NotFound';

const router = new Router({
	mode: 'history',
	routes: [
        {
            path: '/',
            name: 'index',
			component: Package,
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/packages',
            name: 'package',
			component: Package,
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/packages/:id',
            name: 'packageOrder',
			component: PackageOrder,
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/success',
            name: 'success',
			component: Success,
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: {
				layout: 'no-sidebar',
				requiresAuth: false,
				isLogin: true,
			}
		},
		{
			path: "*",
			name: "404*",
			component: NotFound,
			meta: {
				layout: 'no-sidebar',
				requiresAuth: false,
			}
		}
    ],
});

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		let token = localStorage.getItem('access_token');

		//If Token Not Exists In Storage
		if (!token) {
			next({ name: 'login' });
		} 

		if (token) {
			next();
		}
	} else {
		let token = localStorage.getItem('access_token');

		if (to.matched.some(record => record.meta.isLogin)) {
			if (token) {
				next({ name: 'package' });
			}
		}
	}

	next();
});

export default router;