<template lang="pug">
.question-page
	h1.question-page__question {{ question.question_text }}
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

import type IQuestion from '@/interfaces/IQuestion';

import {getQuestion} from '@/api/questions';

export default defineComponent({
	name: 'QuestionPage',
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

	&__question {
		text-align: center;
	}
}
</style>
