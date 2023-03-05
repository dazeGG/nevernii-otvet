<template lang="pug">
.create-page
	h1 Введи данные
	.create-page__form
		NOInput.create-page__question(label="Вопрос" :value="questionText" @input-data="(value: string) => questionText = value")
		NOInput(label="Верный ответ" :value="answerYes" @input-data="(value: string) => answerYes = value")
		NOInput(label="Неверный ответ" :value="answerNo" @input-data="(value: string) => answerNo = value")
		NOButton.create-page__submit(text="Создать вопрос" @button-click="submit")
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import type {ComputedRef} from 'vue';

import NOInput from '@/components/NOInput.vue';
import NOButton from '@/components/NOButton.vue';

import {useQuestionStore} from '@/stores/question';

export default defineComponent({
	name: 'CreatePage',
	components: {
		NOInput,
		NOButton,
	},
	setup () {
		const questionText = ref<string>('');
		const answerYes = ref<string>('');
		const answerNo = ref<string>('');

		const questionStore = useQuestionStore();

		let question: ComputedRef = computed(() => questionStore.getQuestion);

		const submit = () => questionStore.create(questionText.value, answerYes.value, answerNo.value);

		return {questionText, answerYes, answerNo, question, submit};
	},
});
</script>

<style lang="scss">
.create-page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.2rem;

	&__form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	&__submit {
		margin-top: 1.2rem;
	}
}
</style>
