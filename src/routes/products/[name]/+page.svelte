<script>
	import Hero from "$lib/Product/Hero.svelte";
    import Meta from "$lib/Meta.svelte";
	import Logo from "$lib/Product/Logo.svelte";
	import Advantages from "$lib/Product/Advantages.svelte";
	import Features from "$lib/Product/Features.svelte";
	import HowItWorks from "$lib/Product/HowItWorks.svelte";
	import Gallery from "$lib/Product/Gallery.svelte";
	import Benefits from "$lib/Product/Benefits.svelte";
	import Pricing from "$lib/Product/Pricing.svelte";
	import Testimonials from "$lib/Product/Testimonials.svelte";
	import FAQs from "$lib/Product/FAQs.svelte";
	import CTA from "$lib/Product/CTA.svelte";
	import Blogs from "$lib/Product/Blogs.svelte";
	import MakeMoney from "$lib/Product/MakeMoney.svelte";
	import InstallationService from "$lib/Product/InstallationService.svelte";
	import Stats from "$lib/Product/Stats.svelte";
	import BrowserSupported from "$lib/Product/BrowserSupported.svelte";
	import Compliance from "$lib/Product/Compliance.svelte";
	import Industries from "$lib/Product/Industries.svelte";
	import Progressbar from "$lib/Product/Progressbar.svelte";

    export let data;
    const {meta, hero, logos, advantages, features, howItWorks, gallery, pricing, benefits, faqs, testimonials, ctas, blogs, makeMoney} = data.data;
	const primaryColor = hero.primaryColor;
</script>

<Meta {meta} />
<Hero {hero} />
<Logo {logos} />
<Advantages {advantages} {primaryColor} />
<Stats />
<Features {features} {primaryColor}/>
<BrowserSupported />
<HowItWorks {howItWorks} />
<Compliance />
<Gallery {gallery} />
<CTA {ctas} />
<Benefits {benefits} />
<Industries />
<MakeMoney {makeMoney} />
<Testimonials {testimonials} />
<Pricing {pricing} />
<InstallationService />
<FAQs {faqs} />
<CTA {ctas} />
<Blogs {blogs} />
<Progressbar/>