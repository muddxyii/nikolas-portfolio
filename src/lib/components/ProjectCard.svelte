<script lang="ts">
	import type { ProjectMeta } from '$lib/projects';

	let { project }: { project: ProjectMeta } = $props();

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			month: 'short',
			year: 'numeric'
		});
	}
</script>

<a href="/projects/{project.slug}" class="block group hover:no-underline">
	<article class="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
		<div class="aspect-[4/3] bg-gray-100">
			<div class="w-full h-full flex items-center justify-center text-text-secondary">
				{project.title}
			</div>
		</div>
		<div class="p-4">
			<h2 class="font-semibold text-text-primary group-hover:text-accent transition-colors">
				{project.title}
			</h2>
			<p class="text-sm text-text-secondary mt-1">{formatDate(project.date)}</p>
			<p class="text-text-secondary mt-2 text-sm line-clamp-2">{project.description}</p>
		</div>
	</article>
</a>
