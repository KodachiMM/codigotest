<template>
	<component :is="isLayout">
		<router-view></router-view>
	</component>
</template>

<script>
const default_layout = "default";

export default {
	computed: {
		isLayout() {
			return (this.$route.meta.layout || default_layout) + "-layout";
		}
	}
}
</script>