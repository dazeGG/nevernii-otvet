<template lang="pug">
h1 Question Page
</template>

<script lang="ts" setup>
import {onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

import type IQuestion from '@/interfaces/IQuestion';

import {getQuestion} from '@/api/questions';


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
</script>

<style lang="scss">
</style>
