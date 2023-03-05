import { createRouter, createWebHistory } from 'vue-router';
import Routes from '@/router/Routes';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: Routes.home,
			name: 'home',
			component: () => import('../pages/Home.vue'),
		},
		{
			path: Routes.create,
			name: 'create',
			component: () => import('../pages/Create.vue'),
		},
		{
			path: Routes.question,
			name: 'question',
			component: () => import('../pages/Question.vue'),
		},
	],
});

export default router;
