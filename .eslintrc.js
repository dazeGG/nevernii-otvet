/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ['error', 'tab'],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'comma-dangle': ['error', 'always-multiline'],
	},
	parserOptions: {
		ecmaVersion: 'latest',
	},
};
