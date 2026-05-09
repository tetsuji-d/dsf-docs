// @ts-check
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @returns {unknown[]} */
export function getStarlightSidebar() {
	const raw = readFileSync(join(__dirname, 'sidebar.config.json'), 'utf8');
	/** @type {{ groups: Array<{ labelJa: string; labelEn: string; autogenerate?: { directory?: string } | null; items?: Array<{ slug: string; labelJa: string; labelEn: string }> }> }} */
	const { groups } = JSON.parse(raw);

	return groups
		.map((g) => {
			const base = {
				label: g.labelJa,
				translations: { en: g.labelEn, ja: g.labelJa },
			};
			const dir = g.autogenerate?.directory?.trim();
			if (dir) {
				return { ...base, autogenerate: { directory: dir } };
			}
			const items = g.items ?? [];
			if (items.length === 0) {
				return null;
			}
			return {
				...base,
				items: items.map((item) => ({
					label: item.labelJa,
					translations: { en: item.labelEn, ja: item.labelJa },
					slug: item.slug,
				})),
			};
		})
		.filter((entry) => entry !== null);
}
