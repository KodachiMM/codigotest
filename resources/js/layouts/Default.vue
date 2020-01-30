<template>
	<div>
		<user-header></user-header>

		<div class="container-fluid">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import store from "../store";
import UserHeader from "../components/UserHeader.vue";

export default {
	store,
	components: { UserHeader },
	created() {
		let token = localStorage.getItem('access_token');

		if (token != null) {
			this.$store.dispatch('fetchPackages');
		}
	}
};
</script>
