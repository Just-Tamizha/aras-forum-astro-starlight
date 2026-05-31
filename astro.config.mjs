// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
const isLive = process.env.isLive == 'true' ? true : false;
const site = isLive && import.meta.env.PROD ? 'https://aras.pingtamizha.com' : 'https://Just-Tamizha.github.io/';
const base = isLive ? '/' : '/aras-forum-astro-starlight/';
console.log('isLive:', isLive);
const deployTarget = process.env.DEPLOY_TARGET || 'github';
export default defineConfig({
	site: deployTarget === 'github' ? 'https://Just-Tamizha.github.io' : 'https://aras.pingtamizha.com',
	base: deployTarget === 'github' ? '/aras-forum-astro-starlight' : '/',
	integrations: [
		starlight({
			title: 'Tamizha',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
	server: { port: 3000 },
});