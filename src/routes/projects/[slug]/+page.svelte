<script lang="ts">
	let { data } = $props();

	const meta = $derived(data.project.meta);
	const Content = $derived(data.project.content);

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{meta.title} | Nikolas Padilla</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<article class="mx-auto max-w-2xl px-6 py-12">
	<header class="mb-8">
		<h1 class="mb-2 text-3xl font-bold tracking-tight">{meta.title}</h1>
		<p class="mb-4 text-text-secondary">{formatDate(meta.date)}</p>

		{#if meta.tags.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each meta.tags as tag}
					<span class="rounded bg-gray-100 px-2 py-1 text-xs text-text-secondary">{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose prose-neutral max-w-none">
		<Content />
	</div>
</article>
