<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | Nikolas Padilla</title>
</svelte:head>

<div class="px-6 py-12 max-w-3xl mx-auto">
	<h1 class="text-3xl font-bold tracking-tight mb-8">Projects</h1>

	{#if data.projects.length === 0}
		<p class="text-text-secondary">No projects yet.</p>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each data.projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</div>
