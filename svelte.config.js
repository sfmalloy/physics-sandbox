import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			base: dev ? '' : '/physics-sandbox'
		},
		adapter: adapter(),
		alias: {
			'$physics/*': './src/physics/*',
			'$components/*': './src/components/*',
			'$demos/*': './src/demos/*'
		}
	}
};

export default config;
