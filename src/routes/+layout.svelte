<script lang="ts">
import './layout.css';
import favicon from '$lib/assets/favicon.ico';
import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Nikolas Padilla | Software Engineer</title>
	<meta name="description" content="Personal portfolio showcasing software development projects" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
