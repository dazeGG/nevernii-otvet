<template lang="pug">
header.header
slot
footer.footer
	span
		| Создано&nbsp;
		a(href="https://github.com/dazeGG" target="_blank") dazeGG
		| &nbsp;и&nbsp;
		a(href="https://github.com/karioka21" target="_blank") karioka21
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
footer.footer {
	text-align: center;

	> span {
		opacity: 0.5;
		transition: var(--default-transition);

		&:hover {
			opacity: 1;
		}
	}
}
</style>
