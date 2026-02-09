<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/projects', label: 'Projects' }
	];

	function isActive(pathname: string, href: string): boolean {
		return pathname === href;
	}

	interface Breadcrumb {
		label: string;
		href: string | null;
	}

	function getBreadcrumbs(pathname: string, pageData: App.PageData): Breadcrumb[] {
		const crumbs: Breadcrumb[] = [];

		if (pathname.startsWith('/projects')) {
			// Check if we're on a specific project page
			if (pathname !== '/projects' && pageData.project?.meta?.title) {
				crumbs.push({ label: 'Projects', href: '/projects' });
				crumbs.push({ label: pageData.project.meta.title, href: null });
			} else {
				crumbs.push({ label: 'Projects', href: null });
			}
		}

		return crumbs;
	}
</script>

<header>
	<div
		class="mx-6 flex max-w-3xl items-center justify-between gap-8 border-b border-text-primary/20 py-6 md:mx-auto md:px-6"
	>
		<div class="flex min-w-0 items-center gap-1 text-xl font-semibold">
			{#if $page.url.pathname === '/'}
				<span class="text-text-secondary">NP</span>
			{:else}
				<a href={resolve('/')} class="text-accent hover:no-underline">NP</a>
			{/if}
			{#each getBreadcrumbs($page.url.pathname, $page.data) as crumb (crumb.label)}
				<span class="text-text-secondary">/</span>
				{#if crumb.href}
					<a href={resolve(crumb.href)} class="text-accent hover:no-underline">{crumb.label}</a>
				{:else}
					<span class="truncate text-text-secondary">{crumb.label}</span>
				{/if}
			{/each}
		</div>
		<nav class="flex shrink-0 gap-6">
			{#each navItems as item (item.href)}
				{#if isActive($page.url.pathname, item.href)}
					<span class="text-text-secondary underline underline-offset-4">
						{item.label.toLowerCase()}
					</span>
				{:else}
					<a href={resolve(item.href)} class="text-text-secondary hover:text-text-primary">
						{item.label.toLowerCase()}
					</a>
				{/if}
			{/each}
		</nav>
	</div>
</header>
