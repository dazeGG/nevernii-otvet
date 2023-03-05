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
	top: -2rem;
	font-size: 1rem;
	width: fit-content;
}

@mixin input-text {
	font-size: 1.2rem;
	padding: 0.5rem 1rem;

	@media only screen and (max-width: 480px) {
		font-size: 1rem;
	}
}

.no-input {
	width: 100%;
	position: relative;
	margin-top: 1.2rem;

	* {
		transition: var(--default-transition);
		width: 100%;
	}

	&__label {
		@include input-text;

		position: absolute;
		z-index: 2;
		left: 0;
		top: -0.1rem;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		cursor: pointer;

		&.active {
			@include label-active;
		}
	}

	&__input {
		@include input-text;

		background-color: var(--color-background-mute);
		border: 2px solid var(--color-border);
		outline: none;
		color: var(--color-heading);
		border-radius: 5px;

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
