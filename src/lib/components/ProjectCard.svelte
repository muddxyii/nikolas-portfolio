<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ProjectMeta } from '$lib/projects';

	let { project }: { project: ProjectMeta } = $props();

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			month: 'short',
			year: 'numeric'
		});
	}
</script>

<a
	href={resolve('/projects/[slug]', { slug: project.slug })}
	class="group block hover:no-underline"
>
	<article
		class="overflow-hidden rounded-lg border border-border transition-colors hover:border-accent"
	>
		<div class="aspect-[4/3] bg-gray-100">
			<div class="flex h-full w-full items-center justify-center text-text-secondary">
				{project.title}
			</div>
		</div>
		<div class="p-4">
			<h2 class="font-semibold text-text-primary transition-colors group-hover:text-accent">
				{project.title}
			</h2>
			<p class="mt-1 text-sm text-text-secondary">{formatDate(project.date)}</p>
			<p class="mt-2 line-clamp-2 text-sm text-text-secondary">{project.description}</p>
		</div>
	</article>
</a>
