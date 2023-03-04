<template lang="pug">
label.no-input
	input.no-input__input(:type="type" v-model="inputValue" @input="onInput")
	.no-input__label(:class="{active: inputValue}") {{ label }}
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'NOInput',
	props: {
		label: String,
		type: {
			type: String,
			default: 'text',
		},
		value: {
			type: String,
			default: '',
		},
	},
	model: {
		prop: 'value',
		event: 'input',
	},
	data () {
		return {
			inputValue: this.value,
		};
	},
	methods: {
		onInput () {
			this.$emit('input-data', this.inputValue);
		},
	},
});
</script>

<style lang="scss">
@mixin label-active {
	top: -2.3rem;
	font-size: 1rem;
	width: fit-content;
}

.no-input {
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: 2rem;

	* {
		transition: var(--default-transition);
	}

	&__label {
		font-size: 1.5rem;
		position: absolute;
		z-index: 2;
		left: 0;
		top: -0.1rem;
		width: 100%;
		height: 100%;
		padding-left: 0.75rem;
		display: flex;
		align-items: center;

		&.active {
			@include label-active;
		}
	}

	&__input {
		background-color: var(--color-background-mute);
		border: 1px solid var(--color-border);
		padding: 0.75rem;
		outline: none;
		color: var(--color-heading);
		border-radius: 5px;
		font-size: 1.5rem;

		&:focus {
			border-color: var(--color-border-hover);

			+ .no-input {
				&__label {
					@include label-active;
				}
			}
		}
	}
}
</style>
