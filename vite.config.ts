import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import vuePugPlugin from 'vue-pug-plugin';
import stylelint from 'vite-plugin-stylelint';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(
			{
				template: {
					preprocessOptions: {
						plugins: [
							vuePugPlugin,
						],
					},
				},
			},
		),
		stylelint({
			fix: true,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
