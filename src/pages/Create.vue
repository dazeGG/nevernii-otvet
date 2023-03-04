<template lang="pug">
.create-page
	h1 Введите данные
	NOInput.create-page__question(label="Вопрос" :value="question" @input-data="(value: string) => question = value")
	.create-page__answers
		NOInput(label="Верный ответ" :value="answerYes" @input-data="(value: string) => answerYes = value")
		NOInput(label="Неверный ответ" :value="answerNo" @input-data="(value: string) => answerNo = value")
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

import NOInput from '@/components/NOInput.vue';

export default defineComponent({
	name: 'CreatePage',
	components: {
		NOInput,
	},
	setup () {
		const question = ref<string>('');
		const answerYes = ref<string>('');
		const answerNo = ref<string>('');
		return {question, answerYes, answerNo};
	},
});
</script>

<style lang="scss">
.create-page {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	&__answers {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1.5rem;
	}
}
</style>
