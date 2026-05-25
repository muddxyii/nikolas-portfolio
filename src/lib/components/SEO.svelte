<script lang="ts">
import { page } from '$app/stores';
import { siteConfig } from '$lib/config';

interface Props {
	title?: string;
	description?: string;
	image?: string;
	type?: 'website' | 'article';
}

let {
	title = siteConfig.title,
	description = siteConfig.description,
	image = siteConfig.image,
	type = 'website'
}: Props = $props();

const canonical = $derived($page.url.href);
const ogImage = $derived(image.startsWith('http') ? image : `${siteConfig.url}${image}`);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Nikolas Padilla, Software Engineer" />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content="Nikolas Padilla, Software Engineer" />
</svelte:head>
