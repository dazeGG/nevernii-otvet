<template lang="pug">
h1 Create Page
NOInput(label="Вопрос" :value="question" @input-data="onInput")
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
		const onInput = (value: string) => question.value = value;
		return {question, onInput};
	},
});
</script>

<style lang="scss">
</style>
