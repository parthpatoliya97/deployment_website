<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Banner from '$lib/Banner.svelte';

	let { children, data } = $props();
	const {banner, header, footer, year, appName} = data.data;
</script>

<Banner {banner} />
<Header {header} />
{@render children()}
<Footer {footer} {year} {appName}  />
