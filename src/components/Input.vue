<template lang="pug">
label.no-input
	span.no-input__label {{ label }}
	input.no-input__input(:type="type")
</template>

<script lang="ts">
export default {
	name: 'NOInput',
	props: {
		label: String,
		type: {
			type: String,
			default: 'text',
		},
	},
};
</script>

<style lang="scss">
.no-input {
	display: flex;
	flex-direction: column;
}
</style>
