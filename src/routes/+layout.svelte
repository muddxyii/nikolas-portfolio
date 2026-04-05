<script lang="ts">
import './layout.css';
import favicon from '$lib/assets/favicon.ico';
import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" as="image" href="/headshot.webp" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
