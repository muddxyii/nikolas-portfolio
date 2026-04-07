import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
		})
	],
	extensions: ['.svelte', '.md']
};

export default config;
