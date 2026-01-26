<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="flex items-center justify-between px-6 py-6 max-w-3xl mx-auto">
	<a href="/" class="text-text-primary font-semibold hover:no-underline">Nikolas Padilla</a>
	<nav>
		<a
			href="/projects"
			class={$page.url.pathname.startsWith('/projects')
				? 'text-accent'
				: 'text-text-secondary hover:text-text-primary'}
		>
			Projects
		</a>
	</nav>
</header>
