<template lang="pug">
DefaultLayout
    RouterView
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default defineComponent({
    components: {
        RouterView,
        DefaultLayout,
    },
});
</script>
