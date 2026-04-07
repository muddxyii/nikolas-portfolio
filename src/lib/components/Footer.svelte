<script lang="ts">
import { page } from '$app/stores';
import SocialLinks from './SocialLinks.svelte';
</script>

<footer>
	<div
		class="mx-6 flex flex-col items-center gap-4 border-t border-text-primary/20 py-8 transition-[max-width] duration-300 ease-in-out md:mx-auto md:px-6 {/^\/projects\/.+/.test($page.url.pathname) ? 'max-w-5xl' : 'max-w-3xl'}"
	>
		<SocialLinks />
		<p class="text-sm text-text-secondary">&copy; 2026 Nikolas Padilla</p>
	</div>
</footer>
