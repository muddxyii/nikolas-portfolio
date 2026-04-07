export interface TocEntry {
	id: string;
	text: string;
	level: number;
}

export interface ProjectMeta {
	title: string;
	date: string;
	updated?: string;
	description: string;
	thumbnail: string;
	tags: string[];
	slug: string;
}

function extractToc(raw: string): TocEntry[] {
	const entries: TocEntry[] = [];
	const lines = raw.split('\n');
	let inFrontmatter = false;
	let frontmatterDone = false;
	let fenceCount = 0;

	for (const line of lines) {
		if (!frontmatterDone) {
			if (line.trim() === '---') {
				fenceCount++;
				if (fenceCount === 1) inFrontmatter = true;
				else if (fenceCount === 2) { inFrontmatter = false; frontmatterDone = true; }
			}
			continue;
		}

		const match = line.match(/^(#{2,3})\s+(.+)/);
		if (match) {
			const level = match[1].length;
			const text = match[2].trim();
			const id = text
				.toLowerCase()
				.replace(/[^\w\s-]/g, '')
				.replace(/\s+/g, '-')
				.replace(/-+/g, '-');
			entries.push({ id, text, level });
		}
	}

	return entries;
}

export async function getProjects(): Promise<ProjectMeta[]> {
	const projectFiles = import.meta.glob('/src/content/projects/*/index.md', { eager: true });

	const projects: ProjectMeta[] = [];

	for (const path in projectFiles) {
		const file = projectFiles[path] as { metadata: Omit<ProjectMeta, 'slug'> };
		const slug = path.split('/').slice(-2, -1)[0];

		projects.push({
			...file.metadata,
			tags: file.metadata.tags || [],
			slug
		});
	}

	// Sort by date, newest first
	return projects.sort(
		(a, b) => new Date(`${b.date}T00:00`).getTime() - new Date(`${a.date}T00:00`).getTime()
	);
}

export async function getProject(slug: string) {
	const projectFiles = import.meta.glob('/src/content/projects/*/index.md');
	const rawFiles = import.meta.glob('/src/content/projects/*/index.md', {
		query: '?raw',
		import: 'default'
	});
	const path = `/src/content/projects/${slug}/index.md`;

	if (!(path in projectFiles)) {
		return null;
	}

	const [file, raw] = await Promise.all([
		projectFiles[path]() as Promise<{
			metadata: Omit<ProjectMeta, 'slug'>;
			default: import('svelte').Component;
		}>,
		rawFiles[path]() as Promise<string>
	]);

	return {
		meta: { ...file.metadata, tags: file.metadata.tags || [], slug },
		content: file.default,
		toc: extractToc(raw)
	};
}
