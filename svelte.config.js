import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Options for the adapter
			fallback: 'index.html' // Important for SPA mode
		}),
		prerender: {
			entries: [] // For SPA, don't prerender any routes
		}
	}
};

export default config;
