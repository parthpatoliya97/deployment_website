<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

  export let advantages,primaryColor;
  // export let primaryColor = "blue"; // Default fallback color

  onMount(() => {
    if (typeof window !== "undefined") {
      // Animate feature blocks (text)
      gsap.utils.toArray(".feature-block").forEach((block, index) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              end: "top 20%", // Ensures reverse effect when scrolling up
              toggleActions: "play reverse play reverse", // Runs both ways
            },
          }
        );
      });

      // Animate images with a slight scale-in effect
      gsap.utils.toArray(".feature-image").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "top 30%", // Ensures reverse effect when scrolling up
              toggleActions: "play reverse play reverse", // Runs both ways
            },
          }
        );
      });
    }
  });
</script>

<!-- Advantages Header -->
<div class="bg-white py-6 sm:py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base/7 font-semibold" style="color: var(--tw-color-{primaryColor}-500);">
        {advantages.label}
      </h2>
      <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {advantages.title}
      </p>
      <p class="mt-2 text-lg text-gray-600">{advantages.description}</p>
    </div>
  </div>
</div>

<!-- Features Sections -->
{#each advantages.data as advantage, i}
  <div class="feature-block overflow-hidden bg-white py-6 sm:py-8">
    <div class="mx-auto max-w-7xl md:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        
        <!-- Content Block -->
        <div class={`px-6 lg:px-0 lg:pt-4 lg:pr-4 ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <p class="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {advantage.title}
            </p>
            <p class="mt-6 text-lg text-gray-600">
              {advantage.description}
            </p>
          </div>
        </div>

        <!-- Image Block -->
        <div class="sm:px-6 lg:px-0">
          <div class={`relative isolate overflow-hidden ${advantage.bgColor || 'bg-gray-100'} px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none`}>
            <div class={`absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] ${advantage.bgColorOverlay || 'bg-gray-300'} opacity-20 ring-1 ring-white ring-inset`} aria-hidden="true"></div>
            <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <img
                src={advantage.image}
                alt={advantage.title}
                width="2432"
                height="1442"
                class="feature-image -mb-12 w-[37rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
              />
            </div>
            <div class="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/each}
