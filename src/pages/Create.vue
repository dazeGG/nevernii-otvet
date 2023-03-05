<template lang="pug">
.create-page
	h1 Введи данные
	NOInput.create-page__question(label="Вопрос" :value="questionText" @input-data="(value: string) => questionText = value")
	.create-page__answers
		NOInput(label="Верный ответ" :value="answerYes" @input-data="(value: string) => answerYes = value")
		NOInput(label="Неверный ответ" :value="answerNo" @input-data="(value: string) => answerNo = value")
	NOButton.create-page__submit(text="Создать вопрос" @button-click="submit")
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

import NOInput from '@/components/NOInput.vue';
import NOButton from '@/components/NOButton.vue';

import {createQuestion} from '@/api/questions';

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

		const submit = () => {
			const formData = new FormData();

			formData.set('question_text', questionText.value);
			formData.set('answer_yes', answerYes.value);
			formData.set('answer_no', answerNo.value);

			createQuestion(formData).then(r => console.log(r)).catch(e => console.log(e));
		};

		return {questionText, answerYes, answerNo, submit};
	},
});
</script>

<style lang="scss">
.create-page {
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
