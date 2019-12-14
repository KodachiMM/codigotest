<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<a class="navbar-brand"><strong>CodigoTest</strong></a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse ml-5" id="navbarText">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/packages">
							Packages
						</router-link>
					</li>
				</ul>
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="nav-item nav-link logout-btn" @click="handleLogout">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	methods: {
		handleLogout() {
			axios
				.get("/api/logout")
				.then(({ data }) => {
					localStorage.removeItem("access_token");
					this.$router.push("/login");
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
}
</script>