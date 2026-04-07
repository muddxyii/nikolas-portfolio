<script lang="ts">
import SEO from '$lib/components/SEO.svelte';

let { data } = $props();

const meta = $derived(data.project.meta);
const Content = $derived(data.project.content);
const toc = $derived(data.project.toc);

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

<div class="mx-auto max-w-5xl px-6 py-12">
	<div class="lg:grid lg:grid-cols-[1fr_220px] lg:gap-16">
		<article>
			<header class="mb-10">
				<h1 class="mb-3 text-3xl font-bold tracking-tight">{meta.title}</h1>

				<div class="mb-5 flex flex-wrap gap-6">
					<div>
						<p class="mb-0.5 text-xs font-medium uppercase tracking-widest text-text-secondary/50">
							Published
						</p>
						<p class="text-sm text-text-secondary">{formatDate(meta.date)}</p>
					</div>
					{#if meta.updated}
						<div>
							<p class="mb-0.5 text-xs font-medium uppercase tracking-widest text-text-secondary/50">
								Updated
							</p>
							<p class="text-sm text-text-secondary">{formatDate(meta.updated)}</p>
						</div>
					{/if}
				</div>

				{#if meta.tags.length > 0}
					<div class="flex flex-wrap gap-2">
						{#each meta.tags as tag (tag)}
							<span class="rounded bg-gray-100 px-2 py-1 text-xs text-text-secondary">{tag}</span>
						{/each}
					</div>
				{/if}
			</header>

			{#if toc.length > 0}
				<nav class="mb-10 rounded-lg border border-border bg-gray-50 px-5 py-4 lg:hidden">
					<p class="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
						Contents
					</p>
					<ol class="space-y-1.5">
						{#each toc as entry (entry.id)}
							<li style="padding-left: {(entry.level - 2) * 12}px">
								<a
									href="#{entry.id}"
									class="text-sm text-text-secondary hover:text-text-primary transition-colors"
								>
									{entry.text}
								</a>
							</li>
						{/each}
					</ol>
				</nav>
			{/if}

			<div class="prose max-w-none">
				<Content />
			</div>
		</article>

		{#if toc.length > 0}
			<aside class="hidden lg:block">
				<div class="sticky top-8">
					<p class="mb-3 text-xs font-semibold uppercase tracking-widest text-text-secondary">
						Contents
					</p>
					<ol class="space-y-2">
						{#each toc as entry (entry.id)}
							<li style="padding-left: {(entry.level - 2) * 10}px">
								<a
									href="#{entry.id}"
									class="text-sm text-text-secondary hover:text-text-primary leading-snug transition-colors"
								>
									{entry.text}
								</a>
							</li>
						{/each}
					</ol>
				</div>
			</aside>
		{/if}
	</div>
</div>
