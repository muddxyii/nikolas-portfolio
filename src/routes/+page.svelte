<script lang="ts">
import { resolve } from '$app/paths';
import SEO from '$lib/components/SEO.svelte';
import { siteConfig } from '$lib/config';

const skills = ['TypeScript', 'PostgreSQL', 'Flutter'];

const jsonLd = JSON.stringify({
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Nikolas Padilla',
	jobTitle: 'Software Engineer',
	url: siteConfig.url,
	image: `${siteConfig.url}/headshot.webp`
});
</script>

<SEO />

<svelte:head>
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<div class="mx-auto grid max-w-3xl items-start gap-12 px-6 py-24 md:grid-cols-[280px,1fr]">
	<!-- Sidebar -->
	<aside class="flex gap-6">
		<img
			src="/headshot.webp"
			alt="Nikolas Padilla"
			class="h-24 w-24 shrink-0 rounded-full object-cover"
			width="96"
			height="96"
			fetchpriority="high"
		/>
		<div>
			<h1 class="mb-1 text-2xl font-bold tracking-tight">Nikolas Padilla</h1>
			<p class="mb-4 text-text-secondary">Software Engineer</p>

			<div class="mb-4 flex flex-wrap gap-2">
				{#each skills as skill (skill)}
					<span class="rounded border border-border px-2 py-0.5 text-xs text-text-secondary"
						>{skill}</span
					>
				{/each}
			</div>

			<div class="flex flex-wrap gap-2">
				<a
					href={resolve('/projects')}
					class="rounded border border-accent px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 hover:no-underline"
				>
					View Projects
				</a>
				<a
					href="/resume.pdf"
					target="_blank"
					class="rounded border border-accent px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10 hover:no-underline"
				>
					Download Resume
				</a>
			</div>
		</div>
	</aside>

	<!-- Main content -->
	<div>
		<p class="mb-6 leading-relaxed text-text-primary">
			Currently leading software development at AnyBackFlow.com, a backflow services company in
			Arizona. Building the ReportFlow platform, a unified system connecting field technicians and
			office operations. Rewriting the existing mobile app into a full platform with shared database
			architecture.
		</p>
		<p>
			<a href={resolve('/projects/sample-project')} class="text-accent hover:underline">
				Curious? Read more...
			</a>
		</p>
	</div>
</div>
