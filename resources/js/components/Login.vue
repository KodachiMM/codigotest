<template>
	<div class="signin-form">
		<form class="form-signin" @submit.prevent="handleLogin">
			<div class="card">
				<div class="card-block">
					<h1 class="h3 mb-3 font-weight-normal text-center mb-5">Members Login</h1>

					<div v-if="loginError">
						<div class="alert alert-danger" role="alert">Invalid username or password.</div>
					</div>

					<div class="form-group">
						<input
							type="text"
							name="email"
							v-model="auth.email"
							v-validate="'required|email'"
							:class="errors.has('email') ? 'form-control is-invalid' : 'form-control'"
							placeholder="Email"
						/>
						<span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
					</div>

					<div class="form-group">
						<input
							type="password"
							name="password"
							v-model="auth.password"
							v-validate="'required'"
							:class="errors.has('password') ? 'form-control is-invalid' : 'form-control'"
							placeholder="Password"
						/>
						<span class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</span>
					</div>

					<button class="btn btn-lg btn-primary btn-block my-5" type="submit">Sign in</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loginError: false,

			auth: {
				email: null,
				password: null
			}
		};
	},

	methods: {
		handleLogin() {
			this.$validator.validateAll().then(successsValidate => {
				if (successsValidate) {
					this.submit();
				}
			});
		},

		async submit() {
			let that = this;
			let url = "/api/login";

			await axios
				.post(url, this.auth)
				.then(({ data }) => {
					if (data.status == "success") {
						localStorage.setItem("access_token", data.token);
						this.$router.push("/packages");
					}
				})
				.catch(error => {
					this.loginError = true;
				});
		}
	}
};
</script>