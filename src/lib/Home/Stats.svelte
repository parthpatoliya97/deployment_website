<script>
  import { onMount } from "svelte";

  export let stats;

  let counters = [];

  function animateCountUp(el, target) {
      let start = 0;
      let duration = 2000; // 2 seconds
      let stepTime = Math.abs(Math.floor(duration / target));
      
      function step() {
          start += 1;
          el.textContent = start + "+";
          if (start < target) {
              setTimeout(step, stepTime);
          }
      }
      step();
  }

  onMount(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      const value = parseInt(entry.target.getAttribute("data-value"));
                      animateCountUp(entry.target, value);
                      observer.unobserve(entry.target);
                  }
              });
          },
          { threshold: 0.6 } // Trigger when 60% is visible
      );

      counters.forEach((counter) => observer.observe(counter));
  });
</script>

<div 
  class="relative bg-cover bg-center bg-no-repeat py-16 sm:py-24" 
  style="background-image: url({stats.bgImage})"
>
  <div class="absolute inset-0 bg-gray-900 opacity-50"></div>

  <div class="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h2 class="text-lg font-semibold text-indigo-400">{stats.label}</h2>
      <p class="mt-2 text-4xl font-bold text-white sm:text-5xl">{stats.title}</p>
      <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">{stats.description}</p>

      <dl class="mt-12 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {#each stats.data as item, index}
              <div class="mx-auto flex max-w-xs flex-col gap-y-3">
                  <dt class="text-lg text-indigo-300">{item.title}</dt>
                  <dd 
                      class="order-first text-4xl font-bold text-white sm:text-5xl animate-ticker"
                      bind:this={counters[index]}
                      data-value={parseInt(item.description)}
                  >
                      0+
                  </dd>
              </div>
          {/each}
      </dl>
  </div>
</div>
