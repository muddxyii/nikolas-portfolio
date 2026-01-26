<script lang="ts">
	const links = [
		{ href: 'https://github.com/muddxyii', label: 'GitHub' },
		{ href: 'https://linkedin.com/in/nikolaspadilla', label: 'LinkedIn' },
		{ href: 'mailto:contact@nikolaspadilla.com', label: 'Email' }
	];
</script>

<div class="flex gap-6">
	{#each links as { href, label }}
		<a
			{href}
			target={href.startsWith('mailto') ? undefined : '_blank'}
			rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
			class="text-text-secondary hover:text-accent"
		>
			{label}
		</a>
	{/each}
</div>
