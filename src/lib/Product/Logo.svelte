<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let logos;

  onMount(() => {
    if (typeof window !== "undefined") {
      const marquee = document.querySelector(".marquee");
      const marqueeContent = document.querySelector(".marquee-content");

      // Duplicate logos for seamless infinite scroll
      marqueeContent.innerHTML += marqueeContent.innerHTML;

      let totalWidth = marqueeContent.scrollWidth / 2; // Half width of duplicated content

      gsap.to(marqueeContent, {
        x: `-${totalWidth}px`,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });

      // Pause on hover effect
      marquee.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
      marquee.addEventListener("mouseleave", () => gsap.globalTimeline.play());
    }
  });
</script>

<div class="bg-gray-900 py-8 overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 class="text-center text-lg font-semibold text-white">
      {logos.title}
    </h2>
    <p class="mx-auto mt-4 max-w-xl text-lg text-gray-300">{logos.description}</p>

    <!-- Logo Scrolling Section -->
    <div class="relative mt-10 marquee overflow-hidden">
      <div class="flex items-center gap-x-8 whitespace-nowrap marquee-content">
        {#each logos.images as logo}
          <img 
            src={logo.src} 
            alt={logo.alt} 
            class="max-h-12 object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110" 
            width="158" 
            height="48" 
            loading="lazy" 
          />
        {/each}
      </div>
    </div>
  </div>
</div>
