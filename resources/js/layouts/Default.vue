<template>
	<div>
		<user-header></user-header>

		<div class="container-fluid">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import UserHeader from "../components/UserHeader.vue";

export default {
	components: { UserHeader },
};
</script>