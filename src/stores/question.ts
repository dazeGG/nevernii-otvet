import { defineStore } from 'pinia';
import {createQuestion} from '@/api/questions';
import type IQuestion from '@/interfaces/IQuestion';

export const useQuestionStore = defineStore('question', () => {
	let question: IQuestion;

	const getQuestion: Function = (): IQuestion => question;

	const create: Function = (questionText: string, answerYes: string, answerNo: string): void => {
		const formData = new FormData();

		formData.set('question_text', questionText);
		formData.set('answer_yes', answerYes);
		formData.set('answer_no', answerNo);

		createQuestion(formData)
			.then((res: Response): void => {
				// @ts-ignore
				if (res.status === 200) question = res.data;
			})
			.catch((e: Error): void => console.log(e));
	};

	return {getQuestion, create};
});
