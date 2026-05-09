// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import { getStarlightSidebar } from './src/config/build-starlight-sidebar.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.dsf.ink',
	integrations: [
		starlight({
			title: 'DSF Docs',
			logo: {
				light: './src/assets/dsf-logo.svg',
				dark: './src/assets/dsf-logo-dark.svg',
				alt: 'DSF',
				replacesTitle: false,
			},
			defaultLocale: 'ja',
			locales: {
				ja: { label: '日本語', lang: 'ja' },
				en: { label: 'English', lang: 'en' },
			},
			sidebar: getStarlightSidebar(),
		}),
	],
});
