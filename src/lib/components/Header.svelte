<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
</script>

<header class="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
	<a href={resolve('/')} class="font-semibold text-text-primary hover:no-underline"
		>Nikolas Padilla</a
	>
	<nav>
		<a
			href={resolve('/projects')}
			class={$page.url.pathname.startsWith('/projects')
				? 'text-accent'
				: 'text-text-secondary hover:text-text-primary'}
		>
			Projects
		</a>
	</nav>
</header>
