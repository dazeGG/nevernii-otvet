<template lang="pug">
button.no-button.no-button-no(@click="$emit('button-click')" ref="buttonElement")
	h3 {{ text }}
</template>

<script lang="ts">
import {defineComponent, ref, onMounted, onUnmounted} from 'vue';

import {checkLeft, checkTop, checkRight, checkBottom} from '@/utils/checkButtonSidesByMouse';

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

		const mouseCoordsCheck = (event: MouseEvent) => {
			// console.log(event);
			// console.log(buttonElement.value.getBoundingClientRect());
			const buttonRect: DOMRect = buttonElement.value.getBoundingClientRect();

			const mouseX: number = event.x || event.clientX;
			const mouseY: number = event.y || event.clientY;

			const buttonLeftX: number = buttonRect.x || buttonRect.left;
			const buttonRightX: number = buttonLeftX + buttonRect.width;
			const buttonTopY: number = buttonRect.y || buttonRect.top;
			const buttonBottomY: number = buttonTopY + buttonRect.height;

			const left: boolean = checkLeft(offset, mouseX, mouseY, buttonLeftX, buttonTopY, buttonBottomY);
			const top: boolean = checkTop(offset, mouseX, mouseY, buttonTopY, buttonLeftX, buttonRightX);
			const right: boolean = checkRight(offset, mouseX, mouseY, buttonRightX, buttonTopY, buttonBottomY);
			const bottom: boolean = checkBottom(offset, mouseX, mouseY, buttonBottomY, buttonLeftX, buttonRightX);
		};

		onMounted(() => document.addEventListener('mousemove', mouseCoordsCheck));
		onUnmounted(() => document.removeEventListener('mousemove', mouseCoordsCheck));

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
