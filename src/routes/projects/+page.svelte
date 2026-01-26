<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Projects | Nikolas Padilla</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-12">
	<h1 class="mb-8 text-3xl font-bold tracking-tight">Projects</h1>

	{#if data.projects.length === 0}
		<p class="text-text-secondary">No projects yet.</p>
	{:else}
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each data.projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</div>
