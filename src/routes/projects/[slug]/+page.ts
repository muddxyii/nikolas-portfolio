import { error } from '@sveltejs/kit';
import { getProject } from '$lib/projects';

export async function load({ params }) {
	const project = await getProject(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return { project };
}
