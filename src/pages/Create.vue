<template lang="pug">
.create-page(v-if="!success")
	h1 Введи данные
	.create-page__form
		NOInput.create-page__question(label="Вопрос" :value="questionText" @input-data="(value: string) => questionText = value")
		NOInput(label="Верный ответ" :value="answerYes" @input-data="(value: string) => answerYes = value")
		NOInput(label="Неверный ответ" :value="answerNo" @input-data="(value: string) => answerNo = value")
		NOButton.create-page__submit(text="Создать вопрос" @button-click="submit")
.create-page(v-else)
	h1 Вопрос успешно создан!
	.create-page__link
		span Ссылка:&nbsp;
		a(:href="createdQuestionLink") {{ createdQuestionLink }}
		span.create-page__link--buttons
			RouterLink.no-button(:to="createdQuestionRoute") Перейти
			button.no-button(@click="copyLink") Скопировать
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import type {ComputedRef} from 'vue';
import {RouterLink} from 'vue-router';

import NOInput from '@/components/NOInput.vue';
import NOButton from '@/components/NOButton.vue';

import type IQuestion from '@/interfaces/IQuestion';

import {createQuestion} from '@/api/questions';

export default defineComponent({
	name: 'CreatePage',
	components: {
		RouterLink,
		NOInput,
		NOButton,
	},
	setup () {
		const questionText = ref<string>('');
		const answerYes = ref<string>('');
		const answerNo = ref<string>('');

		let questionData: IQuestion;
		let success = ref<boolean>(false);

		const submit = () => {
			const formData = new FormData();

			formData.set('question_text', questionText.value);
			formData.set('answer_yes', answerYes.value);
			formData.set('answer_no', answerNo.value);

			createQuestion(formData)
				.then((res: Response): void => {
					if (res.status === 201) {
						// @ts-ignore
						questionData = res.data;
						success.value = true;
					}
				})
				.catch((e: Error): void => console.log(e));
		};

		const question: ComputedRef = computed((): IQuestion => questionData);

		const createdQuestionRoute: ComputedRef = computed((): string => `/question/${question.value.id}`);
		const createdQuestionLink: ComputedRef = computed((): string => `https://neverniiotvet.ru/question/${question.value.id}`);

		const copyLink: Function = async () => await navigator.clipboard.writeText(createdQuestionLink.value);

		return {questionText, answerYes, answerNo, success, createdQuestionRoute, createdQuestionLink, submit, copyLink};
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

	&__link {
		&--buttons {
			margin-top: 0.5rem;
			display: flex;
			gap: 0.5rem;
		}
	}
}
</style>
