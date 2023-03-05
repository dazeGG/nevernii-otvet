<template lang="pug">
button.no-button(@click="$emit('button-click')")
	h3 {{ text }}
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'NOButton',
	props: {
		text: {
			type: String,
			required: true,
		},
	},
});
</script>

<style lang="scss">
.no-button {
	background-color: hsl(160deg 100% 37% / 100%);
	border-radius: 5px;
	padding: 0.5rem 1rem;
	font: inherit;
	border: none;
	cursor: pointer;
	color: var(--color-heading);

	h3 {
		font-size: 1.2rem;

		@media only screen and (max-width: 480px) {
				font-size: 1rem;
		}
	}
}
</style>
