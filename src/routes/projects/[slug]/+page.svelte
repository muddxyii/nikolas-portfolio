<script lang="ts">
	let { data } = $props();

	const { meta, content } = data.project;

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

<article class="px-6 py-12 max-w-2xl mx-auto">
	<header class="mb-8">
		<h1 class="text-3xl font-bold tracking-tight mb-2">{meta.title}</h1>
		<p class="text-text-secondary mb-4">{formatDate(meta.date)}</p>

		{#if meta.tags.length > 0}
			<div class="flex flex-wrap gap-2">
				{#each meta.tags as tag}
					<span class="text-xs px-2 py-1 bg-gray-100 text-text-secondary rounded">{tag}</span>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose prose-neutral max-w-none">
		<svelte:component this={content} />
	</div>
</article>
