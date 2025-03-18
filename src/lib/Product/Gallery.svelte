<script>
    import { onMount, onDestroy } from "svelte";
    import { gsap } from "gsap";
    import { browser } from "$app/environment"; // Fix for SvelteKit SSR

    export let gallery;

    let slider, list, items, dots;
    let active = 0;
    let autoslide;
    let isAnimating = false;

    function animateSlider() {
        if (!items || !list || isAnimating) return;
        isAnimating = true;

        gsap.to(items, {
            x: `-${active * 100}%`,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                isAnimating = false;
            }
        });

        gsap.to(items[active], {
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut"
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[active].classList.add("active");
    }

    function nextSlide() {
        active = active + 1 > items.length - 1 ? 0 : active + 1;
        animateSlider();
    }

    onMount(() => {
        if (!browser) return;

        list = slider.querySelector(".list");
        items = slider.querySelectorAll(".list .item");
        dots = slider.querySelectorAll(".dots li");

        gsap.set(items, { opacity: 0 }); // Hide all images initially
        gsap.to(items[active], { opacity: 1, duration: 0.8 }); // Show first image

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                active = index;
                animateSlider();
            });
        });

        autoslide = setInterval(nextSlide, 3000); // Auto-slide every 5 seconds
    });

    onDestroy(() => {
        clearInterval(autoslide);
    });
</script>

<section class="bg-gray-50 py-10 sm:py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-base/7 font-semibold text-rose-600">{gallery.label}</h2>
            <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                {gallery.title}
            </p>
            <p class="mt-2 text-lg/8 text-gray-600">{gallery.description}</p>
		</div>

		<!-- Slider Section -->
		<div bind:this={slider} class="slider w-full max-w-4xl mx-auto relative overflow-hidden mt-12 rounded-lg shadow-lg">
			<div class="list flex w-full transition-none">
				{#each gallery.data as image, index}
					<div class="item w-full flex-shrink-0 relative">
						<img src={image.src} alt={image.alt} class="w-full h-[500px] object-cover rounded-lg shadow-lg" />
					</div>
				{/each}
			</div>

			<!-- Dots -->
			<ul class="dots absolute bottom-5 left-0 w-full flex justify-center space-x-3">
				{#each gallery.data as _, index}
					<li class="dot w-[12px] h-[12px] bg-gray-300 opacity-50 rounded-full transition-all duration-300 {index === 0 ? 'active' : ''}"></li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
    .dots .active {
        background-color: red;
        opacity: 1;
        transform: scale(1.2);
    }
</style>
