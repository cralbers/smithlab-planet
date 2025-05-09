// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Smith Lab',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/cralbers/smithlab-planet' }],
			sidebar: [
				{
					label: 'Hi',
					autogenerate: { directory: 'hi' },
					// items: [
						// Each item here is one entry in the navigation menu.
						// { label: 'Example Guide', slug: 'guides/example' },
					// ]
					
				},
				// @ts-ignore
				{
					label: 'Protocols',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
