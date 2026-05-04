// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.dsf.ink',
	integrations: [
		starlight({
			title: 'DSF Docs',
			defaultLocale: 'ja',
			locales: {
				ja: { label: '日本語', lang: 'ja' },
				en: { label: 'English', lang: 'en' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'ガイド',
					translations: { en: 'Guides', ja: 'ガイド' },
					items: [
						{
							label: 'サンプルガイド',
							translations: { en: 'Example Guide', ja: 'サンプルガイド' },
							slug: 'guides/example',
						},
					],
				},
				{
					label: 'リファレンス',
					translations: { en: 'Reference', ja: 'リファレンス' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
