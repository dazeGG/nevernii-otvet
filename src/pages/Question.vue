<template lang="pug">
.question-page
	h1.question-page__question {{ question.question_text }}
	.question-page__answers
		NOButton.question-page__answers--yes(:text="question.answer_yes")
		NOButtonNo.question-page__answers--no(:text="question.answer_no")
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

import NOButton from '@/components/NOButton.vue';
import NOButtonNo from '@/components/NOButtonNo.vue';

import type IQuestion from '@/interfaces/IQuestion';

import {getQuestion} from '@/api/questions';

export default defineComponent({
	name: 'QuestionPage',
	components: {
		NOButton,
		NOButtonNo,
	},
	setup () {
		const questionID: number = parseInt(String(useRoute().params.id), 10);

		const question: IQuestion = {
			id: questionID,
			question_text: 'ты пидор?',
			answer_yes: 'да',
			answer_no: 'нет',
		};

		onBeforeMount(() => {
			// ! getQuestion from back
			getQuestion(questionID).then(r => console.log(r)).catch(e => console.log(e));
		});

		return {question};
	},
});
</script>

<style lang="scss">
.question-page {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;

	&__question {
		text-align: center;
	}

	&__answers {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
	}
}
</style>
