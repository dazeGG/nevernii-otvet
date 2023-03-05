<template lang="pug">
button.no-button.no-button-no(@click="$emit('button-click')" ref="buttonElement")
	h2 {{ text }}
</template>

<script lang="ts">
import {defineComponent, ref, onMounted} from 'vue';

export default defineComponent({
	props: {
		text: {
			type: String,
			required: true,
		},
	},
	setup () {
		const buttonElement = ref<HTMLElement>(null);

		const offset: number = 40;

		const checkLeft = (mouseX: number, buttonLeft: number): boolean => buttonLeft - mouseX <= offset;
		const checkTop = (mouseY: number, buttonTop: number): boolean => buttonTop - mouseY <= offset;
		const checkRight = (mouseX: number, buttonRight: number): boolean => mouseX - buttonRight <= offset;
		const checkBottom = (mouseY: number, buttonRight: number): boolean => mouseY - buttonRight <= offset;

		const mouseCoordsCheck = (event: MouseEvent) => {
			// console.log(event);
			// console.log(buttonElement.value.getBoundingClientRect());
			const buttonRect: DOMRect = buttonElement.value.getBoundingClientRect();
			const left: boolean = checkLeft(event.x || event.clientX, buttonRect.x || buttonRect.left);
			const top: boolean = checkTop(event.y || event.clientY, buttonRect.y || buttonRect.top);
			const right: boolean = checkRight(event.x || event.clientX, buttonRect.x + buttonRect.width || buttonRect.right);
			const bottom: boolean = checkBottom(event.y || event.clientY, buttonRect.y + buttonRect.height || buttonRect.bottom);
		};

		onMounted(() => addEventListener('mousemove', (event: MouseEvent) => mouseCoordsCheck(event)));

		return {buttonElement};
	},
});
</script>

<style lang="scss">
.no-button-no {
	background-color: var(--color-text);
	position: relative;
}
</style>
