import Router from 'vue-router';

const router = new Router({
	mode: 'history',
	routes: [
        {
            path: '/',
            name: 'index',
			component: () => import('./components/Package'),
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/packages',
            name: 'package',
			component: () => import('./components/Package'),
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/packages/:id',
            name: 'packageOrder',
			component: () => import('./components/PackageOrder'),
			meta: {
				requiresAuth: true,
			},
		},
		{
            path: '/success',
            name: 'success',
			component: () => import('./components/Success'),
			meta: {
				requiresAuth: true,
			},
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('./components/Login'),
			meta: {
				layout: 'no-sidebar',
				requiresAuth: false,
				isLogin: true,
			}
		},
		{
			path: "*",
			name: "404*",
			component: () => import('./errors/NotFound'),
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
