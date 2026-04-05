export interface ProjectMeta {
	title: string;
	date: string;
	description: string;
	thumbnail: string;
	tags: string[];
	slug: string;
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
	const path = `/src/content/projects/${slug}/index.md`;

	if (!(path in projectFiles)) {
		return null;
	}

	const file = (await projectFiles[path]()) as {
		metadata: Omit<ProjectMeta, 'slug'>;
		default: import('svelte').Component;
	};

	return {
		meta: { ...file.metadata, tags: file.metadata.tags || [], slug },
		content: file.default
	};
}
