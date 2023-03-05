<template lang="pug">
.home-page
	RouterLink(:to="Routes.create")
		h1 Создай вопрос
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import {RouterLink} from 'vue-router';
import Routes from '@/router/Routes';

export default defineComponent({
	name: 'HomePage',
	components: {
		RouterLink,
	},
	setup () {
		return {Routes};
	},
});
</script>

<style lang="scss">
.home-page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
