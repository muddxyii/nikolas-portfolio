import { getProject } from '$lib/projects';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const project = await getProject(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
