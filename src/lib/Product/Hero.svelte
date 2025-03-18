<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let hero;

  onMount(() => {
      gsap.from(".hero-title", {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power3.out"
      });

      gsap.from(".hero-description", {
          opacity: 0,
          y: 50,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out"
      });

      gsap.from(".hero-buttons", {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.6,
          ease: "power3.out",
          stagger: 0.2
      });

      gsap.from(".hero-image", {
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          delay: 0.8,
          ease: "power3.out"
      });

      gsap.to(".floating-shape", {
          y: 20,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut"
      });
  });
</script>

<div class="relative bg-white">
  <div class="relative isolate pt-14">
      <!-- Floating Background Shape -->
      <div
          class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 floating-shape"
          aria-hidden="true"
      >
          <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
      </div>

      <div class="py-6 sm:py-8 lg:pb-40">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-2xl text-center">
                  <h1 class="hero-title text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                      {hero.title}
                  </h1>
                  <p class="hero-description mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                      {hero.description}
                  </p>
                  <div class="mt-10 flex items-center justify-center gap-x-6 hero-buttons">
                      <a
                          href="{hero.ctas[0].link}"
                          target="_blank"
                          class="rounded-md bg-blue-600 px-5 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-{hero.primaryColor}-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{hero.primaryColor}-600"
                      >
                          {hero.ctas[0].title}
                      </a>
                      <a href="{hero.ctas[1].link}" target="_blank" class="text-lg font-semibold text-gray-900 hover:underline">
                          {hero.ctas[1].title} <span aria-hidden="true">→</span>
                      </a>
                  </div>
              </div>

              <!-- Hero Image with Animation -->
              <div class="mt-16 flow-root sm:mt-24">
                  <div class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                      <img
                          src="{hero.image}"
                          alt="{hero.alt}"
                          width="2432"
                          height="1442"
                          class="hero-image rounded-md ring-1 shadow-2xl ring-gray-900/10"
                          loading="lazy"
                      />
                  </div>
              </div>
          </div>
      </div>

      <!-- Floating Background Shape (Bottom) -->
      <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] floating-shape"
          aria-hidden="true"
      >
          <div
              class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          ></div>
      </div>
  </div>
</div>
