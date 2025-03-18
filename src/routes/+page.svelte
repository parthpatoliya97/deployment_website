<script>
    import Hero from "$lib/Home/Hero.svelte";
    import Logo from "$lib/Home/Logo.svelte";
    import Services from "$lib/Home/Services.svelte";
    import Products from "$lib/Home/Products.svelte";
    import Tech from "$lib/Home/Tech.svelte";
    import Stats from "$lib/Home/Stats.svelte";
    import Tesimonials from "$lib/Home/Testimonials.svelte";
    import CTA from "$lib/Home/CTA.svelte";
    import CoreValues from "$lib/Home/CoreValues.svelte";
    import Industries from "$lib/Home/Industries.svelte";
    import WhyChooseUs from "$lib/Home/WhyChooseUs.svelte";
    import WorldDominance from "$lib/Home/WorldDominance.svelte";
    import Blogs from "$lib/Home/Blogs.svelte";
    import Compliance from "$lib/Home/Compliance.svelte";
	import Meta from "$lib/Meta.svelte";

    export let data;
    const {meta, hero, logos, services, products, industries, tech, stats, cta, coreValues, worldDominance, blogs, compliance} = data.data;

</script>

<Meta {meta } />
<Hero {hero} />
<Logo {logos} />
<Services {services} />
<CTA {cta} />
<Products {products} />
<Tesimonials />
<Compliance />
<Industries {industries} />
<Tech {tech} />
<WhyChooseUs />
<Stats {stats} />
<CoreValues {coreValues} />
<WorldDominance {worldDominance} />
<Blogs {blogs} />