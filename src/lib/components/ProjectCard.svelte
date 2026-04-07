<script lang="ts">
import { resolve } from '$app/paths';
import type { ProjectMeta } from '$lib/projects';

let { project }: { project: ProjectMeta } = $props();

function formatDate(dateStr: string): string {
	return new Date(`${dateStr}T00:00`).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
		timeZone: 'America/Phoenix'
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
			<div class="mt-1">
				{#if project.updated}
					<p class="text-sm text-text-secondary">Updated {formatDate(project.updated)}</p>
					<p class="text-xs text-text-secondary/50">Published {formatDate(project.date)}</p>
				{:else}
					<p class="text-sm text-text-secondary">{formatDate(project.date)}</p>
				{/if}
			</div>
			<p class="mt-2 line-clamp-2 text-sm text-text-secondary">{project.description}</p>
		</div>
	</article>
</a>
