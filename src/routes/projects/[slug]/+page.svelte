<script lang="ts">
import SEO from '$lib/components/SEO.svelte';

let { data } = $props();

const meta = $derived(data.project.meta);
const Content = $derived(data.project.content);

function formatDate(dateStr: string): string {
	return new Date(`${dateStr}T00:00`).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'America/Phoenix'
	});
}
</script>

<SEO title="{meta.title} | Nikolas Padilla" description={meta.description} type="article" />

<article class="mx-auto max-w-2xl px-6 py-12">
	<header class="mb-8">
		<h1 class="mb-2 text-3xl font-bold tracking-tight">{meta.title}</h1>
		<p class="mb-4 text-text-secondary">{formatDate(meta.date)}</p>

		{#if meta.tags.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each meta.tags as tag (tag)}
					<span class="rounded bg-gray-100 px-2 py-1 text-xs text-text-secondary">{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose prose-neutral max-w-none">
		<Content />
	</div>
</article>
