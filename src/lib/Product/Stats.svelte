<script>
  import { onMount } from "svelte";

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

<div class="bg-indigo-100 py-12 sm:py-16">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base text-gray-900">Licenses Sold</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                  bind:this={counters[0]} data-value="325">0+
              </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base text-gray-900">5 Star Reviews</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                  bind:this={counters[1]} data-value="40">0+
              </dd>
          </div>
          <div class="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt class="text-base text-gray-900">Countries Served</dt>
              <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                  bind:this={counters[2]} data-value="100">0+
              </dd>
          </div>
      </dl>
  </div>
</div>

  