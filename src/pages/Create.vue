<template lang="pug">
h1 Create Page
NOInput(label="Вопрос")
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import NOInput from '@/components/NOInput.vue';

export default defineComponent({
	name: 'CreatePage',
	components: {
		NOInput,
	},
});
</script>

<style lang="scss">
</style>
