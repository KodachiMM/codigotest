// Add a request interceptor
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	let token = localStorage.getItem('access_token');

	if (token != null) {
		config.headers['Content-type'] = 'application/json';
		config.headers['Accept'] = 'application/json';
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	// Do something with response data
	if (typeof response.data != 'object') {
		console.log('Something went wrong.');
	}

	return response;
}, function (error) {
	// Do something with response error
	if (error.response.status == 401) {
		localStorage.removeItem('access_token');
		window.location.href = '/login';
	}

	return Promise.reject(error);
});