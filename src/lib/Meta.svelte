<script>
	export let meta;
	const { slug, pageTitle, metaTitle, description, image, type } = meta;
	const appUrl = 'https://jupitersoftwares.io';
	const pageUrl = appUrl + slug;
	const imageUrl = appUrl + image;
</script>

<svelte:head>
	<title>{pageTitle}</title>

	<meta charset="utf-8" />
	<meta name="description" content={description} />
	<link rel="canonical" href={pageUrl} />

	<meta property="og:title" content={metaTitle} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:type" content={type} />
	<meta property="og:description" content={description} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:url" content={pageUrl} />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{@html `<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "webpage",
    "name": "${metaTitle}",
    "description": "${description}",
  }
  </script>`}
</svelte:head>
