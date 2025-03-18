<!-- Faq.svelte -->
<script>
  import { slide } from 'svelte/transition';

  export let faqs;

  // Toggle open state for a FAQ item
  function toggle(index) {
    faqs.data = faqs.data.map((faq, i) =>
      i === index ? { ...faq, open: !faq.open } : faq
    );
  }
</script>

<div class="bg-white">
  <div class="mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:px-8 lg:py-40">
    <div class="mx-auto max-w-4xl">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {faqs.title}
      </h2>
      <dl class="mt-16 divide-y divide-gray-900/10">
        {#each faqs.data as faq, index}
          <div class="py-6 first:pt-0 last:pb-0">
            <dt>
              <!-- Expand/collapse question button -->
              <button
                type="button"
                on:click={() => toggle(index)}
                class="flex w-full items-start justify-between text-left text-gray-900"
                aria-controls={"faq-" + index}
                aria-expanded={faq.open}
              >
                <span class="text-base/7 font-semibold">{faq.title}</span>
                <span class="ml-6 flex h-7 items-center">
                  {#if !faq.open}
                    <!-- Icon when question is collapsed -->
                    <svg
                      class="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  {:else}
                    <!-- Icon when question is expanded -->
                    <svg
                      class="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                    </svg>
                  {/if}
                </span>
              </button>
            </dt>
            {#if faq.open}
              <dd class="mt-2 pr-12" id={"faq-" + index} transition:slide>
                <p class="text-base/7 text-gray-600">{faq.description}</p>
              </dd>
            {/if}
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>
